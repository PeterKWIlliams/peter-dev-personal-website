"use client";

import Link from "next/dist/client/link";

export default function BookingCalendar() {
  const bookings = {
    shortChat: (
      <iframe
        src="https://zcal.co/i/uLU7MhAu?embed=1&embedType=iframe"
        loading="lazy"
        className="border:none; min-width: 320px; min-height: 544px; ; h-[966px] w-[1096px] "
        id="zcal-invite"
      ></iframe>
    ),
    mediumChat: (
      <iframe
        src="https://zcal.co/i/i1tv11V_?embed=1&embedType=iframe"
        loading="lazy"
        className="border:none; min-width: 320px; min-height: 544px; ; h-[966px] w-[1096px] "
        id="zcal-invite"
      ></iframe>
    ),
  };

  return (
    <div className="flex h-96 w-96 flex-col items-center bg-black ">
      <h2 className="m-5">Book A Chat</h2>
      <div className="flex flex-col gap-6">
        {["shortChat", "mediumChat", "longChat"].map((section) => (
          <Link href="/">
            <button className="hover:border-accent-500/40 hover:text-accent-500/40 rounded-full px-6 py-2 text-sm uppercase tracking-widest text-gray-400 transition-all hover:border hover:border-purple-400">
              {section}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
