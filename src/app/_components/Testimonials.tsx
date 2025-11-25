import { MaskedIcon } from "@/components/ui/masked-icon";

const testimonials = [
  {
    rating: 5,
    review:
      "Mahi Solar transformed our home energy system with professionalism and quality service. Highly recommended!",
    clientType: "Residential Client",
  },
  {
    rating: 4,
    review: "Reliable and efficient solar installation for our manufacturing unit. Excellent support throughout",
    clientType: "Industrial Client",
  },
  {
    rating: 5,
    review: "The Mahi Solar team's expertise and commitment made the entire process smooth and hassle-free.",
    clientType: "Commercial Client",
  },
];

interface TestimonialCardProps {
  rating: number;
  review: string;
  clientType: string;
}

function TestimonialCard({ rating, review, clientType }: TestimonialCardProps) {
  return (
    <div className="hover:bg-secondary rounded-lg p-6 border">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <MaskedIcon src="/assets/icons/Star.svg" className={`w-5 h-5 ${index < rating ? "text-white" : "text-white/30"}`} key={index} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-white text-base md:text-lg leading-relaxed mb-4">{review}</p>

      {/* Client Type */}
      <p className="text-white font-semibold text-sm md:text-base">{clientType}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">TESTIMONIALS</h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              review={testimonial.review}
              clientType={testimonial.clientType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
