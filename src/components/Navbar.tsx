"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, User, ChevronDown, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Animated underline styles injected once */}
      <style>{`
        .nav-link-animate {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .nav-link-animate::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: #4a7c59;
          transition: width 0.28s ease;
        }
        .nav-link-animate:hover::after {
          width: 100%;
        }
        .nav-link-active::after {
          width: 0% !important;
        }
      `}</style>

      {/* Page-level wrapper — transparent + absolute so it overlays the hero */}
      <div className="w-full px-3 sm:px-4 md:px-6 pt-4.5 pb-2.5 bg-transparent absolute top-0 left-0 z-50">

          {/* ── DESKTOP (lg+) ── */}
          <div className="hidden lg:flex items-center justify-between h-[52px]">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 -ml-1 px-4 py-1.5">
              <Image
                src="/logo.png"
                alt="Urav Ayurveda"
                width={120}
                height={76}
                className="object-contain"
              />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) =>
                (link as any).dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="nav-link-animate flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium text-white hover:text-[#8dc63f] transition-colors duration-150"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`text-white mt-px transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 w-44 bg-white py-2 z-50 rounded-2xl shadow-[0_8px_32px_rgba(74,124,89,0.15)] border border-[#e8f0ea]">
                        {(link as any).dropdown.map((item: any) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2.5 text-[13px] font-medium text-[#3a3a3a] hover:text-[#4a7c59] hover:bg-[#f0f7f2] transition-colors duration-100"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`nav-link-animate ${activeLink === link.label ? "nav-link-active" : ""} px-3 py-1.5 rounded-lg text-[13.5px] font-medium transition-all duration-150 ${
                      activeLink === link.label
                        ? "text-[#8dc63f] bg-white/10 shadow-sm"
                        : "text-white hover:text-[#8dc63f]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Action icons */}
            <div className="flex items-center gap-0.5">
              <button className="p-2.5 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all duration-150">
                <Heart size={19} strokeWidth={1.5} />
              </button>
              
              <button className="p-2.5 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all duration-150">
                <User size={19} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* ── TABLET (md) ── */}
          <div className="hidden md:flex lg:hidden items-center justify-between h-[48px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 -ml-4 px-3 py-1 rounded-[14px]">
              <Image src="/logo.png" alt="Urav Ayurveda" width={100} height={60} className="object-contain" />
            </Link>

            {/* Condensed nav */}
            <nav className="flex items-center gap-0">
              {navLinks.map((link) =>
                (link as any).dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="nav-link-animate flex items-center gap-0.5 px-2 py-1.5 text-[12px] font-medium text-white hover:text-[#8dc63f] transition-colors duration-150"
                    >
                      {link.label}
                      <ChevronDown size={11} className={`mt-px transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 w-40 bg-white py-2 z-50 rounded-2xl shadow-[0_8px_32px_rgba(74,124,89,0.15)] border border-[#e8f0ea]">
                        {(link as any).dropdown.map((item: any) => (
                          <Link key={item.label} href={item.href}
                            className="block px-4 py-2.5 text-[12px] font-medium text-[#3a3a3a] hover:text-[#4a7c59] hover:bg-[#f0f7f2] transition-colors"
                            onClick={() => setDropdownOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.label} href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`nav-link-animate ${activeLink === link.label ? "nav-link-active" : ""} px-2 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-150 ${
                      activeLink === link.label
                        ? "text-[#8dc63f] bg-white/10 shadow-sm"
                        : "text-white hover:text-[#8dc63f]"
                    }`}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-0">
              <button className="p-2 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all">
                <Heart size={17} strokeWidth={1.5} />
              </button>
             
              <button className="p-2 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all">
                <User size={17} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* ── MOBILE (sm) ── */}
          <div className="flex md:hidden items-center justify-between h-[46px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 -ml-3 px-3 py-1 rounded-[12px]">
              <Image src="/logo.png" alt="Urav Ayurveda" width={90} height={54} className="object-contain" />
            </Link>

            {/* Mobile icons + hamburger */}
            <div className="flex items-center gap-0.5">
              <button className="p-2 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all">
                <Heart size={18} strokeWidth={1.5} />
              </button>
              <button className="relative p-2 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute top-0.5 right-0.5 w-[15px] h-[15px] bg-[#c97c5d] text-white flex items-center justify-center leading-none rounded-full" style={{ fontSize: "8px", fontWeight: 700 }}>2</span>
              </button>
              <button className="p-2 rounded-full text-white hover:text-[#8dc63f] hover:bg-white/10 transition-all">
                <User size={18} strokeWidth={1.5} />
              </button>
              {/* Staggered hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X size={20} strokeWidth={1.5} className="text-white" />
                ) : (
                  <svg viewBox="0 0 22 16" fill="none" width="22" height="16">
                    <line x1="0" y1="1.5" x2="22" y2="1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="5" y1="8" x2="22" y2="8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="10" y1="14.5" x2="22" y2="14.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile dropdown (separate pill below) ── */}
        <div
          className={`md:hidden max-w-6xl mx-auto overflow-hidden transition-all duration-300 ease-in-out absolute top-[62px] left-3 right-3 z-50 ${
            mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-4 py-3 space-y-0.5 rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.08)]">
            {navLinks.map((link) =>
              (link as any).dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-[14px] font-medium text-[#2a2a2a] hover:text-[#4a7c59] hover:bg-[#f0f7f2] transition-colors rounded-xl"
                  >
                    {link.label}
                    <ChevronDown size={13} className={`text-[#4a7c59] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="ml-4 border-l-2 border-[#e8f5ec] pl-3 mt-0.5 space-y-0.5">
                      {(link as any).dropdown.map((item: any) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-3 py-2.5 text-[13px] font-medium text-[#555] hover:text-[#4a7c59] hover:bg-[#f0f7f2] transition-colors rounded-[10px]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-3 text-[14px] font-medium transition-colors rounded-xl ${
                    activeLink === link.label
                      ? "text-[#4a7c59] bg-[#f0f7f2] underline underline-offset-4 decoration-[#4a7c59]"
                      : "text-[#2a2a2a] hover:text-[#4a7c59] hover:bg-[#f0f7f2]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
    </>
  );
}