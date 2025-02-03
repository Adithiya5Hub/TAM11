import React from "react";

export default function SpotlightPreview() {
  return (
    <div className="md:h-[50rem] h-[30rem] w-full rounded-md flex items-center justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-800 bg-opacity-50 transform scale-95 opacity-0 animate-popIn" style={{ fontFamily: 'Striger, sans-serif' }}>
        
          Meet the TAM Crew
        </h1>
        
      </div>
    </div>
  );
}
