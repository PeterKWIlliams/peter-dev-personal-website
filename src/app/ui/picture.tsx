"use client";

import { useState } from "react";
import Image from "next/image";
import heyItsMe from "@/images/1fef4389-9c3c-41f7-a33e-f1b7423dd76a.jpg";
import secondaryPic from "@/images/smiley face.jpeg";
export default function Picture() {
  const [mainPic, setMainPic] = useState("main");

  const handleClick = () => {
    if (mainPic == "main") {
      setMainPic("secondary");
    } else {
      setMainPic("main");
    }
  };
  return (
    <>
      {mainPic === "main" ? (
        <div className="flex flex-1 items-center justify-center  bg-black ">
          <Image
            src={heyItsMe}
            alt="profile pic"
            height={150}
            width={250}
            className="border-x-red-50 hover:cursor-pointer hover:border-purple-300 sm:rounded-full"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center bg-black">
          <Image
            src={secondaryPic}
            alt="happy pic"
            height={150}
            width={300}
            className="rounded-full border border-gray-300"
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
}
