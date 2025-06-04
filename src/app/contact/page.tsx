import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us",
  description: "This is Contact page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Contact Page" />
      <Contact />
    </main>
  );
};

export default AboutPage;
