"use client";

import HeroSection from './sections/HeroSection';
import PricingSection from './sections/PricingSection';
// import ContactFormSection from './sections/ContactFormSection';
import Features from './Features';
import Contact from './Contact';
import About from './About';

export default function LandingPage() {

  return (
      <div className="w-full">
        <HeroSection />
        <Features />
        <About />
        <PricingSection />
        <Contact />
      </div>
  );
}
