"use client";

import Image from "next/image";
import WhoWeAre from "@/components/Whoweare";
import Statssection from "@/components/Statssection";
import NewProducts from "@/components/NewProducts";
import WhatYouNeed from "@/components/WhatYouNeed";
import BestSelling from "@/components/BestSelling";

export default function HeroSection() {
  return (
    <div className="font-sans antialiased">

      {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#2a5e2e] overflow-hidden">

        {/* Background full-section image */}
        <div className="absolute inset-0 z-0">
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

          {/* ── TOP: Centered Text ── */}
          <div className="text-center mb-10">
            <h1 className=" text-white text-5xl lg:text-6xl font-bold leading-tight mb-5">
              We Are Here To Give You The Best
              <br />
              <span className="text-[#8dc63f]">Herb Products</span>
            </h1>

            {/* Subtext — slightly larger on lg */}
            <p className="text-white/70 text-sm lg:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We bring you authentic Ayurvedic products crafted with time-tested ingredients to promote wellness, balance, and a healthier way of living.
            </p>

            {/* Modern CTA Button */}
            <button className="bg-white text-[#2a5e2e] font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Explore Our Products
            </button>
          </div>

          {/* ── BOTTOM: Product image — nudged up, slightly larger ── */}
          <div className="relative w-full max-w-2xl h-[440px] -mt-20">
            <Image
              src="/products.png"
              alt="Product group"
              fill
              className="object-contain object-bottom"
            />
          </div>

        </div>

       
      </section>
     

      <WhoWeAre />
     
      
      <NewProducts />
      <WhatYouNeed/>
      <Statssection />
      <BestSelling />
      
    </div>
  );
}
