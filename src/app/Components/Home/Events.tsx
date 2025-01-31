"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex text-white dark:text-white flex-col antialiased  items-center mb-10 justify-center relative overflow-hidden">
      <h1 className="w-full text-center h-20vw mt-4 max-w-7xl px-4 sm:px-6 lg:px-8 text-left text-6xl justify-center ">Events</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Entertainment Quiz",
    quote:
      "Think You’re a Pop Culture Guru? Show Us!",
    name: "",
    backgroundImage: "https://i.ibb.co/mHfr7sh/BrainGPT.jpg",
  },
  {
    title: "Youth Parliament",
    quote:
      "Your Voice, Your Power – Shape the Future!",
    name: "",
    backgroundImage: "https://i.ibb.co/hVc6h7D/Tech-DSA.jpg",
    
  },
  {
    title: "Podcast",
    quote: "Conversations that Stick, Stories that Click!",
    name: "",
    backgroundImage: "https://i.ibb.co/WPmc5xp/Questival.png",
  },
  {
    title: "Esports saga",
    quote:
      "Where Champions Rise and Legends Are Born! ",
    name: "",
    backgroundImage: "https://i.ibb.co/kQV0qdc/Non-Tech-Quiz.jpg",
  },
  {
    title: "Ideathon",
    quote:
      "Innovate, Ideate, Ignite – The Future Starts Now!",
    name: "",
    backgroundImage: "https://i.ibb.co/sV0bdc3/Battle-Bonanza.jpg",
  },
  {
    title: "The Data Dojo",
    quote:
      "Data is the New Oil – Let’s Dig Deeper!",
    name: "",
    backgroundImage: "https://i.ibb.co/HVVpYh6/Content-Crafters.png",
  },
  {
    title: "UI/UX Workshop",
    quote:
      "From Concepts to Clicks – Master the Art of UI/UX!",
    name: "",
    backgroundImage: "https://i.ibb.co/BVBrLhv/Closing.png",
  },
];