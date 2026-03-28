import { Link } from "react-router-dom";
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
    <footer className="border-t border-gray-200 bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-700 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl">Stay Connected</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    aria-label={social.name}
                  >
                    <MaskedIcon src={social.icon} className="h-28 w-28 text-black" />
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
