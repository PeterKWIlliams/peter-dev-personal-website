"use client";

import Link from "next/dist/client/link";
import { useState } from "react";

export default function BookingCalendar() {
  const [chatLength, setChatLength] = useState("notset");

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
        className="border:none;  w-500 h- flex min-h-[876px] min-w-[400px]"
        id="zcal-invite"
      ></iframe>
    ),
  };
  const handleClick = (length: string) => {
    setChatLength(length);
    console.log(length);
  };

  return (
    <div>
      <h2 className=" flex h-auto w-full justify-center text-2xl tracking-wider text-black sm:col-span-2 ">
        <span className="border-spacing-3   border-8 border-solid border-black px-2 py-1 text-3xl tracking-wider text-black">
          GET IN TOUCH
        </span>
      </h2>
      {chatLength === "mediumChat" ? <div>{bookings.mediumChat}</div> : null}

      {chatLength === "notset" ? (
        <div className="flex h-96 w-96 flex-col items-center bg-black ">
          <h2 className="m-5 text-white">CONTACT ME</h2>
          <div className="flex flex-col gap-6">
            {["shortChat", "mediumChat", "longChat"].map((length, index) => (
              <button
                className="hover:border-accent-500/40 hover:text-accent-500/40 rounded-full px-6 py-2 text-sm uppercase tracking-widest text-gray-400 transition-all hover:border hover:border-purple-400"
                onClick={() => {
                  handleClick(length);
                }}
                key={index}
              >
                {length}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
