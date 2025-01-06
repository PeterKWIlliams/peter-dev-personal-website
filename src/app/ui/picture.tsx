"use client";

import { useState } from "react";
import Image from "next/image";
import heyItsMe from "@/images/1fef4389-9c3c-41f7-a33e-f1b7423dd76a.jpg";
import secondaryPic from "@/images/smiley face.jpeg";

const images = [
  { src: heyItsMe, alt: "profile pic" },
  { src: secondaryPic, alt: "happy pic" },
];

export default function Picture() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative flex flex-1 items-center justify-center bg-black">
      <Image
        src={currentImage.src}
        alt={currentImage.alt}
        height={150}
        width={250}
        className={`${
          loading
            ? "h animate-pulse border-2 bg-gray-200 blur-md sm:rounded-full"
            : "rounded-full border border-gray-300 hover:cursor-pointer hover:border-purple-300"
        }`}
        onClick={handleClick}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
