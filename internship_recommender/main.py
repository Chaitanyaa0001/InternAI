from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import pandas as pd
from models import RecommendationRequest, RecommendationResponse, InternshipRecommendation
from recommender import get_recommender


app = FastAPI(
    title="Internship Recommendation API",
    description="API to recommend internships based on skills",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


CSV_FILE_PATH = "data/internship_data.csv"

@app.on_event("startup")
async def startup_event():
    """Initialize the recommender on startup"""
    try:
        get_recommender(CSV_FILE_PATH)
        print("Recommender system initialized successfully")
    except Exception as e:
        print(f"Error initializing recommender: {e}")

@app.post("/recommend", response_model=RecommendationResponse)
async def recommend_internships(request: RecommendationRequest):
    """
    Get internship recommendations based on skills
    
    - **skills**: List of skills the user possesses
    - **location**: Optional location filter
    - **min_stipend**: Optional minimum stipend filter
    - **max_results**: Maximum number of results to return (default: 10)
    """
    try:
        
        recommender = get_recommender(CSV_FILE_PATH)
        
        
        recommendations = recommender.recommend_internships(
            user_skills=request.skills,
            location=request.location,
            min_stipend=request.min_stipend,
            max_results=request.max_results or 10
        )
        
        
        internship_recommendations = [
            InternshipRecommendation(**rec) for rec in recommendations
        ]
        
        return RecommendationResponse(
            recommendations=internship_recommendations,
            total_matches=len(internship_recommendations),
            input_skills=request.skills
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating recommendations: {str(e)}")

@app.get("/all-internships")
async def get_all_internships():
    """Get all available internships"""
    try:
        df = pd.read_csv(CSV_FILE_PATH)
        return df.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading data: {str(e)}")

@app.get("/skills")
async def get_all_skills():
    """Get all unique skills from the dataset"""
    try:
        df = pd.read_csv(CSV_FILE_PATH)
        all_skills = []
        
        for skills in df['skills required'].dropna():
            # Clean and split skills
            cleaned_skills = skills.replace('"', '').split(',')
            cleaned_skills = [skill.strip() for skill in cleaned_skills if skill.strip()]
            all_skills.extend(cleaned_skills)
        
        unique_skills = sorted(list(set(all_skills)))
        return {"skills": unique_skills, "count": len(unique_skills)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error extracting skills: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Internship Recommendation API - Use POST /recommend to get recommendations"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "internship_recommender"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)