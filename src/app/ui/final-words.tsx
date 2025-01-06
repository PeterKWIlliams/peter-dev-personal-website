import Link from "next/link";
import { FC } from "react";

interface FinalWordsProps {}

const FinalWords: FC = ({}) => {
  return (
    <section className="flex flex-col space-y-6">
      <h2 className="text-center text-2xl tracking-wider text-black sm:text-3xl">
        <span className="border-spacing-3 border-8 border-solid border-black px-2 py-1 text-xl tracking-wider text-black sm:text-3xl">
          FINAL WORDS
        </span>
      </h2>
      <ul className="list-disc space-y-3 px-4">
        <li>
          <div className="whitespace-pre-wrap">
            If you would like to take a look the source code for this page, here
            you go:{" "}
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
          If you would like to contact me you can use the contact section below
          to book a chat.
        </li>
      </ul>
    </section>
  );
};

export default FinalWords;

// Generic DeepPartial for partial deep updates
