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
    <div className="rounded-lg border p-6 hover:bg-secondary">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <MaskedIcon
            src="/assets/icons/Star.svg"
            className={`h-5 w-5 ${index < rating ? "text-white" : "text-white/30"}`}
            key={index}
          />
        ))}
      </div>

      <p className="mb-4 text-base leading-relaxed text-white md:text-lg">{review}</p>

      <p className="text-sm font-semibold text-white md:text-base">{clientType}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-primary-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">TESTIMONIALS</h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
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
