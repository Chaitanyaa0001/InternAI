from pydantic import BaseModel
from typing import List, Optional

class RecommendationRequest(BaseModel):
    skills: List[str]
    location: Optional[str] = None
    min_stipend: Optional[float] = None
    max_results: Optional[int] = 10

class InternshipRecommendation(BaseModel):
    title: str
    stipend: str
    location: str
    skills_required: List[str]
    match_score: float

class RecommendationResponse(BaseModel):
    recommendations: List[InternshipRecommendation]
    total_matches: int
    input_skills: List[str]