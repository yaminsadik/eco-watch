import React from 'react';
import logo from "../assets/logo.png";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-10 text-white">
      <Container>
        <div className="flex flex-col items-center sm:flex-row justify-between">
          <img src={logo} alt="Company Logo" className="w-36 h-10 mb-4 sm:mb-0" />
          <ul className="flex flex-col sm:flex-row items-center gap-4">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}