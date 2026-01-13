import joblib
import numpy as np
from typing import Dict, Any

class PredictionService:
    """Handle ML predictions"""
    
    def __init__(self, model_path: str):
        self.model = joblib.load(model_path)
    
    def predict(self, features: Dict[str, Any]) -> Dict[str, Any]:
        """Make prediction and return result"""
        # Feature order must match training
        feature_array = [
            features['age'],
            features['gender'],
            features['height'],
            features['weight'],
            features['ap_hi'],
            features['ap_lo'],
            features['cholesterol'],
            features['gluc'],
            features['smoke'],
            features['alco'],
            features['active']
        ]
        
        # Get prediction
        prediction = self.model.predict([feature_array])[0]
        probability = self.model.predict_proba([feature_array])[0]
        
        # Calculate risk level
        risk_probability = probability[1] * 100
        
        return {
            'prediction': int(prediction),
            'risk_probability': round(risk_probability, 2),
            'risk_level': self._get_risk_level(risk_probability),
            'message': self._get_message(prediction)
        }
    
    def _get_risk_level(self, probability: float) -> str:
        """Determine risk level based on probability"""
        if probability < 30:
            return 'Low'
        elif probability < 60:
            return 'Moderate'
        else:
            return 'High'
    
    def _get_message(self, prediction: int) -> str:
        """Get appropriate message for prediction"""
        if prediction == 1:
            return "High Risk of Cardiovascular Disease Detected"
        return "Low Risk - Healthy Cardiovascular Profile"
    
    def get_recommendations(self, features: Dict[str, Any], prediction: int) -> list:
        """Generate personalized recommendations"""
        recommendations = []
        
        # BMI calculation
        height_m = features['height'] / 100
        bmi = features['weight'] / (height_m ** 2)
        
        if bmi > 25:
            recommendations.append({
                'category': 'Weight Management',
                'message': 'Consider weight reduction through diet and exercise',
                'priority': 'high'
            })
        
        # Blood pressure
        if features['ap_hi'] > 140 or features['ap_lo'] > 90:
            recommendations.append({
                'category': 'Blood Pressure',
                'message': 'Monitor and manage blood pressure regularly',
                'priority': 'high'
            })
        
        # Cholesterol
        if features['cholesterol'] >= 2:
            recommendations.append({
                'category': 'Cholesterol',
                'message': 'Follow a heart-healthy diet low in saturated fats',
                'priority': 'medium'
            })
        
        # Glucose
        if features['gluc'] >= 2:
            recommendations.append({
                'category': 'Blood Sugar',
                'message': 'Monitor blood glucose levels and reduce sugar intake',
                'priority': 'medium'
            })
        
        # Lifestyle factors
        if features['smoke'] == 1:
            recommendations.append({
                'category': 'Smoking',
                'message': 'Quit smoking to significantly reduce cardiovascular risk',
                'priority': 'high'
            })
        
        if features['active'] == 0:
            recommendations.append({
                'category': 'Physical Activity',
                'message': 'Engage in at least 150 minutes of moderate exercise weekly',
                'priority': 'medium'
            })
        
        if features['alco'] == 1:
            recommendations.append({
                'category': 'Alcohol',
                'message': 'Limit alcohol consumption to recommended levels',
                'priority': 'low'
            })
        
        return recommendations