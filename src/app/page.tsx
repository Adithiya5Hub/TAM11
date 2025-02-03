'use client';
import Navbar from "@/app/Components/Navbar";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import OurMission from "./Components/Home/mission";
import Eagle from "./Components/Eagle"
import { useEffect, useState } from "react";
export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Delay content rendering until animation finishes
    const animationDuration = 4000; // 3s eagle animation + 1s fade-out
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, animationDuration);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    
      <div style={{ fontFamily: 'Striger, sans-serif' }}>
        <Navbar />      
          {/* <Main /> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          <Eagle keepHeadingVisible={animationFinished}/>
          {animationFinished && (
        <div
          className={`transition-opacity duration-1000 opacity-0 ${
            animationFinished ? "opacity-100" : ""
          } pt-20`}
        >
          <OurMission />
          <Faculty />
          {/*<Events />*/}
          {/* <FAQ /> */}
          <Footer />
          </div>
      )}
        {/* </TracingBeam> */}
        
      </div>
    
  );
}
