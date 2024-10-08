import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="py-2 z-40">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <img className="h-[40px] w-[120px]" src={logo} alt="Home" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>


                  <Link
                    to="/about"
                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/contact"
                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/demo"
                    className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/login">
              <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
                Log In
              </div>
            </Link>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden transition-all" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
                <Link
                  to="/"
                  className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/demo"
                  className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Demo
                </Link>
                
              </div>
            </div>
          )}
        </Container>
      </nav>
    );
  }
  export default Navbar;
  