import React from "react";
import Image from "next/image";
import { BadgeCheck, Trophy, Droplet, UserCheck } from "lucide-react";

const stats = [
  {
    icon: <BadgeCheck size={36} strokeWidth={1.5} className="text-[#6b8f3e]" />,
    count: "80+",
    label: "Consultation",
  },
  {
    icon: <Trophy size={36} strokeWidth={1.5} className="text-[#6b8f3e]" />,
    count: "20+",
    label: "Treatments",
  },
  {
    icon: <Droplet size={36} strokeWidth={1.5} className="text-[#6b8f3e]" />,
    count: "120+",
    label: "Products",
  },
  {
    icon: <UserCheck size={36} strokeWidth={1.5} className="text-[#6b8f3e]" />,
    count: "100+",
    label: "Customers Served",
  },
];

export default function StatsSection() {
  return (
    <div className="w-full bg-white relative overflow-hidden">

      {/* Branch — Top Right */}
      <div className="pointer-events-none select-none absolute top-0 right-0 z-0 w-32 md:w-40">
        <Image
          src="/green_leaves.png"
          alt=""
          width={180}
          height={200}
          className="w-full h-auto object-contain mix-blend-multiply rotate-[15deg] translate-x-4 -translate-y-3"
        />
      </div>

      {/* Branch — Bottom Left */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 z-0 w-36 md:w-44">
        <Image
          src="/green_leaves.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto object-contain mix-blend-multiply scale-x-[-1] scale-y-[-1]"
        />
      </div>

      {/* Stats — 2x2 on mobile, single row on md+ */}
      <div className="relative z-10 py-10 px-4">

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3">
              <div className="w-[66px] h-[66px] rounded-full bg-[#f3f7ee] flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
              <span className="text-[24px] font-bold text-[#2e2e2e] leading-tight">
                {stat.count}
              </span>
              <span className="text-[12px] text-[#888888] font-normal text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: single row with dividers */}
        <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto px-8">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-center gap-3 px-12">
                <div className="w-[76px] h-[76px] rounded-full bg-[#f3f7ee] flex items-center justify-center shadow-sm">
                  {stat.icon}
                </div>
                <span className="text-[28px] font-bold text-[#2e2e2e] leading-tight">
                  {stat.count}
                </span>
                <span className="text-[13px] text-[#888888] font-normal">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div
                  className="self-stretch"
                  style={{ borderLeft: "1.5px dashed #c5d9a8", margin: "16px 0" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}