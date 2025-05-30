// src/components/ui/AppStoreButton.tsx
import Image from 'next/image';
import Link from 'next/link';
import Apple from 'public/images/Apple.png'
import Android from 'public/images/Playstore.png'

interface AppStoreButtonProps {
    type: 'appstore' | 'googleplay';
    href: string;
    className?: string;
}

export default function AppStoreButton({ type, href, className = '' }: AppStoreButtonProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${className}`}
        >
            {type === 'appstore' ? (
                <div className="inline-flex items-center bg-black text-white rounded-xl px-8 py-3 gap-3 hover:bg-gray-900 transition cursor-pointer">
                    <Image
                        src={Apple}
                        alt="App Store"
                        width={28}
                        height={28}
                        className="w-5 h-5 object-contain"
                        unoptimized
                    />
                    <div className="flex flex-col items-start">
                        <span className="text-xs">Загрузите в</span>
                        <span className="text-lg font-semibold">App Store</span>
                    </div>
                </div>
            ) : (
                <div className="inline-flex items-center bg-black text-white rounded-xl px-6 py-3 gap-3 hover:bg-gray-900 transition cursor-pointer">
                    <Image
                        src={Android}
                        alt="Google Play"
                        width={28}
                        height={28}
                        className="w-5 h-5 object-contain"
                        unoptimized
                    />
                    <div className="flex flex-col items-start">
                        <span className="text-xs">Доступно в</span>
                        <span className="text-lg font-semibold">Google Play</span>
                    </div>
                </div>
            )}
        </Link>
    );
}
