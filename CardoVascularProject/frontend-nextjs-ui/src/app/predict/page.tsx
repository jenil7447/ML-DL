'use client';

import React, { useState } from 'react';
import { PredictionForm } from '@/src/components/features/PredictionForm';
import { ResultsDisplay } from '@/src/components/features/ResultsDisplay';
import { Alert } from '@/src/components/ui/Alert';
import { apiService } from '@/src/services/api';
import { PatientData, PredictionResult } from '@/src/types';

export default function PredictPage() {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async (data: PatientData) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const prediction = await apiService.predict(data);
      setResult(prediction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Prediction failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-6">
            Patient Assessment
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] font-sans max-w-2xl mx-auto">
            Complete the clinical form below. Our AI model will analyze the 11 biomarkers to estimate cardiovascular risk.
          </p>
        </div>

        {error && (
          <div className="mb-6">
            <Alert
              type="error"
              title="Prediction Error"
              message={error}
              onClose={() => setError(null)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!result && (
              <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
            )}
            {result && <ResultsDisplay result={result} />}
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--color-secondary)] text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Model Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Random Forest Classifier</li>
                <li>• 73.23% Accuracy</li>
                <li>• 68,574 Training Samples</li>
                <li>• 11 Feature Variables</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-4">Risk Factors</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>• High Blood Pressure</li>
                <li>• High Cholesterol</li>
                <li>• High Glucose Levels</li>
                <li>• Smoking</li>
                <li>• Alcohol Consumption</li>
                <li>• Lack of Physical Activity</li>
                <li>• Age & BMI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}