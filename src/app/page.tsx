"use client";

import Image from "next/image";
import { useEffect } from "react";
import WhoWeAre from "@/components/Whoweare";
import Statssection from "@/components/Statssection";
import NewProducts from "@/components/NewProducts";
import WhatYouNeed from "@/components/WhatYouNeed";
import BestSelling from "@/components/BestSelling";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/Statssection";

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
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HeroSection() {
  useScrollReveal();

  return (
    <>
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .hero-title { animation: fadeDown 0.9s ease both; animation-delay: 0.2s; }
        .hero-sub   { animation: fadeUp  0.9s ease both; animation-delay: 0.5s; }
        .hero-btn   { animation: fadeUp  0.9s ease both; animation-delay: 0.75s; }
        .hero-img   { animation: fadeUp  1.1s ease both; }
        .hero-bg    { animation: fadeIn  1.2s ease both; }

        .reveal-up, .reveal-left, .reveal-right, .reveal-fade {
          opacity: 0;
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .reveal-up    { transform: translateY(36px); }
        .reveal-left  { transform: translateX(-48px); }
        .reveal-right { transform: translateX(48px); }
        .reveal-fade  { transform: none; }

        .reveal-up.revealed,
        .reveal-left.revealed,
        .reveal-right.revealed,
        .reveal-fade.revealed {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>

      <div className="font-sans antialiased">

        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-[#2a5e2e] overflow-hidden">

          {/* Background image */}
          <div className="hero-bg absolute inset-0 z-0">
            <Image
              src="/green_bg.jpg"
              alt="background leaf"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content wrapper */}
          <div className="relative z-10 mx-auto max-w-5xl px-8 pt-36 pb-0 flex flex-col items-center">

            {/* Centered text */}
            <div className="text-center mb-10">
              <h1 className="hero-title text-white text-5xl lg:text-6xl font-bold leading-tight mb-5">
                We Are Here To Give You The Best
                <br />
                <span className="text-[#8dc63f]">Herb Products</span>
              </h1>

              <p className="hero-sub text-white/70 text-sm lg:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                We bring you authentic Ayurvedic products crafted with time-tested ingredients to promote wellness, balance, and a healthier way of living.
              </p>

              <button className="hero-btn bg-white text-[#2a5e2e] font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300">
                Explore Our Products
              </button>
            </div>

            {/* Product image — no float */}
            <div className="hero-img relative w-full max-w-2xl h-[440px] -mt-20">
              <Image
                src="/products.png"
                alt="Product group"
                fill
                className="object-contain object-bottom"
              />
            </div>

          </div>
        </section>

        {/* Scroll-revealed sections */}
        <div className="reveal-up"><WhoWeAre /></div>
        
        <div className="reveal-up"><NewProducts /></div>
        <div className="reveal-up"><WhatYouNeed /></div>
        <div className="reveal-up"><BestSelling /></div>
        <div className="reveal-up"><StatsSection /></div>

        <div className="reveal-up"><Testimonials /></div>

      </div>
    </>
  );
}