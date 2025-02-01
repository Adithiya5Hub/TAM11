"use client";
import React from "react";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <div className="w-full py-20 bg-gradient-to-r from- #3b0d0c, to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="font-boldern text-4xl md:text-5xl mb-8 bg-gradient-to-b from-red-200 to-red-800 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h1>
          <motion.p
            className="font-josefin text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Technology Awareness Month (TAM) bridges the gap between students and
            cutting-edge technology through interactive events, workshops, and
            discussions. Our mission is to inspire curiosity, foster innovation,
            and build a community of tech-driven leaders. With 10+ years of
            impact, we continue to connect students with the ever-evolving world
            of technology.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}