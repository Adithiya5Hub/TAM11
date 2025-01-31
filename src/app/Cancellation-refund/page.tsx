import React from "react";
import CancellationRefundPage from "@/app/Components/cnr/cancellation-refund";
import Navbar from "@/app/Components/Navbar";
import Footer1 from "@/app/Components/Home/footer1";

export default function cancellationandrefund() {
  return (
    <div>
      <Navbar />
      <CancellationRefundPage />
      <Footer1 />
      
    </div>
  );
}