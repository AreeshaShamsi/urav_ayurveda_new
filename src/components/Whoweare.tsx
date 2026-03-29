"use client";

import Image from "next/image";
import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function WhoWeAre() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .reveal-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left.revealed,
        .reveal-right.revealed,
        .reveal-up.revealed {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>

      <section className="section-bg relative w-full overflow-hidden py-40 px-6 md:px-16">

        {/* Main layout */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:items-center md:gap-16">

          {/* ── LEFT: stacked images ── */}
          <div className="reveal-left relative flex-shrink-0 w-full max-w-[480px] md:w-[480px]">

            {/* Decorative dot grid — overlapping top-left of primary image */}
            <div className="pointer-events-none absolute left-[-10px] top-[-10px] grid grid-cols-6 gap-[6px] opacity-50 select-none z-30">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[5px] w-[5px] rounded-full bg-green-800"
                />
              ))}
            </div>

            {/* Primary image */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl w-[78%]">
              <Image
                src="/products.png"
                alt="Wellness herbal tray"
                width={360}
                height={300}
                className="h-[300px] w-full object-cover"
              />
            </div>

            {/* Secondary image — overlapping bottom-right */}
            <div className="absolute bottom-[-28px] right-0 z-20 overflow-hidden rounded-2xl border-4 border-white shadow-2xl w-[52%]">
              <Image
                src="/products.png"
                alt="Massage therapy"
                width={220}
                height={190}
                className="h-[190px] w-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-[-10px] left-0 z-30 flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur-sm px-4 py-3 shadow-lg">
              <span className="text-4xl font-extrabold text-green-800 leading-none">4+</span>
              <span className="text-sm font-semibold text-gray-700 leading-tight max-w-[90px]">
                Years of Experience
              </span>
            </div>
          </div>

          {/* ── RIGHT: text content ── */}
          <div className="reveal-right flex flex-col gap-5 md:max-w-[520px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Who We Are
            </p>

            <h2 className="font-['Playfair_Display',serif] text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
              The Natural Way To Achieving Balance And Optimal Health
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <button className="mt-2 w-fit rounded-full bg-[#2d5a27] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1e3d1a] hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Know More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}