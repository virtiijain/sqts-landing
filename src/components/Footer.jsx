import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <h3 className="text-3xl font-bold mb-4">Spark Que Tech Solutions</h3>
        <p className="text-gray-400 leading-relaxed">
          Our wish is to accomplish your wish. We provide IT services, staffing,
          and digital solutions to help businesses scale and succeed in the
          digital world.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-3">
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            About
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Services
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Why Choose Us
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Our Services</h4>
        <ul className="space-y-3">
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Web Development
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Digital Marketing & SEO
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Data Analytics & CRM
          </li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300">
            IT Staff Augmentation
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Follow & Contact</h4>
        <p className="text-gray-400 mb-4">
          Stay connected with us on social media:
        </p>
        <div className="flex space-x-4 text-white text-xl">
          <a href="#" className="hover:text-blue-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12"></div>

    <div className="text-center text-gray-500 mt-6">
      &copy; {new Date().getFullYear()} Spark Que Tech Solutions. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
