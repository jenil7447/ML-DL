// frontend/src/components/features/PredictionForm.tsx
'use client';

import React, { useState } from 'react';
import { Input } from '@/src/components/ui/Input';
import { Select } from '@/src/components/ui/Select';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { PatientData } from '@/src/types';
import {
  GENDER_OPTIONS,
  LEVEL_OPTIONS,
  BINARY_OPTIONS,
  VALIDATION_RULES,
} from '@/src/utils/constants';

interface PredictionFormProps {
  onSubmit: (data: PatientData) => void;
  isLoading: boolean;
}

export const PredictionForm: React.FC<PredictionFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState<PatientData>({
    age: '',
    gender: '',
    height: '',
    weight: '',
    ap_hi: '',
    ap_lo: '',
    cholesterol: '',
    gluc: '',
    smoke: '',
    alco: '',
    active: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = () => {
    return Object.values(formData).every((val) => val !== '');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <Card>
        <div className="flex items-center mb-6">
          <div className="bg-[#021024] p-2 rounded-lg mr-3">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#021024]">
            Personal Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Age (years)"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g., 50"
            min={VALIDATION_RULES.age.min}
            max={VALIDATION_RULES.age.max}
            required
          />
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={GENDER_OPTIONS}
            required
          />
          <Input
            label="Height (cm)"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
            placeholder="e.g., 170"
            min={VALIDATION_RULES.height.min}
            max={VALIDATION_RULES.height.max}
            required
          />
          <Input
            label="Weight (kg)"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g., 75"
            min={VALIDATION_RULES.weight.min}
            max={VALIDATION_RULES.weight.max}
            required
          />
        </div>
      </Card>

      {/* Blood Pressure */}
      <Card>
        <div className="flex items-center mb-6">
          <div className="bg-[#021024] p-2 rounded-lg mr-3">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#021024]">Blood Pressure</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Systolic (Upper)"
            name="ap_hi"
            type="number"
            value={formData.ap_hi}
            onChange={handleChange}
            placeholder="e.g., 120"
            min={VALIDATION_RULES.ap_hi.min}
            max={VALIDATION_RULES.ap_hi.max}
            helperText="Normal: 90-120 mmHg"
            required
          />
          <Input
            label="Diastolic (Lower)"
            name="ap_lo"
            type="number"
            value={formData.ap_lo}
            onChange={handleChange}
            placeholder="e.g., 80"
            min={VALIDATION_RULES.ap_lo.min}
            max={VALIDATION_RULES.ap_lo.max}
            helperText="Normal: 60-80 mmHg"
            required
          />
        </div>
      </Card>

      {/* Medical Indicators */}
      <Card>
        <div className="flex items-center mb-6">
          <div className="bg-[#021024] p-2 rounded-lg mr-3">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#021024]">
            Medical Indicators
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Cholesterol Level"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            options={LEVEL_OPTIONS}
            required
          />
          <Select
            label="Glucose Level"
            name="gluc"
            value={formData.gluc}
            onChange={handleChange}
            options={LEVEL_OPTIONS}
            required
          />
        </div>
      </Card>

      {/* Lifestyle Factors */}
      <Card>
        <div className="flex items-center mb-6">
          <div className="bg-[#021024] p-2 rounded-lg mr-3">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#021024]">
            Lifestyle Factors
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Smoking"
            name="smoke"
            value={formData.smoke}
            onChange={handleChange}
            options={BINARY_OPTIONS}
            required
          />
          <Select
            label="Alcohol Consumption"
            name="alco"
            value={formData.alco}
            onChange={handleChange}
            options={BINARY_OPTIONS}
            required
          />
          <Select
            label="Physical Activity"
            name="active"
            value={formData.active}
            onChange={handleChange}
            options={BINARY_OPTIONS}
            required
          />
        </div>
      </Card>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        isLoading={isLoading}
        disabled={!isFormValid()}
        className="w-full"
      >
        Predict Cardiovascular Risk
      </Button>
    </form>
  );
};