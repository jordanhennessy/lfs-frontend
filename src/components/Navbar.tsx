"use client"; // Required for interactivity (e.g., burger menu toggle)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Title */}
        <Link href="/" className="text-xl font-bold">
          Last Fan Standing
        </Link>

        {/* Burger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden space-x-4 md:flex">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Swipe-in from the side) */}
      <div
        className={`fixed right-0 top-0 h-full w-64 transform bg-gray-800 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-4">
            <Link href="/" className="block py-2 hover:bg-gray-700">
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:bg-gray-700">
              About
            </Link>
            <Link href="/contact" className="block py-2 hover:bg-gray-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
