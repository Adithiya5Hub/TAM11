"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Link from "next/link";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full ">
          <h4 className='bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] text-center xs:text-[40px] text-[30px] animate-popIn' style={{fontFamily:'Striger, sans-serif'}}>Relive the Magic: Explore Event Highlights </h4>

      <LayoutGrid cards={cards}/>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <Link href="https://drive.google.com/drive/folders/16RJwmuP1JXj64-7NEKlAWYVAuCSHXsK0?usp=drive_link">
      <p className="font-bold md:text-4xl text-xl text-white" style={{fontFamily:'Valorant_Font, sans-serif'}}>
       Opening Ceremony 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The inauguration ceremony marks the grand opening of TAM&apos;s month long journey, bringing together students and enthusiasts to celebrate
the fusion of technology and entertainment. It sets the stage with
inspiring speeches and vibrant energy, highlighting TAM&apos;s vision to
explore and share the latest global trends.
      </p></Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <Link href="https://drive.google.com/drive/folders/1nDNJWedMusUZvxeXoXL1zQkLMjbJ1B1l?usp=drive_link">
      <p className="font-bold md:text-4xl text-xl text-white"style={{fontFamily:'Valorant_Font, sans-serif'}}>
       Entertainment Quiz 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The Entertainment Quiz is a fun-filled challenge that dives into the 
world of movies, music, and pop culture. Test your knowledge and 
compete with others to prove you&apos;re the ultimate entertainment 
enthusiast!

      </p>
      </Link>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <Link href="https://drive.google.com/drive/folders/1VP1rrF9hR0PgWjXWNi6uyQQ0XBZyZ20u?usp=sharing">
      <p className="font-bold md:text-4xl text-xl text-white" style={{fontFamily:'Valorant_Font, sans-serif'}}>
       Youth Parliament 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The Youth Parliament is a platform for young minds to debate, discuss, 
and deliberate on pressing global and national issues. It empowers 
participants to voice their perspectives, fostering leadership and critical 
thinking skills.
      </p>
      </Link>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <Link href="https://drive.google.com/drive/folders/1DzCR191ids1Gz98LGE0ZR_oWtEms1wpH?usp=sharing">
      <p className="font-bold md:text-4xl text-xl text-white" style={{fontFamily:'Valorant_Font, sans-serif'}}>
       Podcast
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The podcast series brings insightful conversations with experts, thought 
leaders, and influencers, covering the latest trends in technology, 
entertainment, and culture. Tune in for discussions that spark curiosity 
and broaden perspectives.
      </p>
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.ibb.co/Z6BgXDzP/IMG-2299.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.ibb.co/mnGYTrB/freepik-enhance-23895.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://i.ibb.co/N20H91cZ/DSCF3492.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.ibb.co/VpjSLCGn/IMG-3029.jpg",
  },
];
