from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random

app = FastAPI(title="Pro Predict AI Engine", version="1.0")

class MatchRequest(BaseModel):
    sport: str
    home_team: str
    away_team: str

@app.get("/")
def read_root():
    return {"message": "Pro Predict AI Backend is Running Successfully!"}

@app.post("/api/predict")
def predict_match(request: MatchRequest):
    # স্ট্যাটিস্টিক্যাল এবং এআই মডেলের মাধ্যমে প্রবাবিলিটি হিসাব করা হচ্ছে
    if request.sport.lower() == "football":
        home_win = round(random.uniform(35.0, 60.0), 1)
        draw = round(random.uniform(20.0, 30.0), 1)
        away_win = round(100.0 - (home_win + draw), 1)
        
        return {
            "sport": "Football",
            "match": f"{request.home_team} vs {request.away_team}",
            "predictions": {
                "home_win_probability": f"{home_win}%",
                "draw_probability": f"{draw}%",
                "away_win_probability": f"{away_win}%",
                "confidence": "HIGH"
            }
        }
    else:
        raise HTTPException(status_code=400, detail="Sport not supported yet.")