import Image from "next/image";

const concerns = [
  // Row 1
  { label: "Pain Relief",               icon: "/Pain_Relief_2_1.webp" },
  { label: "Sleep Support",             icon: "/Sleep_Support_2_1.webp" },
  { label: "Detox & Gut Health",        icon: "/Detox_Gut_Health_2_1.webp" },
  { label: "Immunity & General Wellness", icon: "/Immunity_General_Wellness_2_1.webp" },
  { label: "Respiratory Health",        icon: "/Respiratory_Health_2_1.webp" },
  { label: "Stress Management",         icon: "/Stress_Management_2_1.webp" },
  { label: "Diabetes Care",             icon: "/Diabetes_Care_2_1.webp" },
  { label: "Liver Health",              icon: "/Liver_Health_2_1.webp" },
  { label: "Joint & Muscle Care",       icon: "/Joint_Muscle_Care_2_1.webp" },
  { label: "Child Care & Teen Health",  icon: "/Child_Care_Teen_Health_2_1.webp" },
  // Row 2
  { label: "Skin Care",                 icon: "/Skin_Care_2_1.webp" },
  { label: "Hair Care",                 icon: "/Hair_Care_2_1.webp" },
  { label: "Women's Health",            icon: "/Women's_Health_2_1.webp" },
  { label: "Men's Health",              icon: "/Men's_Health_2_1.webp" },
  { label: "Eye Care",                  icon: "/Eye_Care_2_1.webp" },
  { label: "Brain Health",              icon: "/Brain_Health_2_1.webp" },
  { label: "Heart Health",              icon: "/Heart_Health_2_1.webp" },
  { label: "Weight Management",         icon: "/Weight_Management_2_1.webp" },
  { label: "Oral Care",                 icon: "/Oral_Care_2_1.webp" },
  { label: "Geriatric Care",            icon: "/Geriatric_Care_2_1.webp" },
];

export default function ShopByConcern() {
  return (
    <section className="w-full bg-[#fafaf7] py-14 px-4 md:px-10">
      {/* Heading */}
      <h2 className="text-center font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-semibold text-[#1e3d1a] mb-12 tracking-wide">
        Shop by Concern
      </h2>

      {/* Grid — 10 cols on lg, 5 on md, 3 on sm */}
      <div className="mx-auto max-w-7xl grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-y-10 gap-x-4">
        {concerns.map((item) => (
          <button
            key={item.label}
            className="group flex flex-col items-center gap-3 focus:outline-none"
          >
            {/* Circle icon */}
            <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#efefec] transition-all duration-300 group-hover:bg-[#dff0d8] group-hover:shadow-md group-hover:scale-105">
              <Image
                src={item.icon}
                alt={item.label}
                width={52}
                height={52}
                className="object-contain"
              />
            </div>

            {/* Label */}
            <span className="text-center text-[12px] leading-tight text-gray-700 font-medium group-hover:text-[#2d5a27] transition-colors duration-200 max-w-[90px]">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* View All */}
      <div className="mt-12 flex justify-end max-w-7xl mx-auto pr-2">
        <button className="text-sm font-semibold text-[#2d5a27] underline underline-offset-4 hover:text-[#1e3d1a] transition-colors duration-200">
          View All
        </button>
      </div>
    </section>
  );
}