"use client";


import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner"; // Import toast functionality

function SubscribeBox() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail(""); // Clear the input field after subscribing
  };

  return (
    <section className="relative">
      <div className="bg-[url('/main2.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
        {/* Background image is set here */}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl text-embossed sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
          Get our stories delivered from us to your inbox weekly.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-12 gap-2">
          <Input
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            className="w-[280px] sm:w-[320px] h-[48px] sm:h-[56px] pl-[20px] sm:pl-[26px] text-lg sm:text-xl text-black bg-white"
          />

          <Button
            onClick={handleSubscribe} // Trigger the subscription action
            className="bg-transparent border-2 border-white text-white w-[150px] sm:w-[166px] h-[48px] sm:h-[56px] text-lg sm:text-[20px]"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Toaster for showing notifications */}
      <Toaster richColors />
    </section>
  );
}

export default SubscribeBox;
