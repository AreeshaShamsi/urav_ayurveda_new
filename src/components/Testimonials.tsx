"use client";

import { useEffect, useRef } from "react";

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
  {
    id: 6,
    name: "Arjun Nair",
    role: "Healthcare Professional",
    review: "I've seen remarkable improvements in my patients who use these products. The transparency in ingredients and sourcing gives me complete confidence.",
    rating: 5,
    avatar: "AN",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#6abf69]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
         
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full bg-[#f0f7eb] py-16 px-6 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Header */}
          <div ref={headerRef} className="reveal text-center mb-12">
            <div className="flex justify-center mb-3">
              <div className="flex items-center gap-2">
               
              </div>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What Our Customers Say
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              Real experiences from people who have embraced the natural way to wellness.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="reveal bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md hover:border-[#6abf69]/30 transition-shadow duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[#6abf69]/30 text-5xl font-serif leading-none select-none">"</div>
                <p className="text-gray-600 text-sm leading-relaxed -mt-4">{t.review}</p>
                <StarRating rating={t.rating} />
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6abf69] to-[#2d5a27] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}