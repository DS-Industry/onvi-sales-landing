// src/components/sections/HeroSection.tsx
import Image from 'next/image';
import Button from '@/components/ui/Button';
import BackgroundIMG from '@images/BackgroundIMG.png';
import DeviceMockUpPortrait from '@images/DeviceMockUpPortrait.png';


interface HeroSectionProps {
    scrollToFeatures: () => void;
    scrollToDownload: () => void;
}

export default function HeroSection({ scrollToFeatures, scrollToDownload }: HeroSectionProps) {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={BackgroundIMG}
                    alt="Background"
                    fill
                    className="object-cover brightness-75"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 pt-24">
                {/* Left Section */}
                <div className="md:w-1/2 space-y-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Развивайте свой бизнес с <span className='text-accent-light'>ONVI</span>
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-xl">
                        Ваш цифровой помощник для поиска и оплаты моек самообслуживания рядом с вами. Получайте кешбэк с каждой мойки!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button
                            onClick={scrollToFeatures}
                            variant="secondary"
                            size="lg"
                        >
                            Начать
                        </Button>
                        <Button
                            onClick={scrollToDownload}
                            variant="primary"
                            size="lg"
                        >
                            Запросить демо
                        </Button>
                    </div>
                </div>

                {/* Right Section - Phone Mockup */}
                <div className="md:w-1/2 mt-12 md:mt-0 relative">
                    <div className="relative h-[600px] w-[300px] mx-auto">
                        <Image
                            src={DeviceMockUpPortrait}
                            alt="Onvi App"
                            fill
                            className="object-fit rounded-4xl shadow-1xl"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
