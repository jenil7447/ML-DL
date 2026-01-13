'use client';

import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Activity, Database, BarChart2, AlertCircle } from 'lucide-react';

export default function DataInsightsPage() {
    return (
        <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#000000] mb-6 tracking-tight">
                        Data Insights
                    </h1>
                    <p className="text-xl text-[var(--color-text-muted)] font-sans max-w-2xl mx-auto leading-relaxed">
                        A comprehensive analysis of the 70,000+ patient records used to train our predictive model.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <Card className="border-0 shadow-none border-l-4 border-[var(--color-primary)] bg-gray-50 rounded-none">
                        <div className="flex items-center gap-3 mb-2">
                            <Database className="w-5 h-5 text-[var(--color-text-muted)]" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Total Records</span>
                        </div>
                        <div className="text-3xl font-bold font-serif">70,000</div>
                    </Card>
                    <Card className="border-0 shadow-none border-l-4 border-gray-900 bg-gray-50 rounded-none">
                        <div className="flex items-center gap-3 mb-2">
                            <Activity className="w-5 h-5 text-[var(--color-text-muted)]" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Cleaned Data</span>
                        </div>
                        <div className="text-3xl font-bold font-serif">68,574</div>
                        <div className="text-xs text-green-600 mt-1">98% Retention</div>
                    </Card>
                    <Card className="border-0 shadow-none border-l-4 border-[var(--color-brand-blue)] bg-gray-50 rounded-none">
                        <div className="flex items-center gap-3 mb-2">
                            <BarChart2 className="w-5 h-5 text-[var(--color-text-muted)]" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Accuracy</span>
                        </div>
                        <div className="text-3xl font-bold font-serif">73.23%</div>
                    </Card>
                    <Card className="border-0 shadow-none border-l-4 border-[var(--color-brand-red)] bg-gray-50 rounded-none">
                        <div className="flex items-center gap-3 mb-2">
                            <AlertCircle className="w-5 h-5 text-[var(--color-text-muted)]" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Outliers</span>
                        </div>
                        <div className="text-3xl font-bold font-serif">1,402</div>
                        <div className="text-xs text-red-500 mt-1">Removed</div>
                    </Card>
                </div>

                {/* Feature Importance Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold font-serif mb-8">Feature Importance</h2>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">Systolic Blood Pressure</span>
                                    <span className="text-gray-500">Critical</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-900 w-[95%]"></div>
                                </div>
                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">The most significant predictor. High systolic pressure consistently correlates with cardiovascular issues.</p>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">Age</span>
                                    <span className="text-gray-500">Very High</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-700 w-[85%]"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">Weight / BMI</span>
                                    <span className="text-gray-500">High</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-600 w-[70%]"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">Diastolic Blood Pressure</span>
                                    <span className="text-gray-500">High</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-500 w-[65%]"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">Cholesterol</span>
                                    <span className="text-gray-500">Medium</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-400 w-[50%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 bg-gray-50 p-8 rounded-xl h-fit">
                        <h3 className="text-xl font-bold font-serif mb-4">Methodology</h3>
                        <div className="prose prose-sm text-gray-600 space-y-4">
                            <p>
                                Our model utilizes a <strong>Random Forest Classifier</strong>, an ensemble learning method that constructs multiple decision trees during training.
                            </p>
                            <p>
                                <strong>Cross-Validation:</strong> We utilized RandomizedSearchCV to optimize hyperparameters, ensuring the model generalizes well to unseen data.
                            </p>
                            <ul className="list-disc pl-4 space-y-1 mt-4">
                                <li>100 Estimators</li>
                                <li>Max Depth: 10</li>
                                <li>Min Split: 2</li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold mb-2">Data Quality Note</h4>
                            <p className="text-sm text-gray-500">
                                We cleaned 2% of the dataset to remove unrealistic outliers, such as negative blood pressure readings and weights under 40kg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
