"use client";

import { useRef } from 'react';
import HeroSection from './sections/HeroSection';
import ScreenshotsSection from './sections/ScreenshotsSection';
import DownloadSection from './sections/DownloadSection';
import Footer from "@/components/layout/Footer";
import PricingSection from './sections/PricingSection';
// import ContactFormSection from './sections/ContactFormSection';
import Features from './Features';
import Contact from './Contact';

export default function LandingPage() {
  const downloadRef = useRef<HTMLDivElement | null>(null);

  return (
      <div className="w-full">
        <HeroSection />
        <Features />
        <PricingSection />
        <ScreenshotsSection />
        <DownloadSection ref={downloadRef} />
        <Contact />
        <Footer />
      </div>
  );
}
