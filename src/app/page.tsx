'use client';
import Navbar from "@/app/Components/Navbar";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import OurMission from "./Components/Home/mission";
import Overview from "./Components/Home/Overview";
// import Events from "./Components/Home/Events";

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
          
          <Overview />
        
          <OurMission />
          <Faculty />
          {/* <Events /> */}
          {/* <FAQ /> */}
          
          <Footer />
          
     
        
        
      </div>
    
  );
}
