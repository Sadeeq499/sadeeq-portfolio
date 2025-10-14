import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <Link
          href="/"
            className="font-pacifico text-2xl text-white hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-[#FF014F]">M</span>uhammad{" "}
            <span className="text-[#FF014F]">S</span>adeeq
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link
            href="/"
            className="text-[#FF014F] font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/resume"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Resume
          </Link>
          <Link
            href="/skills"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <button className="bg-[#FF014F] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#e6003a] hover:-translate-y-0.5 transition-all duration-300 font-inter">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
