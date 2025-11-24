import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero1.png"
          alt="Solar panel maintenance and installation"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Harness the Power of the Sun with{" "}
            <span className="text-[#7ED957]">Mahi Solar</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            End-to-End Solar Solutions for Homes and Industries Across India
          </p>

          {/* CTA Button */}
          <a
            href="#catalogue"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          >
            DOWNLOAD CATALOGUE
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

