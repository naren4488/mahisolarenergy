import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            <span className="text-[#FFA500]">[</span> OUR PROJECTS{" "}
            <span className="text-[#FFA500]">]</span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
            With over 100 successful solar installations across India, Mahi Solar
            takes pride in powering homes and industries alike. Our project
            portfolio showcases diverse solar systems expertly designed and
            implemented to maximize energy efficiency and client satisfaction.
          </p>
        </div>

        {/* Project Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/projects"
              className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all "
            >
              <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

