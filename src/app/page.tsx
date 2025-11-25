import { Hero } from "./_components/Hero";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { OurStrengths } from "./_components/OurStrengths";
import { OurServices } from "./_components/OurServices";
import { OurProjects } from "./_components/OurProjects";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurStrengths />
      <OurServices />
      <OurProjects />
      <Testimonials />
    </>
  );
}
