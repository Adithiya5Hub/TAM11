"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" style={{fontFamily:'Nasalization'}}>
    <h3 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-80 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8'>Look at what our audience got to say?</h3>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The overall experience was fantastic. The quiz was super engaging with a perfect mix of movies, music, and pop culture. It felt like a fun challenge, and the energy of the hosts kept it lively throughout!",
    name: "AJAY",
    title: "Entertainment Quiz",
  },
  {
    quote:
      "My experience at the group discussion was absolutelyincredible. I thoroughly enjoyed how like-minded individuals came together to share their ideas, creating an atmosphere of collaboration and learning.",
    name: "SARTHAK",
    title: "Group Discussion",
  },
  {
    quote: "The Youth Parliament was an incredible experience! Debating on real-world issues made me feel like I was part of something impactful and meaningful.",
    name: "RAM",
    title: "Youth Parliament",
  },
  {
    quote:
      "The talk show was absolutely phenomenal! It provided a clear vision of AI’s future and actionable steps for staying ahead in the tech world. ",
    name: "VINITHA",
    title: "Talk Show: AI and Technical Roadmap",
  },
  {
    quote:
      "A highly interactive and well-organized session! The step-by-step guidance made React concepts easy to grasp, even for beginners.",
    name: "NANDINI",
    title: "Workshop: React JS",
  },
  {
    quote:
      "It was a fantastic experience! It boosted my confidence and taught me how to present my points effectively in a group setting.",
    name: "HRISHI",
    title: "Group Discussion",
  },
  {
    quote:
      "Loved it totally! The questions were unique and the rapid-fire session was a pure adrenaline rush. Kudos to the organizers! ",
    name: "VAISHNAVI",
    title: "Technical Quiz",
  },
];
