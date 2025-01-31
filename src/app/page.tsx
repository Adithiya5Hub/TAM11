'use client';
import Navbar from "@/app/Components/Navbar";
import Overview from "@/app/Components/Home/Overview";
import Cards from "@/app/Components/Home/Cards";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import Events from "@/app/Components/Home/Events";

export default function Home() {
  return (
    
      <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
        <Navbar />      
          {/* <Main /> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          {/* <TracingBeam className="px-6"> */}
          <Overview/>
          <Faculty />
          <Events />
          {/* <FAQ /> */}
          <Footer />
          
        {/* </TracingBeam> */}
        
      </div>
    
  );
}
