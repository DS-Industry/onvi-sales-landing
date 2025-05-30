// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type HeaderProps = {
    scrollToFeatures: () => void;
    scrollToDownload: () => void;
};

export default function Header({ scrollToFeatures, scrollToDownload }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event for navbar transparency
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={`${basePath}/images/OnviLogo.jpg`}
                            alt="Onvi Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                            unoptimized
                        />
                        <span className="ml-3 text-white font-bold text-xl">ONVI</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <button onClick={scrollToFeatures} className="text-white hover:text-gray-300 transition">
                            Особенности
                        </button>
                        <button onClick={scrollToDownload} className="text-white hover:text-gray-300 transition">
                            Скачать
                        </button>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button
                            onClick={scrollToDownload}
                            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:from-orange-600 hover:to-amber-600 transition duration-300"
                        >
                            Скачать приложение
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
