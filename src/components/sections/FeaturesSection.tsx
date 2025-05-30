import FeatureCard from '../ui/FeatureCard';
import { forwardRef } from 'react';
import {
    EnvironmentOutlined,
    CreditCardOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

type FeaturesSectionProps = object;

const FeaturesSection = forwardRef<HTMLDivElement, FeaturesSectionProps>((props, ref) => {
    const features = [
        {
            title: "Отслеживание автопарка в режиме реального времени",
            description: "Следите за перемещением автомобилей и находите ближайшие мойки в режиме онлайн.",
            icon: (
                <EnvironmentOutlined className="text-info-dark text-3xl" />
            ),
        },
        {
            title: "Автоматизированное выставление счетов",
            description: "Получайте счета автоматически и оплачивайте с помощью бонусных баллов и кешбэка.",
            icon: (
                <CreditCardOutlined className="text-info-dark text-3xl" />
            ),
        },
        {
            title: "Бесшовная интеграция платежей",
            description: "Оплачивайте услуги прямо в приложении — быстро, безопасно и без лишних шагов.",
            icon: (
                <CheckCircleOutlined className="text-info-dark text-3xl" />
            ),
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">ONVI — мойка с выгодой</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Удобное приложение для поиска моек самообслуживания с кешбэком и бонусами
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
