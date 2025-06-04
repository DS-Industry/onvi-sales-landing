"use client";

import HeroSection from './sections/HeroSection';
import ScreenshotsSection from './sections/ScreenshotsSection';
import Footer from "@/components/layout/Footer";
import PricingSection from './sections/PricingSection';
// import ContactFormSection from './sections/ContactFormSection';
import Features from './Features';
import Contact from './Contact';

export default function LandingPage() {

  return (
      <div className="w-full">
        <HeroSection />
        <Features />
        <PricingSection />
        <ScreenshotsSection />
        <Contact />
        <Footer />
      </div>
  );
}
