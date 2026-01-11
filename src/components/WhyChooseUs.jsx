import React from "react";
import { FaRocket, FaDollarSign, FaUsers, FaHandshake } from "react-icons/fa";

const points = [
  {
    icon: <FaRocket className="text-white w-7 h-7" />,
    title: "Startup-Friendly",
    description:
      "We provide solutions that help startups scale fast without breaking the bank.",
    bg: "bg-teal-400",
  },
  {
    icon: <FaDollarSign className="text-white w-7 h-7" />,
    title: "Cost-Effective",
    description:
      "High-quality services at competitive prices to maximize your ROI.",
    bg: "bg-lime-400",
  },
  {
    icon: <FaUsers className="text-white w-7 h-7" />,
    title: "Skilled Team",
    description:
      "Our team is experienced, professional, and ready to bring your vision to life.",
    bg: "bg-yellow-400",
  },
  {
    icon: <FaHandshake className="text-white w-7 h-7" />,
    title: "Client-Focused",
    description:
      "We prioritize your goals and ensure smooth collaboration every step of the way.",
    bg: "bg-amber-400",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Why Choose Us?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {points.map((point) => (
          <div key={point.title} className="flex items-start gap-6">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 ${point.bg}`}
            >
              {point.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
