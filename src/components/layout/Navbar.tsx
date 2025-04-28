"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Usama Javed
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
