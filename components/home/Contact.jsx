"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const achievements = [
    "5+ Years of Experience",
    "Professional Web Designer",
    "Mobile Apps Design",
    "Technical Mentor",
    "Fullstack Developer",
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-gray-400 text-lg mb-4">Get In Touch</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Let's Talk For your{" "}
                <span className="text-[#FF014F]">Next Projects</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Discuss a project or just want to say hi? Connect with me via
              email or through a phone call.
            </p>

            {/* Achievements List */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF014F] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#1E1E1E] rounded-xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Tery Humfy D. Tawez"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors duration-300"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="teryy@humfy.org"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors duration-300"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+821 (123) 45678"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF014F] transition-colors duration-300 resize-none"
                  required
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-[#FF014F] hover:bg-[#e6003a] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message
                <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
