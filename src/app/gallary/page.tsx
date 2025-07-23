/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

import ImageGallery from "@/components/Gallary/GallarImage";
import SectionHead from "@/components/SectionHead";

// Sample configuration array - you can replace this with your own images
const graduationImages = [
  {
    id: 1,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fc3zA53UgqQ6cxCeiGUjJO5nSfDpMFaXuvdKH",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f67GofDmaI9eTNblhixkq3wpRQ4zUJOdcoDg6",
    alt: "Ocean view",
  },
  {
    id: 3,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fYNzjQBIQO4Cb2935MfPeSIGtZB7NlEyzvHud",
    alt: "Forest scene",
  },
  {
    id: 4,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fqMZy2vDhkVpYoX9Jtj2QDyIE7vMH8mfTFWqs",
    alt: "City skyline",
  },
  {
    id: 5,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fnyVsYyXMSmQykTtrLDXciGCJzeUvpF6I8f7d",
    alt: "Desert landscape",
  },
  {
    id: 6,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fuHE9aANhabORCBAfQYdEWg3c48ntJGX0P5Ho",
    alt: "Lake reflection",
  },
  {
    id: 7,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fijROjMYewmV72ORXzy90MSkUIhTBlprdCD8f",
    alt: "Tropical beach",
  },
  {
    id: 8,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fizXaegYewmV72ORXzy90MSkUIhTBlprdCD8f",
    alt: "Waterfall",
  },
  {
    id: 9,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5f4efn9VP3UCo4Px0WKiphfMOVRLe5BzFgTtrl",
    alt: "Valley view",
  },
  {
    id: 10,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fKmuFd7skmB8FU1PRA6Z2MvLeh49cIVdCsqH5",
    alt: "Rock formations",
  },
];
const VR_Class_Images = [
  {
    id: 1,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fEyPPjVEHtWHBq4F0OmlNvzeo7JMAyiDTKX9p",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fw2deSdKHtJrTvuZMBd47oIaRS5sVm6ygfGlC",
    alt: "Ocean view",
  },
  {
    id: 3,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5frcAf6TBUmFQJASgKdRBVNWnwp2iuDZGt6faL",
    alt: "Forest scene",
  },
  {
    id: 4,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fl8c7TCrTqztyP6AQp7YRa9DCMFHcEGBsIVZg",
    alt: "City skyline",
  },
  {
    id: 5,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fYpk74fzIQO4Cb2935MfPeSIGtZB7NlEyzvHu",
    alt: "Desert landscape",
  },
  {
    id: 6,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fDKYrcCtVJrRubBwPSZNdXyzM7lnC3etU4sD5",
    alt: "Lake reflection",
  },
  {
    id: 7,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fYpk74fzIQO4Cb2935MfPeSIGtZB7NlEyzvHu",
    alt: "Tropical beach",
  },
];

const eventsImages = [
  {
    id: 1,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fKmC5N4skmB8FU1PRA6Z2MvLeh49cIVdCsqH5",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fDnnuCqVJrRubBwPSZNdXyzM7lnC3etU4sD5K",
    alt: "Ocean view",
  },
  {
    id: 3,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fvMGEN73DgMEXNTC5mJRHehoWrzBqAIj4ba2u",
    alt: "Ocean view",
  },
  {
    id: 4,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fehXnbuf5TZfUVHB9SJYjLRqptazr8D4NK3Mn",
    alt: "Ocean view",
  },
  {
    id: 5,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fAqOWYZ1gDKIrdezVcROCax9tW0osP1AwpTZL",
    alt: "Ocean view",
  },
];

export default function Home() {
  return (
    <div className="mx-auto mt-15 lg:mt-25">
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-lg md:text-2xl xl:text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our Gallery
          </h1>

          <div className="space-y-10">
            <div>
              <SectionHead title="Events & Field Visits" />
              <ImageGallery images={eventsImages} />
            </div>
            <div>
              <SectionHead title="Convocation Ceremony" />
              <ImageGallery images={graduationImages} />
            </div>
            <div>
              <SectionHead title="Virtual Reality Medical Workshop" />
              <ImageGallery images={VR_Class_Images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { TypeAnimation } from "react-type-animation";
// import SectionHead from "@/components/SectionHead";
// import React, { useState } from "react";

// const CareerPage = () => {
//   const [typingDone, setTypingDone] = useState(false);
//   return (
//     <div className="text-white min-h-[60vh] scroll-mt-[80px] mt-25">
//       <h2 className="relative text-3xl font-bold my-6 text-center">
//         <span className="text-transparent md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-blue-500 ">
//           <TypeAnimation
//             sequence={[
//               "STAY TUNED WILL BACK TO YOU SOON...",
//               () => setTypingDone(true),
//             ]}
//             wrapper="span"
//             speed={50}
//             cursor={false}
//             repeat={0}
//           />
//           {/* {typingDone && (
//             <span className="inline-flex ml-2 text-pink-500">
//               <span className="dot dot-1">.</span>
//               <span className="dot dot-2">.</span>
//               <span className="dot dot-3">.</span>
//             </span>
//           )} */}
//         </span>
//       </h2>
//     </div>
//   );
// };

// export default CareerPage;
