import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import logo from "@assets/logo.png";

interface NavLink {
  label: string;
  to: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Demo", to: "/demo" },
];

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const isActive = (to: string): boolean =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const desktopLinkClass = (to: string): string =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive(to)
        ? "bg-button-primary text-white"
        : "text-gray-700 hover:bg-button-primary hover:text-white"
    }`;

  const mobileLinkClass = (to: string): string =>
    `block rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
      isActive(to)
        ? "bg-button-primary text-white"
        : "text-gray-700 hover:bg-button-primary hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + desktop links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" aria-label="Eco-Watch home">
              <img src={logo} alt="Eco-Watch" className="h-9 w-auto sm:h-10" />
            </Link>
            <div className="ml-4 hidden items-baseline space-x-1 md:flex lg:ml-8 lg:space-x-2">
              {NAV_LINKS.map(({ label, to }) => (
                <Link key={to} to={to} className={desktopLinkClass(to)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop login */}
          <Link
            to="/login"
            className={`hidden rounded-xl px-4 py-1.5 text-sm font-medium transition-colors duration-200 md:block ${
              isActive("/login")
                ? "bg-button-primary text-white"
                : "border border-gray-200 text-gray-700 hover:bg-button-primary hover:text-white"
            }`}
          >
            Log In
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            className="flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-button-primary md:hidden"
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown — always mounted, animated via max-h + opacity */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-0.5 border-t border-gray-100 pb-3 pt-2">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass(to)}
              >
                {label}
              </Link>
            ))}
            <hr className="my-1 border-gray-100" />
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass("/login")}
            >
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
