import React from "react";
import Gallery from "@/app/Components/EventGallery/Gallery";
import Navbar from "@/app/Components/Navbar";
import Footer from "../Components/Home/Footer";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
}