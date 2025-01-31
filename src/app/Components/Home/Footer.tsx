"use client"; // Ensure this is a Client Component
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div style={{ fontFamily: "Nasalization, sans-serif" }}>
      <motion.footer
        className="flex flex-col space-y-10 justify-center m-10"
        initial={{ opacity: 0, y: 50 }} // Start below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Pop up to its position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        viewport={{ once: true }} // Animate only once
      >
        <div className="flex justify-content space-x-5 justify-center flex gap-[20vw] bg-gray-50 bg-opacity-10 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-5 flex gap-20">
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
          <div className="flex flex-col text-white font-medium gap-2">
            <a href="/TermsAndConditions">Terms and conditions</a>
            <a href="/Cancellation-refund">Cancellation and refund policy</a>
            <a href="/Privacy-Policy">Privacy Policy</a>
            <a href="/Shipping-Delivery">Shipping and Delivery Policy</a>
          </div>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; 2025 TAM Ltd. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Footer;