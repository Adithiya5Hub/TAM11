"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';  
import { useRouter } from "next/navigation";

interface NavbarProps {
  hideRegisterButton?: boolean; // New prop to control button visibility
}

const Navbar: React.FC<NavbarProps> = ({ hideRegisterButton }) => {
  const currentPath = usePathname(); // Use usePathname to get the current path
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleRegisterClick = () => {
    router.push("/event-timeline");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a path is active
  const isActive = (path: string) => currentPath === path;

  return (
    <div className=" border-white bg-opacity-30  rounded-b-lg backdrop-filter backdrop-blur-lg sticky " style={{ fontFamily: 'Nasalization, sans-serif' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center rounded-b-lg justify-between mx-auto px-4 py-1  rounded-b-3xl shadow-md">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.ibb.co/RB799d5/TAM-Logo.png" width={200} height={75} alt="" />
          
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!hideRegisterButton && (
            
            <button
              type="button"
              onClick={handleRegisterClick}
              className="text-white bg-gradient-to-r from-red-800 to-rose-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center dark:hover:bg-red-700 dark:hover:bg-rose-600"
            >
              REGISTER NOW !
              
            </button>
          )}
          <button
            onClick={toggleMenu} // Toggle menu on click
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a href="/" className={`block py-2 px-3 md:p-0 md:px-2 ${isActive('/') ? 'text-white bg-rose-700 rounded-full' : 'text-white'} rounded-full hover:bg-red-300 md:hover:bg-transparent md:hover:text-rose-700`} aria-current={isActive('/') ? "page" : undefined}>Home</a>
            </li>
            <li>
              <a href="/event-timeline" className={`block py-2 px-3 md:p-0 md:px-2 ${isActive('/event-timeline') ? 'text-white bg-rose-700 rounded-full' : 'text-white'} rounded-full hover:bg-red-300 md:hover:bg-transparent md:hover:text-rose-700`} aria-current={isActive('/event-timeline') ? "page" : undefined}>Events</a>
            </li>
            <li>
              <a href="/members" className={`block py-2 px-3 md:p-0 md:px-2 ${isActive('/members') ? 'text-white bg-rose-700 rounded-full' : 'text-white'} rounded-full hover:bg-red-300 md:hover:bg-transparent md:hover:text-rose-700`} aria-current={isActive('/members') ? "page" : undefined}>Team</a>
            </li>
            <li>
              <a href="/gallery" className={`block py-2 px-3 md:p-0 md:px-2 ${isActive('/gallery') ? 'text-white bg-rose-700 rounded-full' : 'text-white'} rounded-full hover:bg-red-300 md:hover:bg-transparent md:hover:text-rose-700`} aria-current={isActive('/gallery') ? "page" : undefined}>Gallery</a>
            </li>
            <li>
              <a href="/contact" className={`block py-2 px-3 md:p-0 md:px-2 ${isActive('/contact') ? 'text-white bg-rose-700 rounded-full' : 'text-white'} rounded-full hover:bg-red-300 md:hover:bg-transparent md:hover:text-rose-700`} aria-current={isActive('/contact') ? "page" : undefined}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
