"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlides = [
  {
    image: "/assets/images/hero1.png",
    alt: "Solar panel maintenance and installation",
    headline: "Harness the Power of the Sun with",
    headlineHighlight: "Mahi Solar",
    subheadline: "End-to-End Solar Solutions for Homes and Industries Across India",
  },
  {
    image: "/assets/images/hero2.png",
    alt: "Solar farm and wind turbine at sunrise",
    headline: "Empower Nature, Embrace",
    headlineHighlight: "Green Energy",
    subheadline: "Join Mahi Solar in Protecting Mother Earth with Clean, Sustainable Solar Power",
  },
];

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !opacity-100",
        }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
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
                    {slide.headline}{" "}
                    <span className="text-[#7ED957]">{slide.headlineHighlight}</span>
                  </h1>

                  {/* Sub-headline */}
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    {slide.subheadline}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#catalogue"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                  >
                    DOWNLOAD CATALOGUE
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

