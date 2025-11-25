import Link from "next/link";
import { MaskedIcon } from "@/components/ui/masked-icon";


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
    icon: "/assets/icons/facebook.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/assets/icons/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/assets/icons/instagram.svg",
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
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <MaskedIcon src={social.icon} className="w-28 h-28 text-black" />
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

