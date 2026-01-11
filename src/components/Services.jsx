import React from "react";
import { FaLaptopCode, FaChartLine, FaDatabase, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="w-6 h-6 text-blue-600" />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to your business. Frontend, backend, and full-stack solutions included.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    title: "Digital Marketing & SEO",
    description:
      "Boost your online presence with expert SEO strategies, paid campaigns, and social media marketing to drive traffic and leads.",
  },
  {
    icon: <FaDatabase className="w-6 h-6 text-blue-600" />,
    title: "Data Analytics & CRM",
    description:
      "Unlock business insights and improve customer relationships with data-driven solutions, dashboards, and CRM integrations.",
  },
  {
    icon: <FaUsers className="w-6 h-6 text-blue-600" />,
    title: "IT Staff Augmentation",
    description:
      "Expand your team quickly with skilled IT professionals to meet deadlines, scale projects, and maintain quality standards.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-sm text-blue-600 font-semibold mb-1">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Services We Offer
            </h2>
          </div>

          <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium cursor-pointer transition">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <span className="absolute left-0 top-6 w-1 h-10 bg-blue-600 rounded-r-full"></span>

              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 flex items-center justify-center">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-4 text-sm cursor-pointer font-medium text-blue-600 hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
