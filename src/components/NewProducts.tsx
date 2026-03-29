"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isSale?: boolean;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Herbal Cream",
    price: 280,
    rating: 4,
    image: "/products.png",
  },
  {
    id: 2,
    name: "CBD Chocklate",
    price: 180,
    originalPrice: 200,
    rating: 5,
    isSale: true,
    image: "/products.png",
  },
  {
    id: 3,
    name: "CBD Rollon Gel",
    price: 90,
    originalPrice: 200,
    rating: 4,
    isSale: true,
    image: "/products.png",
  },
  {
    id: 4,
    name: "CBD Cookies",
    price: 150,
    originalPrice: 200,
    rating: 4,
    isSale: true,
    image: "/products.png",
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

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div
      className="scroll-reveal relative bg-white rounded-2xl p-5 flex flex-col items-center border border-gray-100 hover:border-[#6abf69] hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Product Image */}
      <div className="w-full h-52 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-[#f3f7f0] group-hover:bg-[#eaf4e8] transition-colors duration-300">
        {product.image ? (
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="w-32 h-44 rounded-lg flex items-center justify-center text-[#6abf69] text-sm font-medium border-2 border-dashed border-[#6abf69]/40">
            No Image
          </div>
        )}
      </div>

      {/* Rating */}
      <StarRating rating={product.rating} />

      {/* Name */}
      <h3 className="mt-2 text-[15px] font-semibold text-gray-800 text-center group-hover:text-[#4a9e49] transition-colors duration-200">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        <span className="text-[#4a9e49] text-sm font-semibold">
          Rs. {product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-gray-400 text-sm line-through">
            Rs. {product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Add to cart */}
      <button className="mt-3 w-full py-2 rounded-xl bg-[#6abf69] text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
}

export default function NewProducts() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="relative bg-white py-16 px-4 overflow-hidden">
        {/* Subtle green top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6abf69] to-transparent" />

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="scroll-reveal font-['Playfair_Display',serif] text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
            Our New Products
          </h2>

          <div className="scroll-reveal mx-auto mt-1 mb-3 w-10 h-0.5 rounded-full bg-[#6abf69]" style={{ transitionDelay: "100ms" }} />

          <p className="scroll-reveal text-sm text-gray-500 max-w-sm mx-auto leading-relaxed" style={{ transitionDelay: "200ms" }}>
            Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Libero
            volutpat sed cras ornare arcu dui suspendisse vivamus.
          </p>
        </div>

        {/* Product Grid */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}