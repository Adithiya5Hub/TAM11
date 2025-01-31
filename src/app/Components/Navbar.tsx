"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg" // Removed border-b border-gray-200
      style={{ fontFamily: "Nasalization, sans-serif" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height to h-20 */}
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <img
              src="https://i.ibb.co/RB799d5/TAM-Logo.png"
              width={200}
              height={75}
              alt="Logo"
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.path}
                href={link.path}
                className={`relative text-white text-sm font-medium hover:text-rose-700 transition-colors duration-300 ${
                  isActive(link.path) ? "text-rose-700" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-rose-700"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Register Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {!hideRegisterButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleRegisterClick}
                className="text-white bg-gradient-to-r from-red-800 to-rose-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-gradient-to-l transition-all duration-300"
              >
                REGISTER NOW !
              </motion.button>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
              id="navbar-cta"
            >
              <ul className="flex flex-col space-y-2 py-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={link.path}
                      onClick={handleLinkClick}
                      className={`block py-2 px-4 rounded-lg ${
                        isActive(link.path)
                          ? "text-white bg-rose-700"
                          : "text-white hover:bg-red-300"
                      } transition-colors duration-300`}
                      aria-current={isActive(link.path) ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;