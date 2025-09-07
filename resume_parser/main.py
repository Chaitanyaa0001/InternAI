from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from typing import List, Optional
import spacy
import pdfplumber
import docx
import os
import tempfile
from models import ResumeRequest, SkillsResponse, ErrorResponse

app = FastAPI(
    title="Resume Parser API",
    description="API to extract skills from resumes",
    version="1.0.0"
)

try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("Please download the spaCy model: python -m spacy download en_core_web_sm")
    nlp = None

COMMON_SKILLS = {
    'python', 'java', 'javascript', 'typescript', 'html', 'css', 'react', 
    'angular', 'vue', 'node.js', 'express', 'django', 'flask', 'fastapi',
    'sql', 'mysql', 'postgresql', 'mongodb', 'redis', 'aws', 'azure',
    'docker', 'kubernetes', 'git', 'jenkins', 'linux', 'unix', 'bash',
    'machine learning', 'deep learning', 'tensorflow', 'pytorch', 'scikit-learn',
    'pandas', 'numpy', 'matplotlib', 'seaborn', 'excel', 'tableau', 'powerbi',
    'agile', 'scrum', 'devops', 'ci/cd', 'rest api', 'graphql', 'microservices',
    'c++', 'c#', 'ruby', 'php', 'go', 'rust', 'swift', 'kotlin',
    'jira', 'confluence', 'firebase', 'heroku', 'bitbucket', 's3', 'lambda',
    'cloudformation', 'terraform', 'ansible', 'prometheus', 'grafana', 'elasticsearch',
    'solr', 'hadoop', 'spark', 'bigquery', 'airflow', 'snowflake', 'sas',
    'r', 'stata', 'shell scripting', 'powershell', 'objective-c', 'assembly',
    'matlab', 'octave', 'd3.js', 'plotly', 'bootstrap', 'sass', 'less',
    'webpack', 'babel', 'eslint', 'prettier', 'storybook', 'redux', 'mobx',
    'spring', 'hibernate', 'laravel', 'symfony', 'drupal', 'wordpress', 'magento',
    'shopify', 'woocommerce', 'salesforce', 'servicenow', 'oracle', 'db2',
    'cobol', 'fortran', 'perl', 'scala', 'haskell', 'clojure', 'erlang',
    'f#', 'elm', 'svelte', 'next.js', 'nuxt.js', 'gatsby', 'electron',
    'unity', 'unreal engine', 'blender', 'autocad', 'solidworks', 'figma',
    'adobe xd', 'photoshop', 'illustrator', 'invision', 'sketch', 'canva',
    'artificial intelligence', 'natural language processing', 'nlp', 'computer vision',
    'reinforcement learning', 'generative ai', 'llm', 'transformers', 'bert', 'gpt',
    'openai', 'huggingface', 'spaCy', 'nltk', 'coreml', 'onnx', 'mxnet', 'caffe',
    'speech recognition', 'image classification', 'object detection', 'yolo', 'ssd',
    'rnn', 'cnn', 'gan', 'autoencoder', 'xgboost', 'lightgbm', 'catboost',
    'feature engineering', 'model deployment', 'mlops', 'data labeling', 'data augmentation',
    'zero-shot learning', 'few-shot learning', 'transfer learning', 'prompt engineering',
    'sentence transformers', 'word2vec', 'fasttext', 'glove', 'text classification',
    'tokenization', 'named entity recognition', 'question answering', 'summarization',
    'speech-to-text', 'text-to-speech', 'image segmentation', 'anomaly detection'
}

def extract_text_from_pdf(file_path: str) -> str:
    """Extract text from PDF file"""
    text = ""
    try:
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        raise Exception(f"Error reading PDF: {str(e)}")
    return text

def extract_text_from_docx(file_path: str) -> str:
    """Extract text from DOCX file"""
    try:
        doc = docx.Document(file_path)
        text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
        return text
    except Exception as e:
        raise Exception(f"Error reading DOCX: {str(e)}")

