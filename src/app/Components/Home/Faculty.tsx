"use client";
import React from "react";
import { motion } from 'framer-motion'

type Direction = "left" | "right" | "up" | "down" | "none";
type TransitionType = "tween" | "spring" | "keyframes"; // Modify based on your needs

interface FadeInProps {
  direction: Direction;
  type: TransitionType;
  delay: number;
  duration: number;
}

export const fadeIn = ({ direction, type, delay = 0, duration = 1 }: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};



export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <motion.div>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-80 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8'>Group Director</h1>
      <div className=" flex justify-center items-center">
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746" alt="Principal" width="600px" className='rounded'/>

      </div>

        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-4'>Dr. P .Santosh Kumar Patra</h2>
        <p className= "sm:text-[18px] text-[14px] text-white tracking-wider mb-10 ">Dr.P.Santosh Kumar Patra , Group Director of St.Martin &apos; s Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Artificial Intelligence, Software Engineering , Data mining and warehousing & Wireless Networks.</p>
        <br />
        <br />
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-80 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8'>Faculty Advisor</h1>

        <div className=" flex justify-center items-center mb-8">
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/sss_z642MOd4G.jpg?updatedAt=1647509408608" alt="Principal" width="600px" className='rounded'/>

      </div>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-4'>E. Soumya</h2>
        <p className= "sm:text-[18px] text-[14px] text-white tracking-wider">Every great organization has a great team and every great teams need a great Advisor. We as a crew at TAM have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is able to be served with equal priority. From planning the events to marketing, to making our website, we make sure that we are meeting the needs of every participant.</p>
        
      </motion.div>
      
    </div>
  );
}
