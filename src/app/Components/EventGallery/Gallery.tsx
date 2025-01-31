"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full ">
          <h4 className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] text-center xs:text-[40px] text-[30px]' style={{fontFamily:'batmfa, sans-serif'}}>Relive the Magic: Explore Event Highlights </h4>

      <LayoutGrid cards={cards}/>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       <a href="https://drive.google.com/drive/folders/16RJwmuP1JXj64-7NEKlAWYVAuCSHXsK0?usp=drive_link" target="_blank">Opening Ceremony</a> 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The inauguration ceremony marks the grand opening of TAM&apos;s month long journey, bringing together students and enthusiasts to celebrate
the fusion of technology and entertainment. It sets the stage with
inspiring speeches and vibrant energy, highlighting TAM&apos;s vision to
explore and share the latest global trends.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       <a href="/event-timeline">Entertainment Quiz</a> 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The podcast series brings insightful conversations with experts, thought
leaders, and influencers, covering the latest trends in technology,
entertainment, and culture. Tune in for discussions that spark curiosity
and broaden perspectives
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       <a href="/event-timeline">Group Discussion</a> 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Group Discussion is a platform for young minds to debate, discuss,
and deliberate on pressing global and national issues. It empowers
participants to voice their perspectives, fostering leadership and critical
thinking skills.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       <a href="/event-timeline">Talkshow</a> 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The Talkshow series brings insightful conversations with experts, thought
leaders, and influencers, covering the latest trends in technology,
entertainment, and culture. Tune in for discussions that spark curiosity
and broaden perspectives.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.ibb.co/9rGv8pS/IMG-2374.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.ibb.co/QFgDPFKP/IMG-2462.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1523582407565-efee5cf4a353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyb3VwJTIwZGlzY3Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1561489404-42f13a2f09a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlbWluYXJ8ZW58MHx8MHx8fDA%3D",
  },
];
