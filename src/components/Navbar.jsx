import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const links = ["Home", "About", "Services", "Why Choose Us", "Contact"];

  return (
    <nav className=" bg-blue-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">SQTS</div>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link} className="hover:text-gray-200 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {open && (
        <ul className="md:hidden bg-blue-600 text-white flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link} className="hover:text-gray-200 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
