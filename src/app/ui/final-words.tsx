import Link from "next/link";
import { FC } from "react";

interface FinalWordsProps {}

const FinalWords: FC<FinalWordsProps> = ({}) => {
  return (
    <section className=" flex flex-col space-y-6  ">
      <h2 className=" flex w-full justify-center text-2xl tracking-wider text-black sm:col-span-2 ">
        <span className="border-spacing-3   border-8 border-solid border-black px-2 py-1 text-3xl tracking-wider text-black">
          FINAL WORDS
        </span>
      </h2>
      <ul>
        <li className="inline-flex">
          If you would like to take a look the source code for this page, here
          you go:
          <pre>
            {" "}
            <Link
              className="text-blue-700 underline"
              href={
                "https://github.com/PeterKWIlliams/peter-dev-personal-website"
              }
            >
              GITHUB LINK
            </Link>
          </pre>
        </li>
        <li>If you like the look of my work and would like to get in touch </li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
    </section>
  );
};

export default FinalWords;
