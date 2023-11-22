"use client";

import React, { useState } from "react";
import { FC } from "react";
import SVGSkillIcon from "./svg-skill-icon";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cn } from "@/lib/utils";

interface svgSkillShellProps {
  svgIcons: { svg: JSX.Element; label: string }[];
  title: string;
}

const SvgSkillShell: FC<svgSkillShellProps> = ({ svgIcons, title }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={` grid h-auto w-3/4 grid-cols-2 place-items-center space-y-10  duration-700 sm:grid-cols-4 xl:w-3/5  `}
    >
      <h3 className="col-span-1  text-center text-xl font-bold ">{title}:</h3>
      <div className="col-span-1 sm:col-span-4"></div>
      {svgIcons.map((Icons, index) => {
        const buttonRef = React.useRef(null);
        return (
          <SVGSkillIcon
            {...Icons}
            key={index}
            isOpen={showMore || index < 4}
            buttonRef={buttonRef}
          />
        );
      })}

      <>
        {svgIcons.length > 4 ? (
          <button
            className={cn(
              "col-span-2 h-auto w-auto justify-self-center duration-[1600ms] sm:col-span-4",
              { "scale-0": !showMore },
            )}
            onClick={handleShowMore}
          >
            <label className=" inline-flex space-x-4 hover:cursor-pointer ">
              <span className="font-semibold text-stone-500 ">READ LESS</span>
              <div className="-my-2">{icons.upArrow}</div>
            </label>
          </button>
        ) : null}
        {svgIcons.length > 4 ? (
          <button
            className={cn(
              "col-span-2 h-auto w-auto justify-self-center duration-[1600ms] hover:cursor-pointer sm:col-span-4",
              { "scale-0": showMore },
            )}
            onClick={handleShowMore}
          >
            <label className="inline-flex space-x-4 hover:cursor-pointer ">
              <span className="font-bold text-stone-500  ">READ MORE</span>{" "}
              <div className="my-2 ">{icons.downArrow}</div>
            </label>
          </button>
        ) : null}
      </>
    </div>
  );
};

export default SvgSkillShell;

const icons = {
  downArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  upArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  ),
};
