import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group h-full">
      <div className="flex items-center gap-0 px-4 py-2 h-full bg-white rounded-r-full shadow-sm group-hover:shadow-md transition-shadow">
        <div className="relative w-10 h-10 shrink-0">
          <Image
            src="/assets/icons/LOGO.svg"
            alt="Mahi Solar Energy Logo"
            fill
            className="w-full h-full"
            priority
          />
        </div>
        <p className="font-bold uppercase text-primary leading-none">
          MAHI SOLAR
          <br/>
          ENERGY
        </p>
      </div>
    </Link>
  );
}
