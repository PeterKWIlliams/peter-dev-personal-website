import { FC } from "react";

const About = () => {
  return (
    <div className="mb-4 mt-16 flex flex-col gap-7">
      <h1 className=" text-5xl tracking-wider text-black">About</h1>
      <div className=" flex text-lg text-black">
        <p>
          {" "}
          I'm a software developer from Scotland. Enthusiastic about the
          transformative potential of technology to bring about positive change,
          especially in relation to ensuring educational equality.I'm eager to
          learn about all things tech, with a specific focus on mastering
          software architecture and database design.
        </p>
      </div>
    </div>
  );
};

export default About;
