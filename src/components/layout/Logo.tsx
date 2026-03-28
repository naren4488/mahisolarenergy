import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="group flex h-full items-center">
      <div className="flex h-full items-center gap-0 rounded-r-full bg-white px-4 py-2 shadow-sm transition-shadow group-hover:shadow-md">
        <div className="relative h-10 w-10 shrink-0">
          <img
            src="/assets/icons/LOGO.svg"
            alt="Mahi Solar Energy Logo"
            className="h-full w-full object-contain"
            width={40}
            height={40}
          />
        </div>
        <p className="leading-none font-bold text-primary uppercase">
          MAHI SOLAR
          <br />
          ENERGY
        </p>
      </div>
    </Link>
  );
}
