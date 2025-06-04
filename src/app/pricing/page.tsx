import Breadcrumb from "@/components/Common/Breadcrumb";
import PricingSection from "@/components/sections/PricingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Pricing Page" />
      <PricingSection />
    </main>
  );
};

export default AboutPage;
