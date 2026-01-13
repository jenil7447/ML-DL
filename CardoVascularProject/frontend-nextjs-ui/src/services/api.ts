import { PatientData, PredictionResult, ModelInfo } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

class ApiService {
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return response.json();
  }

  async predict(data: PatientData): Promise<PredictionResult> {
    return this.request<PredictionResult>('/predict', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getModelInfo(): Promise<ModelInfo> {
    return this.request<ModelInfo>('/model-info');
  }

  async healthCheck(): Promise<{ status: string; message: string }> {
    return this.request('/health');
  }
}

export const apiService = new ApiService();