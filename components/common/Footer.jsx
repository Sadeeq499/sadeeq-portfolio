"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-pacifico text-2xl text-white mb-2">
              <span className="text-[#FF014F]">M</span>uhammad{" "}
              <span className="text-[#FF014F]">S</span>adeeq
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/resume"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Resume
              </Link>
              <Link
                href="/skills"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#FF014F] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Muhammad Sadeeq. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
