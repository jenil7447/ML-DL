export const COLORS = {
  primary: '#021024',
  secondary: '#052659',
  accent: '#5483B3',
  light: '#7DA0CA',
  lighter: '#C1E8FF',
} as const;

export const GENDER_OPTIONS = [
  { value: '1', label: 'Female' },
  { value: '2', label: 'Male' },
];

export const LEVEL_OPTIONS = [
  { value: '1', label: 'Normal' },
  { value: '2', label: 'Above Normal' },
  { value: '3', label: 'Well Above Normal' },
];

export const BINARY_OPTIONS = [
  { value: '0', label: 'No' },
  { value: '1', label: 'Yes' },
];

export const VALIDATION_RULES = {
  age: { min: 29, max: 64 },
  height: { min: 100, max: 250 },
  weight: { min: 40, max: 200 },
  ap_hi: { min: 50, max: 250 },
  ap_lo: { min: 30, max: 150 },
};