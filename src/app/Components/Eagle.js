"use client";
import { useEffect, useState } from "react";

export default function Eagle({ keepHeadingVisible }) {
  const [showEagle, setShowEagle] = useState(false);

  useEffect(() => {
    // Trigger eagle animation
    setTimeout(() => {
      setShowEagle(true);
    }, 1000);
  }, []);

  return (
    <div className="container mt-[20vh] pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh]">
      {showEagle && (
        <img
          src="https://i.ibb.co/9mkSMqKT/eagle-logo.png"
          alt="Eagle"
          className="eagle"
        />
      )}
      {keepHeadingVisible && (
        <div className="heading text-6xl md:text-8xl font-bold text-center fade-in">
          Technology Awareness Month
        </div>
      )}
    </div>
  );
}






// "heading text-6xl md:text-8xl font-bold text-center"
// container mt-[20vh] pt-[20vh] pb-[20vh]