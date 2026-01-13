import { PatientData, PredictionResult, ModelInfo } from '../types';

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000').replace(/\/+$/, '');
console.log('API Base URL:', API_BASE_URL);

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

    const text = await response.text();
    let data;

    try {
      data = text ? JSON.parse(text) : {};
    } catch (error) {
      console.error('Failed to parse API response:', text);
      throw new Error(`API Error: Received invalid JSON. Status: ${response.status}. See console for details.`);
    }

    if (!response.ok) {
      throw new Error(data.error || data.details || `Request failed with status ${response.status}`);
    }

    return data;
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