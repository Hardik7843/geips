"use client";

import ImageGallery from "@/components/Gallary/GallarImage";

// Sample configuration array - you can replace this with your own images
const galleryImages = [
  {
    id: 1,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Mountain landscape",
  },
  {
    id: 2,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Ocean view",
  },
  {
    id: 3,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Forest scene",
  },
  {
    id: 4,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "City skyline",
  },
  {
    id: 5,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Desert landscape",
  },
  {
    id: 6,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Lake reflection",
  },
  {
    id: 7,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Tropical beach",
  },
  {
    id: 8,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Waterfall",
  },
  {
    id: 9,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Valley view",
  },
  {
    id: 10,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Rock formations",
  },
  {
    id: 11,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Coral reef",
  },
  {
    id: 12,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Sand dunes",
  },
  {
    id: 13,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Prairie landscape",
  },
  {
    id: 14,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Lone tree",
  },
  {
    id: 15,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Forest path",
  },
  {
    id: 16,
    src: "https://vlt6otqx2w.ufs.sh/f/HlfNHW9XZQ5fThovMOAKc25JoBaqIZsMexdNbhPglTfnHyjF",
    alt: "Farmland",
  },
];

export default function Home() {
  return (
    <div className="mx-auto mt-15 lg:mt-25">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Explore Our Gallery
          </h1>
          <ImageGallery images={galleryImages} />
        </div>
      </div>
    </div>
  );
}
