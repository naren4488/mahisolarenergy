import { FillImage } from "@/components/ui/fill-image";
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
    <div
      className={`relative rounded-4xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl ${className || ""}`}
    >
      <div>
        <div className="mb-4 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-inner">
            <MaskedIcon src={icon} className={`h-20 w-20 ${iconColor}`} />
          </div>
        </div>

        <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{title}</h3>

        <p className="text-center text-sm leading-relaxed text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export function OurStrengths() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <FillImage
          src="/assets/images/hero2.png"
          alt="Solar panel facility background"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block rounded-full bg-primary px-6 py-3 text-2xl font-bold text-white md:text-3xl">
            OUR STRENGTHS
          </h2>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
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

          <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-8">
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
