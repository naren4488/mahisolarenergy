import { useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { OurStrengths } from "@/components/home/OurStrengths";
import { OurServices } from "@/components/home/OurServices";
import { OurProjects } from "@/components/home/OurProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

const defaultTitle = "Mahi Solar Energy - Harness the Power of the Sun";
const defaultDescription =
  "End-to-End Solar Solutions for Homes and Industries Across India";

export function HomePage() {
  useEffect(() => {
    document.title = defaultTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", defaultDescription);
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurStrengths />
      <OurServices />
      <OurProjects />
      <Testimonials />
      <Footer />
    </>
  );
}
