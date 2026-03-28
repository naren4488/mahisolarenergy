import { Link } from "react-router-dom";
import { FillImage } from "@/components/ui/fill-image";
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
        <div className="flex flex-col items-start gap-6 px-6 py-16 text-white md:w-2/5 md:p-16">
          <div className="mb-4 h-24 w-24">
            <MaskedIcon src={servicesIcon} className="h-28 w-28 text-white" />
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Our Services</h2>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">
              At Mahi Solar, we specialize in delivering tailored solar solutions that meet your specific energy
              needs. Our two core services include:
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 bg-primary-dark p-6 md:flex-row md:p-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group block flex-1 overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-96">
                <FillImage
                  src={service.image}
                  alt={service.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary md:text-3xl">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
