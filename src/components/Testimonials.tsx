"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wellness Enthusiast",
    review: "The herbal products have completely transformed my daily routine. I feel more balanced and energetic than ever before. Truly authentic Ayurvedic quality!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Yoga Instructor",
    review: "I've been recommending these CBD products to all my students. The quality is unmatched and the results speak for themselves. Highly professional service.",
    rating: 5,
    avatar: "RM",
  },
  {
    id: 3,
    name: "Anjali Verma",
    role: "Nutritionist",
    review: "As a nutritionist, I'm very particular about what I recommend. These products meet the highest standards of purity and efficacy. My clients love them.",
    rating: 5,
    avatar: "AV",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Fitness Coach",
    review: "The recovery products are phenomenal. After intense training sessions, these herbal formulations help my body recover naturally without any side effects.",
    rating: 4,
    avatar: "VS",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Ayurveda Practitioner",
    review: "Finally a brand that truly understands traditional formulations. The extraction process preserves all the vital properties. Outstanding craftsmanship.",
    rating: 5,
    avatar: "MP",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? "text-[#6abf69]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (idx: number) => setActive(idx);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <>
      <style>{`
        .t-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .t-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel-card {
          flex-shrink: 0;
          width: 320px;
          transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`t-section relative w-full bg-[#f0f7eb] py-24 px-6 overflow-hidden ${visible ? "visible" : ""}`}
      >
        {/* Faint bg quote */}
        <div className="pointer-events-none absolute top-6 right-10 text-[160px] font-serif text-[#6abf69]/5 leading-none select-none">"</div>

        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <div className="w-8 h-[3px] bg-[#6abf69] rounded-full mb-4" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6abf69] mb-2">Testimonials</p>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>

          {/* Carousel */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translateX(calc(50% - ${active * 340 + 160}px))`,
              }}
            >
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={t.id}
                    className="carousel-card mx-[10px]"
                    style={{
                      transform: isActive ? "scale(1.05)" : "scale(0.92)",
                      opacity: isActive ? 1 : 0.5,
                    }}
                    onClick={() => goTo(i)}
                  >
                    <div className={`relative bg-white rounded-3xl p-7 h-full border cursor-pointer ${isActive ? "border-[#6abf69]/40 shadow-lg shadow-green-100" : "border-gray-100 shadow-sm"}`}>

                      {/* Green top bar */}
                      {isActive && (
                        <div className="absolute top-0 left-8 w-10 h-1 bg-[#6abf69] rounded-b-full" />
                      )}

                      {/* Quote */}
                      <div className="text-[#6abf69]/40 text-5xl font-serif leading-none mb-3 select-none">"</div>

                      {/* Review */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-['Georgia',serif] italic">
                        {t.review}
                      </p>

                      {/* Stars */}
                      <StarRating rating={t.rating} />

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6abf69] to-[#2d5a27] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                          <p className="text-xs text-gray-400">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">

            {/* Prev */}
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-[#6abf69] flex items-center justify-center text-[#6abf69] hover:bg-[#6abf69] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "22px" : "6px",
                    height: "6px",
                    background: i === active ? "#6abf69" : "#c5d9a8",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-[#6abf69] flex items-center justify-center text-[#6abf69] hover:bg-[#6abf69] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </>
  );
}