"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Animation (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-800 to-black-800 animate-gradient"></div>

      {/* Text Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.5 }}
        >
          Technology Awareness Month
        </motion.h1>
      </motion.div>

      {/* Interactive Particles Background (Optional) */}
      <div className="absolute inset-0">
        {/* You can use a library like `react-particles` or `particles.js` for interactive particles */}
        {/* Example: https://www.npmjs.com/package/react-particles-js */}
      </div>

      {/* Scroll Indicator (Optional) */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}