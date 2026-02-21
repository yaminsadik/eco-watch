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
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <img src={logo} alt="Eco-Watch logo" className="mb-4 h-10 w-36 sm:mb-0" />
          <ul className="flex flex-col items-center gap-4 sm:flex-row">
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:underline transition-opacity hover:opacity-80">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
