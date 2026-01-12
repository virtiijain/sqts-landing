import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have a question or want to work with us? Fill out the form below and
          we'll get back to you!
        </p>

        {submitted && (
          <div className="mb-6 text-green-600 font-semibold">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-8 py-4 cursor-pointer bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            <FaPaperPlane /> Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
