import WelcomeMessage from "./ui/welcome-message";
import About from "./ui/about";
import Picture from "./ui/picture";
import BookingCalendar from "./ui/booking-calendar";

export default function Home() {
  return (
    <>
      <div className="flex h-auto w-full flex-col sm:grid sm:grid-cols-2">
        <div className="mb-6 mt-24 flex flex-1 flex-col items-center justify-center">
          <WelcomeMessage />
        </div>
        <div className=" breakpoint1 h-6 w-full sm:hidden"></div>

        <Picture />
      </div>
      <div className=" breakpoint1 h-6 w-full bg-slate-200"></div>
      <div className="flex h-auto flex-col sm:grid sm:grid-cols-2">
        <About />
        <BookingCalendar />
      </div>
    </>
  );
}
