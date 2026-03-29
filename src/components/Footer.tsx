"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Herbal Oils", href: "/products/oils" },
    { label: "Ayurvedic Tablets", href: "/products/tablets" },
    { label: "Skin Care", href: "/products/skincare" },
    { label: "Hair Care", href: "/products/haircare" },
    { label: "Immunity Boosters", href: "/products/immunity" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Return Policy", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const socials = [
  { label: "Instagram", href: "#", icon: <FaInstagram size={14} /> },
  { label: "Facebook", href: "#", icon: <FaFacebookF size={14} /> },
  { label: "Twitter", href: "#", icon: <FaXTwitter size={14} /> },
  { label: "YouTube", href: "#", icon: <FaYoutube size={14} /> },
];

const bottomLinks = ["Privacy Policy", "Terms of Use"];

export default function Footer() {
  return (
    <footer className="relative bg-[#1a3526] text-white font-sans overflow-hidden">

      {/* ── Background image ── */}
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

     
      

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 sm:gap-10 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 pb-4 border-b border-white/10 lg:border-b-0 lg:pb-0">
            <div className="mb-3">
              <Image
                src="/logo.png"
                alt="Urav Ayurveda"
                width={90}
                height={44}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-[12.5px] leading-[1.7] text-[#a8c5b0] mb-4 max-w-[280px]">
              Ancient wisdom, modern wellness. We craft pure Ayurvedic products rooted in nature for a healthier you.
            </p>
            <div className="flex gap-2">
              {socials.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#a8c5b0] hover:text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-[13px] font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[12.5px] text-[#a8c5b0] hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className="text-[13px] font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[12.5px] text-[#a8c5b0] hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="text-[13px] font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Support
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[12.5px] text-[#a8c5b0] hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-1">
            <h4 className="text-[13px] font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2.5 mb-5">
              <div className="flex items-start gap-2 text-[#a8c5b0] text-[12px]">
                <MapPin size={13} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
                <span>12 Herbal Lane, New Delhi – 110001</span>
              </div>
              <div className="flex items-center gap-2 text-[#a8c5b0] text-[12px]">
                <Phone size={13} strokeWidth={1.5} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-[#a8c5b0] text-[12px]">
                <Mail size={13} strokeWidth={1.5} className="flex-shrink-0" />
                <span>hello@uravayurveda.com</span>
              </div>
            </div>

            <p className="text-[10px] font-semibold text-white uppercase tracking-widest mb-2">
              Newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/15 rounded-l-lg px-2 py-2 text-[11px] placeholder-white/30 outline-none focus:border-white/40 transition-colors min-w-0"
              />
              <button className="bg-white transition-colors px-2.5 py-2 rounded-r-lg text-green-800 text-[11px] font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11.5px] text-[#6a9a78]" suppressHydrationWarning>
            © {new Date().getFullYear()} Urav Ayurveda. All rights reserved.
          </p>
          <div className="flex gap-4">
            {bottomLinks.map((item) => (
              <Link key={item} href="#" className="text-[11.5px] text-[#a8c5b0] hover:text-white transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}