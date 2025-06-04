import Breadcrumb from "@/components/Common/Breadcrumb";
import ScreenshotsSection from "@/components/sections/ScreenshotsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Display | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is Display page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Display Page" />
      <ScreenshotsSection />
    </main>
  );
};

export default AboutPage;
