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

export default function Home() {
  return (
    <>
      <div className=" grid h-auto w-full sm:grid-cols-2">
        <div className="relative flex overflow-hidden">
          <WelcomeMessage />
        </div>
        <div className=" breakpoint1 h-6 w-full sm:hidden sm:h-12"></div>
        <Picture />
      </div>
      <div className=" breakpoint1 z-10 h-6 w-full bg-slate-200 sm:h-12"></div>

      <div className=" mt-20 flex flex-col items-center justify-center space-y-24">
        <About />
        <Skills />
        <UsingNowSvg />
        <LearningSvg />
        <OtherSkillsSvg />
        <section className="grid h-auto w-full grid-cols-1 xl:grid-cols-2">
          <ProjectCarousel />
          <FinalWords />
        </section>
        <BookingCalendar />
      </div>
    </>
  );
}