def extract_text_from_file(file_path: str) -> str:
    """Extract text from various file formats"""
    if file_path.lower().endswith('.pdf'):
        return extract_text_from_pdf(file_path)
    elif file_path.lower().endswith(('.docx', '.doc')):
        return extract_text_from_docx(file_path)
    elif file_path.lower().endswith('.txt'):
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    else:
        raise Exception("Unsupported file format. Supported formats: PDF, DOCX, DOC, TXT")

def extract_skills(text: str) -> List[str]:
    """Extract skills from text using spaCy NER and pattern matching"""
    if not nlp:
        raise Exception("spaCy model not loaded")
    
    doc = nlp(text.lower())
    
    
    extracted_skills = set()
    
    
    for skill in COMMON_SKILLS:
        if skill in text.lower():
            extracted_skills.add(skill)
    
    
    for ent in doc.ents:
        if ent.label_ in ["ORG", "PRODUCT"]:
            skill = ent.text.lower()
            if any(common_skill in skill for common_skill in COMMON_SKILLS):
                extracted_skills.add(skill)
    
    
    technical_terms = {'framework', 'library', 'language', 'database', 'tool', 'technology'}
    for token in doc:
        if token.text in technical_terms and token.head.text.lower() in COMMON_SKILLS:
            extracted_skills.add(token.head.text.lower())
    
    return sorted(list(extracted_skills))

@app.post("/parse-resume", response_model=SkillsResponse, responses={400: {"model": ErrorResponse}})
async def parse_resume(
    file: UploadFile = File(None),
    text: str = None
):
    """
    Parse resume and extract skills
    
    - **file**: Upload resume file (PDF, DOCX, DOC, TXT)
    - **text**: Direct text input (alternative to file upload)
    """
    try:
        
        if not file and not text:
            raise HTTPException(status_code=400, detail="Either file or text must be provided")
        
        extracted_text = ""
        
        if file:
            
            allowed_extensions = {'.pdf', '.docx', '.doc', '.txt'}
            file_extension = os.path.splitext(file.filename)[1].lower()
            
            if file_extension not in allowed_extensions:
                raise HTTPException(
                    status_code=400, 
                    detail=f"Unsupported file format. Allowed: {', '.join(allowed_extensions)}"
                )
            
            
            with tempfile.NamedTemporaryFile(delete=False, suffix=file_extension) as temp_file:
                content = await file.read()
                temp_file.write(content)
                temp_file_path = temp_file.name
            
            try:
                
                extracted_text = extract_text_from_file(temp_file_path)
            except Exception as e:
                raise HTTPException(status_code=400, detail=str(e))
            finally:
                
                os.unlink(temp_file_path)
        
        elif text:
            extracted_text = text
        
        
        if not nlp:
            raise HTTPException(status_code=500, detail="NLP model not available")
        
        skills = extract_skills(extracted_text)
        
        return SkillsResponse(
            skills=skills,
            status="success",
            message=f"Extracted {len(skills)} skills from resume"
        )
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.post("/parse-resume-json", response_model=SkillsResponse)
async def parse_resume_json(request: ResumeRequest):
    """
    Parse resume from JSON input (file path or text)
    """
    try:
        if request.file_path and request.text:
            raise HTTPException(status_code=400, detail="Provide either file_path or text, not both")
        
        extracted_text = ""
        
        if request.file_path:
            if not os.path.exists(request.file_path):
                raise HTTPException(status_code=400, detail="File not found")
            
            extracted_text = extract_text_from_file(request.file_path)
        
        elif request.text:
            extracted_text = request.text
        
        else:
            raise HTTPException(status_code=400, detail="Either file_path or text must be provided")
        
        
        if not nlp:
            raise HTTPException(status_code=500, detail="NLP model not available")
        
        skills = extract_skills(extracted_text)
        
        return SkillsResponse(
            skills=skills,
            status="success",
            message=f"Extracted {len(skills)} skills from resume"
        )
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Resume Parser API - Use POST /parse-resume to extract skills from resumes"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "nlp_loaded": nlp is not None}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)