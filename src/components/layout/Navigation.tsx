"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "Project Gallery", hasDropdown: true },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center bg-primary rounded-lg px-6 py-3 shadow-lg">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 rounded-md ${
              pathname === link.href
                ? "bg-white/10"
                : ""
            } ${index !== navLinks.length - 1 ? "mr-1" : ""}`}
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4" />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 bg-primary rounded-lg text-white hover:bg-primary-dark shadow-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 mt-2 bg-primary rounded-lg shadow-lg border border-white/10 md:hidden overflow-hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-white border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/10 ${
                  pathname === link.href ? "bg-white/10" : ""
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 ml-auto" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

