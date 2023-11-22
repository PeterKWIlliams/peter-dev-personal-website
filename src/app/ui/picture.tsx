"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import heyItsMe from "@/images/1fef4389-9c3c-41f7-a33e-f1b7423dd76a.jpg";
import secondaryPic from "@/images/smiley face.jpeg";

export interface ButtonProps extends ImageProps {}

export default function Picture() {
  const [mainPic, setMainPic] = useState("main");

  const handleClick = () => {
    if (mainPic == "main") {
      setMainPic("secondary");
    } else {
      setMainPic("main");
    }
  };
  const [loading, setLoading] = useState(true);
  return (
    <>
      {mainPic === "main" ? (
        <div className="relative flex flex-1 items-center justify-center bg-black">
          <Image
            src={heyItsMe}
            alt="profile pic"
            height={150}
            width={250}
            className={`${
              loading
                ? "h animate-pulse border-2 bg-gray-200 blur-md sm:rounded-full"
                : "border-gray-30 rounded-full border hover:cursor-pointer  hover:border-purple-300  "
            }`}
            onClick={handleClick}
            onLoad={() => setLoading(false)}
          />
        </div>
      ) : (
        <div className="relative -mr-10 flex flex-1 items-center justify-center bg-black ">
          <Image
            src={secondaryPic}
            alt="happy pic"
            height={150}
            width={300}
            className="rounded-full border border-gray-300 "
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
}
