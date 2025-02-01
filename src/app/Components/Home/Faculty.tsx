"use client";
import React from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "none";
type TransitionType = "tween" | "spring" | "keyframes";

interface FadeInProps {
  direction: Direction;
  type: TransitionType;
  delay: number;
  duration: number;
}

export const fadeIn = ({ direction, type, delay = 0, duration = 1 }: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0, // Slide in from left or right
      opacity: 0,
    },
    show: {
      x: 0, // Final position
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
    <div className="pt-[15vh] pb-[20vh] p-10 overflow-hidden"> {/* Add overflow-hidden to prevent horizontal scroll */}
      {/* Group Director Section */}
      <div className="flex flex-col gap-10">
        {/* First Row: Image on Left, Description on Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Image on Left */}
          <motion.div
            className="md:w-1/2 w-full" // Ensure full width on smaller screens
            variants={fadeIn({ direction: "left", type: "tween", delay: 0.4, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9"> {/* Enforce 16:9 aspect ratio */}
              <img
                src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746"
                alt="Principal"
                className="rounded object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Description on Right */}
          <motion.div
            className="md:w-1/2 w-full" // Ensure full width on smaller screens
            variants={fadeIn({ direction: "right", type: "tween", delay: 0.6, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-white font-bold md:text-[40px] sm:text-[30px] xs:text-[25px] text-[20px] mb-4">
              Dr. P. Santosh Kumar Patra
            </h2>
            <p className="sm:text-[18px] text-[14px] text-white tracking-wider">
              Dr. P. Santosh Kumar Patra, Group Director of St. Martin's Engineering College, holds a B.E. in Computer Science & Engineering, an MTech in Computer Science & Engineering, and a Ph.D. in Computer Science & Engineering. His areas of interest are Artificial Intelligence, Software Engineering, Data Mining and Warehousing, and Wireless Networks.
            </p>
          </motion.div>
        </motion.div>

        {/* Second Row: Image on Right, Description on Left */}
        <motion.div
          className="pt-[10vw] flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn({ direction: "right", type: "tween", delay: 0.2, duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Description on Left */}
          <motion.div
            className="md:w-1/2 w-full order-2 md:order-1" // Ensure full width on smaller screens
            variants={fadeIn({ direction: "left", type: "tween", delay: 0.4, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-white font-bold md:text-[40px] sm:text-[30px] xs:text-[25px] text-[20px] mb-4">
              E. Soumya
            </h2>
            <p className="sm:text-[18px] text-[14px] text-white tracking-wider">
              Every great organization has a great team, and every great team needs a great Advisor. We, as a crew at TAM, have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is served with equal priority. From planning the events to marketing, to making our website, we make sure that we are meeting the needs of every participant.
            </p>
          </motion.div>

          {/* Image on Right */}
          <motion.div
            className="md:w-1/2 w-full order-1 md:order-2" // Ensure full width on smaller screens
            variants={fadeIn({ direction: "right", type: "tween", delay: 0.6, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Container with height and width of 40vw */}
            <div className="overflow-hidden rounded md:h-[40vh] md:w-[40vw] h-20vh w-20vw">
              <img
                src="https://ik.imagekit.io/o3b14qow3gqi/Crew/sss_z642MOd4G.jpg?updatedAt=1647509408608"
                alt="Faculty Advisor"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}