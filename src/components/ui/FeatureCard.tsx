import { ReactNode } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-info-100 rounded-full flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">
                {description}
            </p>
        </div>
    );
}
