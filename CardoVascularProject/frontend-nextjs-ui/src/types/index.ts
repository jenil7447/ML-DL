export interface PatientData {
  age: number | string;
  gender: number | string;
  height: number | string;
  weight: number | string;
  ap_hi: number | string;
  ap_lo: number | string;
  cholesterol: number | string;
  gluc: number | string;
  smoke: number | string;
  alco: number | string;
  active: number | string;
}

export interface PredictionResult {
  prediction: number;
  risk_probability: number;
  risk_level: string;
  message: string;
  recommendations?: Recommendation[];
}

export interface Recommendation {
  category: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ModelInfo {
  model_type: string;
  accuracy: number;
  training_samples: number;
  features: string[];
}