from pydantic import BaseModel
from typing import List, Optional

class ResumeRequest(BaseModel):
    file_path: Optional[str] = None
    text: Optional[str] = None

class SkillsResponse(BaseModel):
    skills: List[str]
    status: str
    message: Optional[str] = None

class ErrorResponse(BaseModel):
    error: str
    details: Optional[str] = None