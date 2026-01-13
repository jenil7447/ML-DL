'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/Button';
import { ArrowRight, Activity, TrendingUp, Shield, Database, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section - Medium Style: Centered, Serif, Bold */}
      <section className="pt-40 pb-20 px-4 sm:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-600 uppercase tracking-widest">Medical Grade AI</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-black mb-8 leading-[1.1] tracking-tight">
            Advanced Cardiovascular <br className="hidden md:block" />
            Risk Prediction.
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            A machine learning system trained on 68,000+ clinical records to detect heart disease markers with 73% precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/predict">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg font-medium shadow-none w-full sm:w-auto">
                Start Assessment
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-medium border-gray-200 text-gray-600 hover:text-black w-full sm:w-auto">
                Read methodology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature "Articles" Grid */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="group cursor-pointer">
            <div className="mb-4 text-gray-400 group-hover:text-black transition-colors">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
              Data-Driven Analysis
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our model processes 11 key physiological indicators including Blood Pressure, BMI, and Cholesterol levels against a verified dataset of 70,000 patients.
            </p>
            <Link href="/data-insights" className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              View Data <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="group cursor-pointer">
            <div className="mb-4 text-gray-400 group-hover:text-black transition-colors">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
              Real-Time Risk Scoring
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Get instant binary classification results (Risk / No Risk) along with probabilistic confidence scores derived from Random Forest ensemble learning.
            </p>
            <Link href="/predict" className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              Start Test <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="group cursor-pointer">
            <div className="mb-4 text-gray-400 group-hover:text-black transition-colors">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
              Private & Secure
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Your health data is processed in real-time within your session and is never stored permanently. Designed with privacy-first principles.
            </p>
            <Link href="/about" className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold mb-2">68k+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Patient Records</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold mb-2">98%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Data Integrity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold mb-2">73%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Model Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold mb-2">11</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Key Biomarkers</div>
          </div>
        </div>
      </section>
    </div>
  );
}