// frontend/src/components/features/ResultsDisplay.tsx
import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { PredictionResult } from '@/src/types';

interface ResultsDisplayProps {
  result: PredictionResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const isHighRisk = result.prediction === 1;

  return (
    <div className="space-y-6">
      {/* Main Result Card */}
      <Card
        variant={isHighRisk ? 'default' : 'default'}
        className={`${
          isHighRisk
            ? 'border-red-300 bg-red-50'
            : 'border-green-300 bg-green-50'
        } border-2`}
      >
        <div className="flex items-start space-x-4">
          <div
            className={`${
              isHighRisk ? 'bg-red-500' : 'bg-green-500'
            } p-3 rounded-full`}
          >
            {isHighRisk ? (
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h3
              className={`text-2xl font-bold mb-2 ${
                isHighRisk ? 'text-red-900' : 'text-green-900'
              }`}
            >
              {result.message}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    isHighRisk ? 'text-red-800' : 'text-green-800'
                  }`}
                >
                  Risk Probability:
                </span>
                <span
                  className={`text-lg font-bold ${
                    isHighRisk ? 'text-red-900' : 'text-green-900'
                  }`}
                >
                  {result.risk_probability}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    isHighRisk ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${result.risk_probability}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span
                  className={isHighRisk ? 'text-red-700' : 'text-green-700'}
                >
                  Risk Level: {result.risk_level}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 pt-6 border-t ${
            isHighRisk ? 'border-red-200' : 'border-green-200'
          }`}
        >
          <p
            className={`text-sm ${
              isHighRisk ? 'text-red-800' : 'text-green-800'
            }`}
          >
            {isHighRisk
              ? '⚠️ Please consult with a healthcare professional for proper evaluation and treatment.'
              : '✓ Continue maintaining a healthy lifestyle with regular check-ups.'}
          </p>
        </div>
      </Card>

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <Card>
          <h3 className="text-xl font-bold text-[#021024] mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            Personalized Recommendations
          </h3>
          <div className="space-y-4">
            {result.recommendations.map((rec, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  rec.priority === 'high'
                    ? 'bg-red-50 border-red-500'
                    : rec.priority === 'medium'
                    ? 'bg-yellow-50 border-yellow-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#021024] mb-1">
                      {rec.category}
                    </h4>
                    <p className="text-sm text-gray-700">{rec.message}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      rec.priority === 'high'
                        ? 'bg-red-200 text-red-800'
                        : rec.priority === 'medium'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}
                  >
                    {rec.priority.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 px-6 py-3 bg-[#021024] text-white rounded-lg font-semibold hover:bg-[#052659] transition-colors"
        >
          New Prediction
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 px-6 py-3 border-2 border-[#021024] text-[#021024] rounded-lg font-semibold hover:bg-[#021024] hover:text-white transition-colors"
        >
          Print Results
        </button>
      </div>
    </div>
  );
};