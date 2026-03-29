"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaLeaf, FaMortarPestle, FaFire, FaMotorcycle, FaChevronRight } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";

const features = [
  {
    icon: <GiHerbsBundle size={64} className="text-[#4caf72]" />,
    title: "Organic Cannabis",
    description: "Amet aliquam id diam maecenas ultricies eget mauris pharetra.",
  },
  {
    icon: <FaMortarPestle size={56} className="text-[#4caf72]" />,
    title: "Extraction Procedure",
    description: "Marwues arcu felis bibendum ut tristique. In ante met dictum.",
  },
  {
    icon: <FaFire size={56} className="text-[#4caf72]" />,
    title: "Formulations",
    description: "Phuyes orese felis bibendum set inr ut tristique sei nullam non.",
  },
  {
    icon: <FaMotorcycle size={60} className="text-[#4caf72]" />,
    title: "Free Delivery",
    description: "Non diam phasellus vestibulum lorem sed risus tristique nulla.",
  },
];

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

    const elements = document.querySelectorAll(".reveal-up, .reveal-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function WeAreWhatYouNeed() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-fade {
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .reveal-up.revealed,
        .reveal-fade.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="relative w-full bg-[#1a3a28] py-16 px-6">

        {/* Background image */}
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

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center gap-12">

          {/* Header */}
          <div className="reveal-up flex flex-col items-center text-center">
            <FaLeaf size={18} className="text-[#4caf72] mx-auto" />
            <div className="w-16 h-[1px] bg-[#4caf72] mx-auto mt-1 mb-4" />
            <h2 className="font-['Playfair_Display',serif] text-3xl font-bold leading-snug text-white md:text-4xl">
              We are What you Need
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
              Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Non diam phasellus
              vestibulum lorem sed risus ultricies tristique nulla.
            </p>
          </div>

          {/* Features grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal-up flex flex-col items-start gap-4"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="reveal-fade" style={{ transitionDelay: `${index * 120 + 200}ms` }}>
                  {feature.icon}
                </div>
                <h3 className="text-white text-base font-semibold">{feature.title}</h3>
                <div className="flex items-center w-full">
                  <button className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#4caf72] flex items-center justify-center hover:bg-[#4caf72]/20 transition-colors duration-300">
                    <FaChevronRight size={10} className="text-[#4caf72]" />
                  </button>
                  <div className="flex-1 ml-1" style={{ borderTop: "1.5px dashed #4caf72" }} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}