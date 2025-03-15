"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Custom hook to detect clicks outside an element
const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default function EventTimeline() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  // Use the useOutsideClick hook to close the modal when clicking outside
  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className="h-30vw py-20 w-full">
        <h4
          className="pt-[10vh] bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] text-center xs:text-[40px] text-[30px] animate-popIn"
          style={{ fontFamily: "Striger, sans-serif" }}
        >
          Explore our Events!
        </h4>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-red-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto w-full">
        {cards.map((card, index) => (
          <React.Fragment key={`card-${card.title}-${id}`}>
            <TimelineCard
              card={card}
              index={index}
              setActive={setActive}
              id={id}
            />
            {/* Add the heading after the Podcast card */}
            
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

const TimelineCard = ({
  card,
  index,
  setActive,
  id,
}: {
  card: (typeof cards)[number];
  index: number;
  setActive: (card: (typeof cards)[number]) => void;
  id: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.2 }}
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
          />
        </motion.div>
        <div>
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-bold text-neutral-800 dark:text-neutral-200 text-center md:text-left"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`button-${card.title}-${id}`}
        className="relative overflow-hidden px-4 py-2 text-xl rounded-full font-bold text-black bg-gray-100 mt-4 md:mt-0 group hover:text-white hover:bg-transparent"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-0 animate-liquid"></span>
        <span className="relative z-10">Register</span>
      </motion.button>
    </motion.div>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  
  {
    description: "Gaming Event",
    title: "ESPORTS SAGA",
    src: "https://i.ibb.co/NLLtqtb/esports.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/QvbKox6EkmHVWy1m6",
    content: () => {
      return (
        <p>
          Esports Saga is a competitive gaming event that brings together players
          to showcase their skills in a series of popular gaming tournaments.
          Join us for an exciting day of gaming, fun, and prizes!
        </p>
      );
    },
  },
  
  {
    description: "Ideathon",
    title: "IDEATHON",
    src: "https://i.ibb.co/qDn3ZsM/ideathon4.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/FTQcCu4oB5KXBJw6A",
    content: () => {
      return (
        <p>
          The Ideathon ha been completed successfully,please visit the gallery section for the event photos.
        </p>
      );
    },
  },
  {
    description: "Workshop",
    title: "UI/UX WORKSHOP",
    src: "https://i.ibb.co/wsN3S74/Workshop.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/QEzmLyJW5b5rC2rV7",
    content: () => {
      return (
        <p>
          UI/UX Workshop: Design. Develop. Dazzle! 🎨🚀
          Master the art of UI/UX in this hands-on workshop! Learn to create stunning, intuitive, and seamless user interfaces using industry-leading tools and techniques. Elevate your front-end skills and craft engaging digital experiences that captivate users! ✨🔥 
          Design smarter. Build better. Impress always! 💡🎯
        </p>
      );
    },
  },
  {
    description: "Bootcamp",
    title: "THE DATA DOJO",
    src: "https://i.ibb.co/mcDbQpR/Data-analytics.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/bDyP6xnqGf8ZKiuA9",
    content: () => {
      return (
        <p>
          Unlock the Power of Data! 🔍📊
          Dive into the world of Data Analytics with this hands-on workshop! Learn to clean, analyze, and visualize real-world data, uncover hidden trends, and create impactful reports that drive smart decisions. Gain practical skills to solve real-world problems and supercharge your career in analytics! 🚀✨
          Don’t just explore data—turn it into insights!🔥 Join us now!!
        </p>
      );
    },
  },
];