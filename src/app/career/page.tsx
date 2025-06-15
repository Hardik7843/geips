"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TypeAnimation } from "react-type-animation";
import SectionHead from "@/components/SectionHead";
import React, { useState } from "react";

const CareerPage = () => {
  const [typingDone, setTypingDone] = useState(false);
  return (
    <div className="text-white min-h-[60vh] scroll-mt-[80px] mt-25">
      <h2 className="relative text-3xl font-bold my-6 text-center">
        <span className="text-transparent md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-blue-500 ">
          <TypeAnimation
            sequence={[
              "STAY TUNED WILL BACK TO YOU SOON...",
              () => setTypingDone(true),
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            repeat={0}
          />
          {/* {typingDone && (
            <span className="inline-flex ml-2 text-pink-500">
              <span className="dot dot-1">.</span>
              <span className="dot dot-2">.</span>
              <span className="dot dot-3">.</span>
            </span>
          )} */}
        </span>
      </h2>
    </div>
  );
};

export default CareerPage;
