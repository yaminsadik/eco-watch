import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "@assets/logo.png";

interface FooterLink {
  label: string;
  to: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "FAQ", to: "/faq" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#212121] py-10 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
          <img src={logo} alt="Eco-Watch logo" className="h-10 w-auto" />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:flex-nowrap sm:gap-x-8">
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Eco-Watch. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
