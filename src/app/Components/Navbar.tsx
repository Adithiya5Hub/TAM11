"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface NavbarProps {
  hideRegisterButton?: boolean; // Prop to control button visibility
}

const Navbar: React.FC<NavbarProps> = ({ hideRegisterButton }) => {
  const currentPath = usePathname(); // Get the current path
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleRegisterClick = () => {
    router.push("/event-timeline");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  // Function to determine if a path is active
  const isActive = (path: string) => currentPath === path;

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/event-timeline", label: "Events" },
    { path: "/members", label: "Team" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://i.ibb.co/RB799d5/TAM-Logo.png"
              width={175}
              height={65}
              alt="Logo"
              className="w-32 h-auto md:w-40" // Adjusted logo size for mobile
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`h-full flex items-center px-4 cursor-pointer relative group ${
                  isActive(link.path) ? "bg-rose-700/20" : ""
                }`}
              >
                <a
                  href={link.path}
                  className={`relative text-white text-lg font-medium transition-colors duration-300 ${
                    isActive(link.path) ? "text-rose-700" : ""
                  }`}
                >
                  {link.label}
                </a>
                {/* Highlight Animation */}
                {isActive(link.path) && (
                  <div className="absolute inset-0 bg-rose-700/20 animate-highlight"></div>
                )}
              </div>
            ))}
          </div>

          {/* Register Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {!hideRegisterButton && (
              <button
                type="button"
                onClick={handleRegisterClick}
                className="hidden md:block text-white bg-gradient-to-r from-red-800 to-rose-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-gradient-to-l transition-all duration-300"
              >
                REGISTER NOW
              </button>
            )}
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <ul className="flex flex-col space-y-2 py-4">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className={`px-4 py-2 rounded-lg ${
                    isActive(link.path) ? "bg-rose-700/20" : ""
                  }`}
                >
                  <a
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`block text-white text-lg font-medium transition-colors duration-300`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {!hideRegisterButton && (
                <li className="px-4 py-2">
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="w-full text-white bg-gradient-to-r from-red-800 to-rose-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-gradient-to-l transition-all duration-300"
                  >
                    REGISTER NOW
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;