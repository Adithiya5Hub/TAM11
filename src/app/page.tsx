'use client';
import Navbar from "@/app/Components/Navbar";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import OurMission from "./Components/Home/mission";
import Overview from "./Components/Home/Overview";
// import Events from "./Components/Home/Events";


export default function Home() {
  
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
