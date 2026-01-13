'use client';

import React from 'react';
import { Card } from '@/src/components/ui/Card';

export default function AboutPage() {
    return (
        <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
                        Project Overview
                    </h1>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        Cardiovascular Disease Prediction using Machine Learning
                    </p>
                </div>

                {/* Project Introduction */}
                <section className="space-y-6">
                    <Card>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Introduction</h2>
                        <p className="text-[var(--color-text-muted)] leading-relaxed">
                            This machine learning project focuses on predicting the presence of cardiovascular disease in patients using a dataset of 70,000 patient records. The goal is to build an accurate binary classification model that can identify whether a patient has cardiovascular disease based on various health metrics and lifestyle factors.
                        </p>
                    </Card>
                </section>

                {/* Dataset Overview */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">Dataset Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">Numerical Features</h3>
                            <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-muted)]">
                                <li><strong>Age:</strong> 29 to 64 years</li>
                                <li><strong>Height:</strong> 100-250 cm</li>
                                <li><strong>Weight:</strong> 40-200 kg</li>
                                <li><strong>Systolic BP:</strong> 60-240 mmHg</li>
                                <li><strong>Diastolic BP:</strong> 30-150 mmHg</li>
                            </ul>
                        </Card>
                        <Card>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">Categorical Features</h3>
                            <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-muted)]">
                                <li><strong>Gender:</strong> Male / Female</li>
                                <li><strong>Cholesterol:</strong> Normal / Above / Well Above</li>
                                <li><strong>Glucose:</strong> Normal / Above / Well Above</li>
                                <li><strong>Lifestyle:</strong> Smoking, Alcohol, Physical Activity</li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Data Cleaning */}
                <section className="space-y-6">
                    <Card>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Data Preparation & Cleaning</h2>
                        <div className="space-y-4 text-[var(--color-text-muted)]">
                            <p>
                                <strong>Initial Dataset:</strong> 70,000 records. <br />
                                <strong>Final Cleaned Dataset:</strong> 68,574 records (98%).
                            </p>
                            <div>
                                <h4 className="font-semibold mb-2">Quality Issues Addressed:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Removed extreme blood pressure outliers (e.g., max 16,020 mmHg).</li>
                                    <li>Removed unrealistic physical measurements (weights &lt; 40kg).</li>
                                    <li>Filtered invalid blood pressure logic (Systolic must be &gt; Diastolic).</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Model Performance */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">Model Performance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <div className="text-4xl font-bold text-[var(--foreground)] mb-2">73.23%</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Cross-Validation Accuracy</div>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl font-bold text-[var(--foreground)] mb-2">0.77</div>
                            <div className="text-sm text-[var(--color-text-muted)]">ROC-AUC Score</div>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl font-bold text-[var(--foreground)] mb-2">54,859</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Training Samples</div>
                        </Card>
                    </div>

                    <Card>
                        <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Optimization</h3>
                        <p className="text-[var(--color-text-muted)] mb-4">
                            The Random Forest model was optimized using RandomizedSearchCV to prevent overfitting.
                        </p>
                        <div className="bg-[var(--card-bg)] border border-[var(--color-border)] p-4 rounded-lg text-sm">
                            <code className="text-[var(--foreground)]">
                                <strong>Best Parameters:</strong><br />
                                n_estimators: 100<br />
                                max_depth: 10<br />
                                min_samples_split: 2<br />
                                min_samples_leaf: 4
                            </code>
                        </div>
                    </Card>
                </section>

                {/* Feature Importance */}
                <section className="space-y-6">
                    <Card>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Key Risk Factors</h2>
                        <div className="space-y-4">
                            <p className="text-[var(--color-text-muted)]">The model identified the following as the most critical predictors of cardiovascular disease:</p>
                            <ol className="list-decimal pl-5 space-y-2 font-medium text-[var(--foreground)]">
                                <li>Systolic Blood Pressure (Most Important)</li>
                                <li>Age</li>
                                <li>Weight</li>
                                <li>Diastolic Blood Pressure</li>
                                <li>Cholesterol Levels</li>
                            </ol>
                        </div>
                    </Card>
                </section>

                {/* Developer Credit */}
                <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
                    <p className="text-[var(--color-text-muted)] font-medium">
                        This website and machine learning model were built by <span className="text-[var(--foreground)] font-bold">Jenil Jethva</span> using clean architecture principles and modern web technologies.
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
                    <p>
                        ⚠️ For educational purposes only. Always consult healthcare professionals for medical advice.
                    </p>
                </div>
            </div>
        </div>
    );
}
