import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Identity, <br className="hidden sm:block" />
            Vision and Values
          </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-blue-700 text-xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Who We Are
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are a dynamic team providing IT services, staffing solutions,
                and digital solutions to help businesses grow.
              </p>
            </div>
            <div className="hidden md:block w-px bg-gray-200 mx-auto"></div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-blue-700 text-xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  What We Do
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                IT Services | Staffing | Digital Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
