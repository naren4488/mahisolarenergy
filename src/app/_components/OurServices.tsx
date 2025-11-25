import Image from "next/image";
import Link from "next/link";
import { MaskedIcon } from "@/components/ui/masked-icon";

const services = [
  {
    title: "Residential Solar Solutions",
    description:
      "Efficient solar power systems designed to reduce household energy costs while contributing to a greener planet.",
    image: "/assets/images/services1.png",
    href: "/services#residential",
  },
  {
    title: "Industrial Solar Solutions",
    description:
      "Scalable, reliable solar installations crafted to optimize energy consumption for factories, warehouses, and large-scale industries.",
    image: "/assets/images/services2.png",
    href: "/services#industrial",
  },
];

const servicesIcon = "/assets/icons/ourservices.svg";

export function OurServices() {
  return (
    <section className="bg-primary">
      <div className="flex flex-col md:flex-row">
        {/* Left Panel - Our Services Info */}
        <div className="flex flex-col items-start text-white px-6 py-16 md:p-16 md:w-2/5 gap-6">
          <div className="w-24 h-24 mb-4">
            <MaskedIcon src={servicesIcon} className="w-28 h-28 text-white" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              At Mahi Solar, we specialize in delivering tailored solar solutions that meet your specific energy
              needs. Our two core services include:
            </p>
          </div>
        </div>

        {/* Right Panel - Service Cards */}
        <div className="flex flex-col md:flex-row gap-12 bg-primary-dark p-6 md:p-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex-1 block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
