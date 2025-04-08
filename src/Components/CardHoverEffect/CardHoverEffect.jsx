import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Design",
    image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    description:
      "Discover creative strategies and UI/UX trends to elevate your design game.",
  },
  {
    title: "Code",
    image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
    description:
      "Level up your coding skills with best practices, tools, and clean code tips.",
  },
  {
    title: "Launch",
    image: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
    description:
      "Get ready to launch your next big project with confidence and clarity.",
  },
];

export default function CardHoverEffect() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative w-full h-72 cursor-pointer group"
          >
            {/* Top Layer (face1) */}
            <div className="absolute w-full h-full bg-gray-800 rounded-2xl shadow-xl transition-transform duration-700 ease-in-out transform group-hover:translate-y-28 z-10 flex items-center justify-center">
              <div className="text-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="mx-auto w-16 md:w-20 drop-shadow-md"
                />
                <h3 className="text-white mt-4 text-lg md:text-xl font-semibold tracking-wide">
                  {card.title}
                </h3>
              </div>
            </div>

            {/* Bottom Layer (face2) */}
            <div className="absolute w-full h-full bg-white rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out transform group-hover:-translate-y-28 z-0 p-6">
              <div className="flex flex-col h-full">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal mb-4">
                  {card.description}
                </p>
                <div className="mt-auto mb-12">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 border border-gray-800 px-3 py-1.5 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 whitespace-nowrap"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
