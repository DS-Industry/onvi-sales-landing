// src/components/layout/Layout.tsx
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useRef } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const featuresRef = useRef<HTMLDivElement | null>(null);
    const downloadRef = useRef<HTMLDivElement | null>(null);

    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToDownload = () => {
        downloadRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header
                scrollToFeatures={scrollToFeatures}
                scrollToDownload={scrollToDownload}
            />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
