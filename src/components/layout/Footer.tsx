// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import LogoIMG from '@images/LogoIMG.jpg';
import Telegram from '@images/Telegram.png';


export default function Footer() {
    return (
        <footer className="bg-[#1e1e1e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 - Logo and Description */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src={LogoIMG}
                                alt="Onvi Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                                unoptimized
                            />
                            <span className="ml-3 text-white font-bold text-xl">ONVI</span>
                        </div>
                        <p className="text-gray-400">
                            Удобное приложение для поиска моек самообслуживания рядом с вами. Получайте кешбэк и экономьте на каждой мойке.
                        </p>
                    </div>

                    {/* Column 2 - Contacts */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
                        <p className="mb-2">Телефон поддержки: +7(800)250-20-19</p>
                        <p className="mb-2">Почта поддержки: support@onvione.ru</p>
                        <div className="mt-4">
                            <Link
                                href="https://t.me/OnviSupportBot"
                                target="_blank"
                                rel="noreferrer noopener"
                                className=""
                            >
                                <Image
                                    src={Telegram}
                                    alt="Telegram Logo"
                                    width={28}
                                    height={28}
                                    className="rounded-lg object-contain "
                                    unoptimized
                                />
                            </Link>

                        </div>
                    </div>

                    {/* Column 3 - Legal */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Информация</h3>
                        <div className="flex flex-col">
                            <Link
                                href="https://docs.google.com/document/d/1H5DFxDJfFBxK6wNK3iIydC9Qp1zaQsuSxZkjaPcCVyc/edit?tab=t.0"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-orange-500 hover:text-orange-400 transition"
                            >
                                Политика конфиденциальности
                            </Link>
                            <Link
                                href="https://docs.google.com/document/d/1z9LIxI5UDnK9kuGBf5ZqvUPaophCr4JfVDNayFz1zLs/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-orange-500 hover:text-orange-400 transition"
                            >
                                Удаление данных
                            </Link>
                        </div>

                    </div>
                </div>

                <hr className="border-gray-800 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © &quot;Onvione&quot; 2024 Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}
