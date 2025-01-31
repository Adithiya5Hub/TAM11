"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/Components/hooks/use-outside-click";

export default function EventTimeline() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

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

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
    <div className="h-30vw py-20 w-full ">
              <h4 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] text-center xs:text-[40px] text-[30px] animate-popIn' style={{fontFamily:'Nasalization, sans-serif'}}>Explore our Events! </h4>
    
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
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                  <div className="">
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
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
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
              className="relative overflow-hidden px-4 py-2 text-xl rounded-full font-bold text-black bg-gray-100 mt-4 md:mt-0 group hover:text-white hover:bg-transparent">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 transform scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-0 animate-liquid"></span>
              <span className="relative z-10">Register</span>
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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
    description: "Entertainment Quiz",
    title: "ENTERTAINMENT QUIZ",
    src: "https://i.ibb.co/bmPrcJs/entertainment-quiz.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/JsLYSTZuQsio2KV16",
    content: () => {
      return (
        <p>
          The Entertainment Quiz is a fun-filled challenge that dives into the
world of movies, music, and pop culture. Test your knowledge and
compete with others to prove you&apos;re the ultimate entertainment
enthusiast!

        </p>
      );
    },
  },
  {
    description: "Youth Parliament",
    title: "YOUTH PARLIAMENT",
    src: "https://i.ibb.co/vHDHf16/youthparliament.webp",
    ctaText: "Register",
    ctaLink: "https://forms.gle/XBo4FmybffXjjLy9A",
    content: () => {
      return (
        <p>
         The Youth Parliament is a platform for young minds to debate, discuss,
and deliberate on pressing global and national issues. It empowers
participants to voice their perspectives, fostering leadership and critical
thinking skills.
        </p>
      );
    },
  },
  {
    description: "Podcast",
    title: "PODCAST",
    src: "https://i.ibb.co/R3GqDqq/podcast.png",
    ctaText: "Register",
    ctaLink: "https://forms.gle/bu2cVPonSiiKbVXF9",
    content: () => {
      return (
        <p>
         The podcast series brings insightful conversations with experts, thought
          leaders, and influencers, covering the latest trends in technology,
        entertainment, and culture. Tune in for discussions that spark curiosity
and broaden perspectives
        </p>
      );
    },
  },

 
  {
    description: "Gaming Event",
    title: "ESPORTS SAGA",
    src: "https://i.ibb.co/NLLtqtb/esports.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/RtS8Qs8UB2Ly7ZA36",
    content: () => {
      return (
        <p>
          Esports Saga is a competitive gaming event that brings together players
to showcase their skills in a series of popular gaming tournaments.
Participants compete in an engaging and dynamic environment,
celebrating the exciting world of e-sports.

        </p>
      );
    },
  },
  {
    description: "IDEATHON",
    title: "IDEATHON",
    src: "https://i.ibb.co/qDn3ZsM/ideathon4.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/FTQcCu4oB5KXBJw6A",
    content: () => {
      return (
        <p>
          Ideathon is an exciting inter-departmental event designed to foster
collaboration and innovation among students from across the college.
Participants will form groups of three or four, created randomly, and
work together to brainstorm a unique and innovative startup idea. The
event promotes the exchange of ideas and perspectives, encouraging
creativity and teamwork
        </p>
      );
    },
  },
  {
    description: "Bootcamp",
    title: "The DATA DOJO",
    src: "https://i.ibb.co/mcDbQpR/Data-analytics.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/8z2N73E4J1vibFGXA",
    content: () => {
      return (
        <p>
          This workshop provides an introduction to the fundamentals of data
          analytics, including data cleaning, analysis, and visualization.
          Participants will work with real-world datasets, learn to identify trends,
          and create impactful reports to support decision-making. The session is
          designed to equip attendees with practical skills for solving real-world
          problems in the data analytics domain.

        </p>
      );
    },
  },
  {
    description: "Workshop",
    title: "UI/UX WORKSHOP",
    src: "https://i.ibb.co/wsN3S74/Workshop.jpg",
    ctaText: "Register",
    ctaLink: "https://forms.gle/1KbV2nhcmdykuZHG6",
    content: () => {
      return (
        <p>
          The NexGen Front End Workshop is a UI/UX-focused session designed
          to equip participants with the skills to create intuitive and visually
          captivating user interfaces. This workshop covers industry-standard
          tools and techniques to craft seamless and engaging user experiences.
        </p>
      );
    },
  },
  
  
];
