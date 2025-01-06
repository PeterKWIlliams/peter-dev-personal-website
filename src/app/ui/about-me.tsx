const About = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className=" text-5xl tracking-wider text-black">
        <span className="w-auto border-spacing-3 border-8 border-solid border-black px-2 py-1 text-5xl tracking-wider text-black">
          ABOUT ME
        </span>{" "}
      </h1>
      <div className="mt-20 flex w-3/4  text-lg tracking-wider text-black sm:w-96">
        <p>
          I&apos;m a junior software developer from Scotland, enthusiastic about
          the transformative potential of technology to bring about positive
          change, especially in relation in reduction educational inequality.
          I&apos;m eager to learn about all things tech, with a specific focus
          on software architecture and distributed systems.
        </p>
      </div>
    </div>
  );
};

export default About;
