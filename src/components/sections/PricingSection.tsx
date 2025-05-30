'use client';

import { forwardRef } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
    <div ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Тарифные планы</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф для вашего автопарка или личного пользования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={
                `bg-white border rounded-2xl shadow-sm p-6 flex flex-col justify-between transition-all duration-300`+
                {
                  'border-info-dark ring-2 ring-info-dark': plan.highlighted,
                }
              }
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 text-center">{plan.name}</h3>
                <p className="text-center text-3xl font-bold mt-4 mb-6 text-info-dark">{plan.price}</p>

                <ul className="space-y-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckOutlined className="text-green-500 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Button type={plan.highlighted ? 'primary' : 'default'} size="large">
                  Выбрать план
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;
