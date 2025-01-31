"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/app/Components/ui/images-slider";

export default function ImagesSliderDemo() {
  const images = [
    "https://i.ibb.co/zZvTMjs/IMG-9043.jpg",
    "https://i.ibb.co/sqnVtvP/MG-3895.jpg",
    "https://i.ibb.co/GpfLK4X/IMG-3583.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-xl text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 py-4 px-6" style={{fontFamily:'batmfa, sans-serif'}}>
        TAM (Technology Awareness Month) is a student-run organization whose franchise has been functioning since the past 10 years at St.Martins Engineering College.This month-long festival features a variety of engaging workshops, discussion shows, and interactive events designed to foster a deeper understanding of current technological trends.
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
