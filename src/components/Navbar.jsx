import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          SQTS
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-gray-200 cursor-pointer transition"
            >
              {link.label}
            </li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-blue-600 text-white flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-gray-200 cursor-pointer"
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
