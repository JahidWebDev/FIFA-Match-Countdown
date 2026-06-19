import { useState, useEffect } from "react";

import banner from "./assets/fifa-world-cup-2026.png";
import flg1 from "./assets/BRA.png";
import flg2 from "./assets/HAI.png";
import logo from "./assets/toppng.com-fifa-reveals-2026-world-cup-brand-logo-4318x4318.png";

import Countdown from "react-countdown";

import {
  FaDownload,
  FaHeart,
  FaMapMarkerAlt,
  FaFutbol,
  FaCalendarAlt,
} from "react-icons/fa";

export default function App() {
  const status = "UPCOMING";

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"Barlow Condensed", sans-serif'
      }}
    >

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/3 backdrop-blur-md" />

      {/* ONLY BORDER ANIMATION */}
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #049535; }
          25% { border-color: #FEEA04; }
          50% { border-color: #0355A5; }
          75% { border-color: #ED3C35; }
          100% { border-color: #049535; }
        }

        .animated-border {
          animation: borderGlow 4s linear infinite;
        }
      `}</style>

      {/* LOGO */}
      <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-30">
  <img
    src={logo}
    alt="FIFA Logo"
    className="w-20 xs:w-24 sm:w-32 md:w-40 lg:w-48 h-auto drop-shadow-xl"
  />
</div>

      {/* CARD WRAPPER */}
      <div className="relative pt-12 z-20 w-full max-w-[460px]">

        {/* BORDER GLOW */}
        <div className="absolute -inset-5 rounded-[40px] blur-2xl opacity-30 animated-border border-2" />

        {/* GLASS CARD */}
     <div
  className="
    relative
    rounded-[30px] sm:rounded-[35px]
    p-4 sm:p-6
    text-white
    overflow-hidden
    bg-white/3
    backdrop-blur-xl
    border-3 animated-border
    shadow-[0_20px_80px_rgba(0,0,0,0.10)]
  "
>
          {/* HEADER */}
          <div className="flex justify-between items-center">

            <div className="w-12 h-12 rounded-full bg-[#049535]/60 flex items-center justify-center">
              <FaFutbol className="text-[#FEEA04] text-lg" />
            </div>

            <div className="text-center">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest">
                BRAZIL VS HAITI
              </h2>
              <p className="text-[#FEEA04] text-xs sm:text-sm font-semibold">
                FIFA WORLD CUP 2026
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-[#0355A5]/60 flex items-center justify-center">
              <FaDownload className="text-[#ED3C35] text-lg" />
            </div>

          </div>

          {/* TEAMS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">

            <div className="flex flex-col items-center">
              <img src={flg1} className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
              <h3 className="mt-2 text-base sm:text-xl font-bold text-white">
                Brazil
              </h3>
            </div>

            <div className="text-center">

              <span className={`px-3 sm:px-4 py-1 rounded-full text-xs font-bold ${
                status === "LIVE"
                  ? "bg-[#ED3C35] text-white animate-pulse"
                  : "bg-[#FEEA04] text-black"
              }`}>
                {status}
              </span>

              <h1 className="text-4xl sm:text-5xl font-black mt-3">
                6:30
              </h1>

              <p className="text-[#FEEA04] text-lg sm:text-xl font-bold">
                AM
              </p>

              {/* COUNTDOWN */}
              <div className="mt-4">
                <Countdown
                  date={new Date("2027-06-15T06:30:00")}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

                      <div className="bg-[#049535]/60 backdrop-blur-md border-2 animated-border rounded-xl p-2 text-center">
                        <p className="text-base sm:text-lg font-bold">{days}</p>
                        <span className="text-[10px]">DAYS</span>
                      </div>

                      <div className="bg-[#FEEA04]/60 backdrop-blur-md border-2 animated-border rounded-xl p-2 text-center">
                        <p className="text-base sm:text-lg font-bold">{hours}</p>
                        <span className="text-[10px]">HRS</span>
                      </div>

                      <div className="bg-[#0355A5]/60 backdrop-blur-md border-2 animated-border rounded-xl p-2 text-center">
                        <p className="text-base sm:text-lg font-bold">{minutes}</p>
                        <span className="text-[10px]">MIN</span>
                      </div>

                      <div className="bg-[#ED3C35]/60 backdrop-blur-md border-2 animated-border rounded-xl p-2 text-center">
                        <p className="text-base sm:text-lg font-bold">{seconds}</p>
                        <span className="text-[10px]">SEC</span>
                      </div>

                    </div>
                  )}
                />
              </div>

              <p className="text-gray-300 text-sm mt-3">
                Group C
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={flg2} className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
              <h3 className="mt-2 text-base sm:text-xl font-bold text-white">
                Haiti
              </h3>
            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-6 sm:mt-8 text-center text-gray-300 flex items-center justify-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-[#ED3C35]" />
            Philadelphia Stadium
          </div>

        <button className="
  w-full mt-5 sm:mt-6 py-3 sm:py-4 rounded-2xl font-bold text-black

  bg-white/90 backdrop-blur-xl

  border-2 animated-border
  shadow-lg

  flex items-center justify-center gap-2

  hover:scale-105 transition
">
  <FaCalendarAlt className="text-[#049535]" />
  DOWNLOAD CALENDAR
</button>

        </div>
      </div>

      {/* LIKE */}
<style>{`
  @keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.15); }
    50% { transform: scale(0.95); }
    75% { transform: scale(1.2); }
  }

  .heart-animate {
    animation: heartBeat 1.2s infinite;
  }
`}</style>

<div className="absolute bottom-5 right-5 flex items-center gap-93 text-white text-sm">


<div className="flex items-center gap-2 sm:gap-3">
  <span className="text-white/80 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
    Press Like
  </span>

  <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#ED3C35] flex items-center justify-center shadow-lg heart-animate shrink-0">
    <FaHeart className="text-sm sm:text-base md:text-lg text-white" />
  </div>
</div>

</div>

    </div>
  );
}