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
      <ul className="list-disc space-y-3">
        <li>
          <div className="inline-flex flex-wrap whitespace-pre">
            If you would like to take a look the source code for this page, here
            you go:{"  "}
            <Link
              className="text-blue-700 underline"
              href={
                "https://github.com/PeterKWIlliams/peter-dev-personal-website"
              }
            >
              GITHUB LINK
            </Link>
          </div>
        </li>
        <li>
          Currently in the market for a postion if you like what you see would
          like to see my cv contact at socials or contact below
        </li>

        <li>
          <div className="inline-flex flex-wrap whitespace-pre">
            Inspiration for some of the layout and content taken from:{"  "}
            <Link
              className="text-blue-700 underline"
              href={"https://www.jumr.dev/"}
            >
              jumr.dev
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FinalWords;

// Generic DeepPartial for partial deep updates
