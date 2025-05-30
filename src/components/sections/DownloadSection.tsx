import AppStoreButton from '@/components/ui/AppStoreButton';
import { forwardRef } from 'react';

type DownloadSectionProps = object;

const DownloadSection = forwardRef<HTMLDivElement, DownloadSectionProps>((props, ref) => {
    return (
        <div ref={ref} className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-8">Скачайте ONVI прямо сейчас</h2>
                <p className="text-xl max-w-2xl mx-auto mb-12">
                    Приложение Onvi доступно бесплатно для iOS и Android. Начните экономить на автомойках уже сегодня!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    {/* App Store Button */}
                    <AppStoreButton
                        type="appstore"
                        href="https://apps.apple.com/ru/app/onvi/id6504496655"
                        className="w-full sm:w-auto"
                    />

                    {/* Google Play Button */}
                    <AppStoreButton
                        type="googleplay"
                        href="https://play.google.com/store/apps/details?id=com.onvimobile"
                        className="w-full sm:w-auto"
                    />
                </div>

                <div className="mt-16 max-w-lg mx-auto">
                    <h3 className="text-2xl font-semibold mb-4">Почему ONVI?</h3>
                    <ul className="text-left space-y-3">
                        <li className="flex items-start">
                            <svg className="h-6 w-6 mr-2 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Более 90+ моек-партнёров в 10 регионах России</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 mr-2 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Кешбэк с каждой мойки</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 mr-2 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Удобная оплата без ввода номера поста</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
});

DownloadSection.displayName = 'DownloadSection';

export default DownloadSection;
