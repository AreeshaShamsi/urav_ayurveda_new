import React from "react";
import Image from "next/image";
import { BadgeCheck, Trophy,  Droplet, UserCheck } from "lucide-react";

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

      {/* 🌿 BRANCH — Top Right Corner */}
      <div className="pointer-events-none select-none absolute top-0 right-0 z-0 w-32 md:w-40">
        <Image
          src="/green_leaves.png"
          alt=""
          width={180}
          height={200}
          className="w-full h-auto object-contain mix-blend-multiply rotate-[15deg] translate-x-4 -translate-y-3"
        />
      </div>

      {/* 🌿 BRANCH — Bottom Left Corner */}
      <div
        className="pointer-events-none select-none absolute bottom-0 left-0 z-0 w-36 md:w-44"
        style={{ transformOrigin: "bottom left" }}
      >
        <Image
          src="/green_leaves.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto object-contain mix-blend-multiply scale-x-[-1] scale-y-[-1]"
        />
      </div>

      {/* Stats row */}
      <div className="relative z-10 flex items-center justify-center py-10">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex flex-col items-center gap-3 px-12">
              {/* Circle icon */}
              <div className="w-[76px] h-[76px] rounded-full bg-[#f3f7ee] flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>

              {/* Count */}
              <span className="text-[28px] font-bold text-[#2e2e2e] leading-tight">
                {stat.count}
              </span>

              {/* Label */}
              <span className="text-[13px] text-[#888888] font-normal">
                {stat.label}
              </span>
            </div>

            {/* Dashed vertical divider */}
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
  );
}