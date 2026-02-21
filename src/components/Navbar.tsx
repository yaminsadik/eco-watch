import { useState } from "react";
import { Link } from "react-router-dom";
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

const linkClass =
  "px-3 py-2 rounded-md text-sm font-medium hover:bg-button-primary hover:text-white transition-colors";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="z-40 py-2">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + desktop links */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img className="h-[40px] w-[120px]" src={logo} alt="Eco-Watch home" />
            </Link>
            <div className="ml-10 hidden items-baseline space-x-4 md:flex">
              {NAV_LINKS.map(({ label, to }) => (
                <Link key={to} to={to} className={linkClass}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop login */}
          <Link
            to="/login"
            className="hidden rounded-xl px-4 py-1 hover:bg-button-primary transition-colors md:block"
          >
            Log In
          </Link>

          {/* Mobile hamburger */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {/* SVG hamburger / close icon replacing the removed Font Awesome dependency */}
              {isOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="transition-all md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 text-black sm:px-3">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-button-primary hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
