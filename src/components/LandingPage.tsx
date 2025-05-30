"use client";

import { useRef } from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ScreenshotsSection from './sections/ScreenshotsSection';
import DownloadSection from './sections/DownloadSection';
import Footer from "@/components/layout/Footer";
import PricingSection from './sections/PricingSection';
import ContactFormSection from './sections/ContactFormSection';

export default function LandingPage() {
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const downloadRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div className="w-full">
        <HeroSection
            scrollToFeatures={scrollToFeatures}
            scrollToDownload={scrollToDownload}
        />
        <FeaturesSection ref={featuresRef} />
        <PricingSection />
        <ScreenshotsSection />
        <DownloadSection ref={downloadRef} />
        <ContactFormSection />
        <Footer />
      </div>
  );
}
