"use client"; // Ensure this is a Client Component
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div style={{ fontFamily: "Striger, sans-serif" }}>
      <motion.footer
        className="flex flex-col space-y-10 justify-center m-10"
        initial={{ opacity: 0, y: 50 }} // Start below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Pop up to its position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        viewport={{ once: true }} // Animate only once
      >
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-5 bg-gray-50 bg-opacity-10 p-4 rounded-lg shadow-md">
          {/* Links Stacked Vertically on Small Screens */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:gap-20 text-white font-medium text-center md:text-left">
            <a href="/TermsAndConditions" className="hover:text-rose-500 transition-colors duration-1 animate-highlight align-text-center">
              Terms and conditions
            </a>
            <a href="/Cancellation-refund" className="hover:text-rose-500 space-y-5 transition-colors duration-1 animate-highlight">
              Cancellation and refund policy
            </a>
            <a href="/Privacy-Policy" className="hover:text-rose-500  space-y-5 transition-colors duration-1 animate-highlight">
              Privacy Policy
            </a>
            <a href="/Shipping-Delivery" className="hover:text-rose-500  space-y-5 transition-colors duration-1 animate-highlight">
              Shipping and Delivery Policy
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tamv112024@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
              className="h-10 w-10 hover:scale-125 transition-transform duration-300"
              alt="Email"
            />
          </a>
          <a
            href="https://www.instagram.com/smec.tam?igsh=MXdyMHNubnV5dWNnMg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
              className="h-10 w-10 hover:scale-125 transition-transform duration-300"
              alt="Instagram"
            />
          </a>
          <a
            href="https://forms.gle/AahAmRswoEduns928"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2991/2991110.png"
              className="h-10 w-10 hover:scale-125 transition-transform duration-300"
              alt="Google Forms"
            />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-gray-700 font-medium">
          &copy; 2025 TAM Ltd. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Footer;