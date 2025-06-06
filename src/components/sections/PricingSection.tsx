'use client';

import { forwardRef } from 'react';
import { Button } from 'antd';
import SectionTitle from '../Common/SectionTitle';
import Link from 'next/link';

type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

type PricingSectionProps = object;

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '₽0 / мес',
    features: [
      'Поиск ближайших моек',
      'Просмотр информации о постах',
      'Старт/стоп мойки',
    ],
  },
  {
    name: 'Pro',
    price: '₽499 / мес',
    highlighted: true,
    features: [
      'Все из Basic',
      'Кешбэк за мойки',
      'Статистика и история поездок',
      'Приоритетная поддержка',
    ],
  },
  {
    name: 'Enterprise',
    price: '₽1499 / мес',
    features: [
      'Все из Pro',
      'Аналитика автопарка',
      'Интеграция с CRM',
      'Индивидуальные условия',
    ],
  },
];

const PricingSection = forwardRef<HTMLDivElement, PricingSectionProps>((props, ref) => {
  return (
    <div ref={ref} className="bg-gray-100">
      <section
        id="pricing"
        className="relative overflow-hidden pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
      >
        <div>
          <div className="mb-[60px]">
            <SectionTitle
              subtitle="Таблица тарифов"
              title="Тарифные планы"
              paragraph="Выберите подходящий тариф для вашего автопарка или личного пользования"
              center
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 rounded-lg p-8 flex flex-col justify-between transition-all duration-300 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] min-h-[500px]`}
              >
                {plan.highlighted && (
                  <div className="absolute -right-12 top-14 rotate-90 bg-blue-600 text-white text-sm font-medium px-2 py-1 pr-8 rounded-r">
                    Recommended
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="text-4xl font-bold mt-4 mb-6 text-gray-900">
                    {plan.price}{" "}
                    <span className="text-base font-medium text-gray-500">Per Month</span>
                  </p>

                  <h4 className="font-semibold text-white mb-3">Features</h4>
                  <ul className="space-y-1 text-gray-600">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    type="primary"
                    size="large"
                    className="w-full"
                    style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                  >
                    <Link href="https://app.onvione.ru/register">Purchase Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;
