import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Site schedule" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "Project Gallery", hasDropdown: true },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export function Navigation() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden items-center rounded-l-full bg-primary px-6 py-3 shadow-lg md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            to={link.href}
            className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 ${
              pathname === link.href ? "bg-white/10" : ""
            } ${index !== navLinks.length - 1 ? "mr-1" : ""}`}
          >
            {link.label}
            {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
          </Link>
        ))}
      </nav>

      <button
        className="rounded-lg bg-primary p-3 text-white shadow-lg transition-colors hover:bg-primary-dark md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        type="button"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMobileMenuOpen && (
        <nav className="absolute top-full right-0 left-0 mt-2 overflow-hidden rounded-lg border border-white/10 bg-primary shadow-lg md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 border-b border-white/10 px-4 py-3 text-white transition-colors last:border-b-0 hover:bg-white/10 ${
                  pathname === link.href ? "bg-white/10" : ""
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="ml-auto h-4 w-4" />}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
