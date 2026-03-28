import { Link } from "react-router-dom";
import { FillImage } from "@/components/ui/fill-image";

const projects = [
  {
    image: "/assets/images/project1.png",
    alt: "Large-scale solar farm installation on water",
  },
  {
    image: "/assets/images/project3.png",
    alt: "Professional rooftop solar panel installation",
  },
  {
    image: "/assets/images/project2.png",
    alt: "Residential home with solar panels",
  },
];

export function OurProjects() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-[#FFA500]">[</span> OUR PROJECTS{" "}
            <span className="text-[#FFA500]">]</span>
          </h2>
        </div>

        <div className="mx-auto mb-12 max-w-4xl">
          <p className="text-center text-base leading-relaxed text-gray-700 md:text-lg">
            With over 100 successful solar installations across India, Mahi Solar takes pride in powering homes and
            industries alike. Our project portfolio showcases diverse solar systems expertly designed and
            implemented to maximize energy efficiency and client satisfaction.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/projects"
              className="group block overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                <FillImage
                  src={project.image}
                  alt={project.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
