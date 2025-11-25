import Image from "next/image";
import { MaskedIcon } from "@/components/ui/masked-icon";

interface StrengthItem {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

const strengths: StrengthItem[] = [
  {
    icon: "/assets/icons/CertifiedExpertise.svg",
    iconColor: "text-white",
    title: "Certified Expertise",
    description: "As a certified solar provider, we maintain high standards in every project.",
  },
  {
    icon: "/assets/icons/PanIndia.svg",
    iconColor: "text-white",
    title: "Pan India Reach",
    description: "From Jaipur to every corner of India, we deliver consistent and timely service.",
  },
  {
    icon: "/assets/icons/QualityEquipment.svg",
    iconColor: "text-white",
    title: "Quality Equipment",
    description: "We source premium solar panels, inverters, & accessories through trusted suppliers.",
  },
  {
    icon: "/assets/icons/ExperiencedTeam.svg",
    iconColor: "text-white",
    title: "Experienced Team",
    description: "Our skilled installation and support teams ensure flawless project execution.",
  },
  {
    icon: "/assets/icons/CustomerSatisfaction.svg",
    iconColor: "text-white",
    title: "Customer Satisfaction",
    description: "We prioritize feedback and maintain strong relationships through quality and service.",
  },
];

interface StrengthCardProps {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  className?: string;
}

function StrengthCard({ icon, iconColor, title, description, className }: StrengthCardProps) {
  return (
    <div className={`bg-white relative rounded-4xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className || ""}`}>
      <div>
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-inner">
            <MaskedIcon src={icon} className={`w-20 h-20 ${iconColor}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 text-center text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function OurStrengths() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero2.png"
          alt="Solar panel facility background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block px-6 py-3 bg-primary rounded-full text-white text-2xl md:text-3xl font-bold">
            OUR STRENGTHS
          </h2>
        </div>

        {/* Strength Cards */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First 3 Cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {strengths.slice(0, 3).map((strength, index) => (
              <StrengthCard
                key={index}
                icon={strength.icon}
                iconColor={strength.iconColor}
                title={strength.title}
                description={strength.description}
                className="flex-1"
              />
            ))}
          </div>

          {/* Last 2 Cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:justify-center">
            {strengths.slice(3, 5).map((strength, index) => (
              <StrengthCard
                key={index + 3}
                icon={strength.icon}
                iconColor={strength.iconColor}
                title={strength.title}
                description={strength.description}
                className="md:w-[calc(33.333%-1rem)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
