"use client";

import { useScrollReveal } from "./useScrollReveal";

const brands = [
  {
    name: "Microsoft",
    logo: "/images/brands/microsoft.svg",
  },
  {
    name: "Google",
    logo: "/images/brands/google.svg",
  },
  {
    name: "Zoho",
    logo: "/images/brands/zoho.svg",
  },
  {
    name: "Adobe",
    logo: "/images/brands/adobe.svg",
  },
  {
    name: "Tally",
    logo: "/images/brands/tally.jpg",
  },
  {
    name: "Quick Heal",
    logo: "/images/brands/quickheal.jpg",
  },
  {
    name: "SonicWall",
    logo: "/images/brands/sonicwall.jpg",
  },
];

export default function Brands() {
  const allBrands = [...brands, ...brands];
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-[#f8fbff]">
      <div ref={ref} className="w-[90%] max-w-[1200px] mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold text-navy mb-3">
            Brands We Deal With
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We partner with leading <strong>software, SaaS, and digital
            service</strong> brands to deliver the best solutions for your
            business.
          </p>
          <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
        </div>

        {/* Scrolling marquee */}
        <div className="brand-marquee overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {allBrands.map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                className="flex-shrink-0 w-[180px] mx-3 bg-white rounded-xl p-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all"
              >
                <div className="w-full h-[100px] flex items-center justify-center mb-2">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-gray-600 text-sm">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
