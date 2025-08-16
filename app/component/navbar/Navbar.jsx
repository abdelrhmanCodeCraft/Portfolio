"use client";

import React, { useState } from "react";

const Icon = ({ path }) => (
  <svg
    className="w-6 h-6 flex-shrink-0 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {path}
  </svg>
);

const icons = {
  menu: (
    <Icon
      path={
        <>
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </>
      }
    />
  ),
  close: (
    <Icon
      path={
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      }
    />
  ),
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-800 shadow-[0_4px_10px_rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 w-6 h-6 rounded-full"></span>
          portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-white transition-colors duration-300
                         after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-4px]
                         after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-300
                         hover:after:w-full hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-white hover:text-white"
        >
          {isMenuOpen ? icons.close : icons.menu}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
