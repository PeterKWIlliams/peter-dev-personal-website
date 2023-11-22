import { FC } from "react";

const About = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className=" text-5xl tracking-wider text-black">
        <span className="w-auto border-spacing-3 border-8 border-solid border-black px-2 py-1 text-5xl tracking-wider text-black">
          ABOUT ME
        </span>
      </h1>
      <div className=" mt-20 flex w-96 text-lg tracking-wider text-black sm:w-[500px]">
        <p>
          {" "}
          I'm a software developer from Scotland. Enthusiastic about the
          transformative potential of technology to bring about positive change,
          especially in relation to ensuring educational equality.I'm eager to
          learn about all things tech, with a specific focus on mastering
          software architecture and database design. Hopefully one day i will
          feel comfortable in knowing how my computer turns on.
        </p>
      </div>
    </div>
  );
};

export default About;
