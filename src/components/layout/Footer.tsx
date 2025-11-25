import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/terms", label: "Terms And Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/return", label: "Return Policy" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Company Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

