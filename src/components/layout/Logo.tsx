import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group h-full">
      <div className="flex items-center gap-2 px-4 py-2 h-full bg-white rounded-r-full shadow-sm group-hover:shadow-md transition-shadow">
        <div className="relative w-36 h-10 shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Mahi Solar Energy Logo"
            fill
            className="w-full h-full"
            priority
          />
        </div>
      </div>
    </Link>
  );
}

