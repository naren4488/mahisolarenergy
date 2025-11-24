import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
        <div className="relative w-28 h-8 shrink-0">
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

