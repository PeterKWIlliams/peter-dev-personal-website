import WelcomeMessage from "./ui/welcome-message";
import About from "./ui/about-me";
import Picture from "./ui/picture";
import Skills from "./ui/skills";
import UsingNowSvg from "./ui/svgGrid/using-now-svg";
import LearningSvg from "./ui/svgGrid/learning-svg";
import OtherSkillsSvg from "./ui/svgGrid/other-skills-svg";
import ProjectCarousel from "./ui/projects/project-carousel";
import BookingCalendar from "./ui/booking-calendar";
import FinalWords from "./ui/final-words";
import { Cal } from "./cal-embed-react";

export default function Home() {
  return (
    <>
      <div className=" grid h-auto w-full sm:grid-cols-2">
        <div className="relative flex overflow-hidden">
          <WelcomeMessage />
        </div>
        <div className=" breakpoint1 h-6 w-full sm:hidden"></div>
        <Picture />
      </div>
      <div className=" breakpoint1 z-10 h-6 w-full bg-slate-200 sm:h-16"></div>

      <div className=" mt-20 flex flex-col items-center justify-center space-y-36">
        <About />
        <Skills />
        <UsingNowSvg />
        <LearningSvg />
        <OtherSkillsSvg />
        <ProjectCarousel />
        <FinalWords />
        <section id="get-in-touch" className="w-3/4">
          <Cal calLink="peter-williams" className="w-full" />
        </section>
        <footer className="mx-auto max-w-2xl pb-8 text-center text-sm text-gray-400 dark:text-gray-600">
          <p>this site is work in progress somethings may not work properly</p>
          <br></br>
          <p>© 2023 Peter Williams. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
