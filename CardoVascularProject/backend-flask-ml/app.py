from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Load ML model
model = joblib.load("cardio_model.pkl")


@app.route('/')
def home():
    return "Server Started! 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # Feature order MUST match training
        features = [
            data["age"],
            data["gender"],
            data["height"],
            data["weight"],
            data["ap_hi"],
            data["ap_lo"],
            data["cholesterol"],
            data["gluc"],
            data["smoke"],
            data["alco"],
            data["active"]
        ]

        prediction = model.predict([features])[0]

        return jsonify({
            "prediction": int(prediction),
            "message": "High Risk of Cardiovascular Disease 🚨"
            if prediction == 1
            else "Low Risk (Healthy) ✅"
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(debug=True)
