from flask import Flask, request, jsonify
from flask_cors import CORS
from config.config import Config
from services.prediction_service import PredictionService
from utils.validators import DataValidator
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Initialize services
prediction_service = PredictionService(Config.MODEL_PATH)
validator = DataValidator()


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'CardioPredict API is running'
    }), 200


@app.route('/predict', methods=['POST'])
def predict():
    """Prediction endpoint with validation"""
    try:
        data = request.get_json()
        
        # Validate required fields
        missing_fields = validator.validate_required_fields(data)
        if missing_fields:
            return jsonify({'error': missing_fields}), 400
        
        # Convert to numbers
        features = {
            key: float(value) if key in ['weight'] else int(value)
            for key, value in data.items()
        }
        
        # Validate data ranges
        validation_errors = validator.validate_patient_data(features)
        if validation_errors:
            return jsonify({'errors': validation_errors}), 400
        
        # Make prediction
        result = prediction_service.predict(features)
        
        # Get recommendations
        recommendations = prediction_service.get_recommendations(
            features, 
            result['prediction']
        )
        
        response = {
            **result,
            'recommendations': recommendations
        }
        
        logger.info(f"Prediction made: {result['prediction']}")
        return jsonify(response), 200
        
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        return jsonify({
            'error': 'An error occurred during prediction',
            'details': str(e)
        }), 500


@app.route('/model-info', methods=['GET'])
def model_info():
    """Get model information"""
    return jsonify({
        'model_type': 'Random Forest Classifier',
        'accuracy': 73.23,
        'training_samples': 68574,
        'features': [
            'Age', 'Gender', 'Height', 'Weight', 
            'Systolic BP', 'Diastolic BP',
            'Cholesterol', 'Glucose', 
            'Smoking', 'Alcohol', 'Physical Activity'
        ]
    }), 200


if __name__ == '__main__':
    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=Config.DEBUG
    )