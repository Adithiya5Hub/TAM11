import React from "react";

export default function SpotlightPreview() {
  return (
    <div className="md:h-[50rem] h-[30rem] w-full rounded-md flex items-center justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 transform scale-95 opacity-0 animate-popIn" style={{ fontFamily: 'Striger, sans-serif' }}>
        
          Meet the TAM Crew
        </h1>
        {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-full text-center mx-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        Bringing together a blend of creativity, organization, and expertise, this team is the engine behind the fest. From orchestrating event logistics and crafting marketing plans to nailing the tech and support aspects, they&apos;ve been working behind the scenes to ensure everything runs smoothly. While the event is still in progress, rest assured — their diligence is all about making this fest one for the books.
        </p> */}
      </div>
    </div>
  );
}
