import React from "react";
import { Spotlight } from "../ui/Spotlight";

export default function SpotlightPreview() {
  return (
    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" style={{ fontFamily: 'Nasalization, sans-serif' }}>
          Meet the talented team.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-full text-center mx-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        Bringing together a blend of creativity, organization, and expertise, this team is the engine behind the fest. From orchestrating event logistics and crafting marketing plans to nailing the tech and support aspects, they&apos;ve been working behind the scenes to ensure everything runs smoothly. While the event is still in progress, rest assured — their diligence is all about making this fest one for the books.
        </p>
      </div>
    </div>
  );
}
