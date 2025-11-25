import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className=" px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Side - Headline and Text */}
          <div className="space-y-6 flex flex-1 max-md:flex-col">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 leading-tight pl-12 w-full md:w-2/5">
              <span className="text-[#FFA500]">[ </span>
              WHY
              <br />
              CHOOSE
              <br />
              MAHI
              <br />
              SOLAR
              <br />
              ENERGY?
              <span className="text-[#FFA500]"> ]</span>
            </h2>

            {/* Body Text */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-1 w-full md:w-3/5">
              At Mahi Solar, we bring over two years of dedicated experience in delivering high-quality solar
              installation solutions across India. Our commitment to sustainability, backed by industry certifications
              and strong supplier connections, ensures you receive not only superior solar equipment but comprehensive,
              hassle-free service from consultation to installation. Whether residential or industrial, we tailor
              solutions to maximize efficiency, reliability, and savings for every client. Choose Mahi Solar for trusted
              expertise, robust project delivery, and a greener future.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full md:w-[30%] aspect-4/3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/images/why-choose-us.png"
              alt="Professional solar panel installation team"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
