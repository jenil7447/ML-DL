import os

class Config:
    """Application configuration"""
    DEBUG = True
    HOST = '0.0.0.0'
    PORT = 5000
    MODEL_PATH = 'models/cardio_model.pkl'
    
    # Validation ranges
    VALIDATION_RULES = {
        'age': {'min': 29, 'max': 64},
        'gender': {'values': [1, 2]},
        'height': {'min': 100, 'max': 250},
        'weight': {'min': 40, 'max': 200},
        'ap_hi': {'min': 50, 'max': 250},
        'ap_lo': {'min': 30, 'max': 150},
        'cholesterol': {'values': [1, 2, 3]},
        'gluc': {'values': [1, 2, 3]},
        'smoke': {'values': [0, 1]},
        'alco': {'values': [0, 1]},
        'active': {'values': [0, 1]}
    }