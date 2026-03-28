import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FillImage } from "@/components/ui/fill-image";
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
    subheadline:
      "Join Mahi Solar in Protecting Mother Earth with Clean, Sustainable Solar Power",
  },
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full">
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
            <div className="relative flex h-full w-full items-center">
              <div className="absolute inset-0 z-0">
                <FillImage
                  src={slide.image}
                  alt={slide.alt}
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                    {slide.headline}{" "}
                    <span className="text-[#7ED957]">{slide.headlineHighlight}</span>
                  </h1>

                  <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
                    {slide.subheadline}
                  </p>

                  <a
                    href="#catalogue"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-primary-dark hover:shadow-xl"
                  >
                    DOWNLOAD CATALOGUE
                    <ArrowRight className="h-5 w-5" />
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
