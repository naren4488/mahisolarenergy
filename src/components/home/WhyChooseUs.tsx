import { FillImage } from "@/components/ui/fill-image";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex max-md:flex-col flex-1 flex-col space-y-6">
            <h2 className="w-full pl-12 text-4xl leading-tight font-bold text-gray-600 md:w-2/5 md:text-5xl lg:text-6xl">
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

            <p className="mt-1 w-full text-base leading-relaxed text-gray-700 md:w-3/5 md:text-lg">
              At Mahi Solar, we bring over two years of dedicated experience in delivering high-quality solar
              installation solutions across India. Our commitment to sustainability, backed by industry
              certifications and strong supplier connections, ensures you receive not only superior solar equipment
              but comprehensive, hassle-free service from consultation to installation. Whether residential or
              industrial, we tailor solutions to maximize efficiency, reliability, and savings for every client.
              Choose Mahi Solar for trusted expertise, robust project delivery, and a greener future.
            </p>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-lg md:w-[30%]">
            <FillImage
              src="/assets/images/why-choose-us.png"
              alt="Professional solar panel installation team"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
