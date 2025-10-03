"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example POST request (replace with your API endpoint)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We’d love to hear from you. Fill out the form below or reach out using
          the details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-500 text-2xl" />
              <span className="text-gray-700">
                123 Main Street, Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-500 text-2xl" />
              <span className="text-gray-700">+880 1234-567890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-500 text-2xl" />
              <span className="text-gray-700">support@wevliox.com</span>
            </div>

            <iframe
              className="w-full h-64 rounded-lg shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.1383327208093!2d90.41251871534007!3d23.81033138456407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77abcc084f5%3A0x6c4d2be9f61e6f68!2sDhaka!5e0!3m2!1sen!2sbd!4v1699000000000"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-4"
          >
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message here..."
                required
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
