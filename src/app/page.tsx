'use client';
import Navbar from "@/app/Components/Navbar";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import HeroSection from "@/app/Components/Home/Overview";
import OurMission from "./Components/Home/mission";
export default function Home() {
  return (
    
      <div style={{ fontFamily: 'Striger, sans-serif' }}>
        <Navbar />      
          {/* <Main /> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          <HeroSection/>
          <OurMission />
          <Faculty />
          {/*<Events />*/}
          {/* <FAQ /> */}
          <Footer />
          
        {/* </TracingBeam> */}
        
      </div>
    
  );
}
