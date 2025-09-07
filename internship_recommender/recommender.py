import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import List, Dict, Any
import re

class InternshipRecommender:
    def __init__(self, csv_file_path: str):
        self.df = self.load_and_preprocess_data(csv_file_path)
        self.vectorizer = TfidfVectorizer()
        self.skill_vectors = self._create_skill_vectors()
    
    def load_and_preprocess_data(self, csv_file_path: str) -> pd.DataFrame:
        """Load and preprocess the internship data"""
        df = pd.read_csv(csv_file_path)
        
        
        df = df.drop_duplicates()
        df = df.reset_index(drop=True)
        
        df['skills_required'] = df['skills required'].apply(self._clean_skills)
        df['skills_required_lower'] = df['skills_required'].apply(
            lambda x: [skill.strip().lower() for skill in x]
        )
        
        
        df['stipend_numeric'] = df['stipend'].apply(self._parse_stipend)
        
        return df
    
    def _clean_skills(self, skills_str: str) -> List[str]:
        """Clean and split skills string"""
        if pd.isna(skills_str):
            return []
        
        
        skills = skills_str.replace('"', '').split(',')
        
        cleaned_skills = [skill.strip() for skill in skills if skill.strip()]
        return cleaned_skills
    
    def _parse_stipend(self, stipend_str: str) -> float:
        """Parse stipend string to numeric value"""
        if pd.isna(stipend_str) or stipend_str.lower() == 'unpaid':
            return 0.0
        
        
        numbers = re.findall(r'\d+', stipend_str.replace(',', ''))
        if numbers:
            
            numbers = [float(num) for num in numbers]
            return sum(numbers) / len(numbers)
        return 0.0
    
    def _create_skill_vectors(self):
        """Create TF-IDF vectors for all internships"""
        
        skill_strings = [' '.join(skills) for skills in self.df['skills_required_lower']]
        return self.vectorizer.fit_transform(skill_strings)
    
    def recommend_internships(
        self, 
        user_skills: List[str], 
        location: str = None, 
        min_stipend: float = None,
        max_results: int = 10
    ) -> List[Dict[str, Any]]:
        """Recommend internships based on user skills"""
        
        user_skills_lower = [skill.lower().strip() for skill in user_skills]
        user_skills_str = ' '.join(user_skills_lower)
        
    
        user_vector = self.vectorizer.transform([user_skills_str])
        
        
        similarity_scores = cosine_similarity(user_vector, self.skill_vectors).flatten()
        
        
        results_df = self.df.copy()
        results_df['similarity_score'] = similarity_scores
        
        
        if location:
            location_lower = location.lower()
            results_df = results_df[
                results_df['location'].str.lower().str.contains(location_lower, na=False)
            ]
        
        
        if min_stipend is not None:
            results_df = results_df[results_df['stipend_numeric'] >= min_stipend]
        
        
        results_df = results_df.sort_values(
            ['similarity_score', 'stipend_numeric'], 
            ascending=[False, False]
        )
        
        
        top_recommendations = results_df.head(max_results)
        
        
        recommendations = []
        for _, row in top_recommendations.iterrows():
            recommendation = {
                'title': row['title'],
                'stipend': row['stipend'],
                'location': row['location'],
                'skills_required': row['skills_required'],
                'match_score': float(row['similarity_score'])
            }
            recommendations.append(recommendation)
        
        return recommendations


recommender = None

def get_recommender(csv_file_path: str):
    global recommender
    if recommender is None:
        recommender = InternshipRecommender(csv_file_path)
    return recommender