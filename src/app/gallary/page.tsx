// "use client";

// import ImageGallery from "@/components/Gallary/GallarImage";

// // Sample configuration array - you can replace this with your own images
// const galleryImages = [
//   {
//     id: 1,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Mountain landscape",
//   },
//   {
//     id: 2,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Ocean view",
//   },
//   {
//     id: 3,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Forest scene",
//   },
//   {
//     id: 4,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "City skyline",
//   },
//   {
//     id: 5,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Desert landscape",
//   },
//   {
//     id: 6,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Lake reflection",
//   },
//   {
//     id: 7,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Tropical beach",
//   },
//   {
//     id: 8,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Waterfall",
//   },
//   {
//     id: 9,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Valley view",
//   },
//   {
//     id: 10,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
//     alt: "Rock formations",
//   },
//   {
//     id: 11,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Coral reef",
//   },
//   {
//     id: 12,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Sand dunes",
//   },
//   {
//     id: 13,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Prairie landscape",
//   },
//   {
//     id: 14,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Lone tree",
//   },
//   {
//     id: 15,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Forest path",
//   },
//   {
//     id: 16,
//     src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f6wWPbbmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
//     alt: "Farmland",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="mx-auto mt-15 lg:mt-25">
//       <div className="min-h-screen bg-gray-50">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-lg md:text-2xl xl:text-3xl font-bold text-center text-gray-800 mb-8">
//             Explore Our Gallery
//           </h1>
//           <ImageGallery images={galleryImages} />
//         </div>
//       </div>
//     </div>
//   );
// }

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
