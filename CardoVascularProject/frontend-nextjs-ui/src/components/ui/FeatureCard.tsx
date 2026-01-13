import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-4 text-[var(--color-primary)] bg-red-50 p-3 rounded-full">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2">
                {title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {description}
            </p>
        </div>
    );
};
