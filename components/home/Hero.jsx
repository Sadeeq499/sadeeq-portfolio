"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const jobTitles = [
    "Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Mobile Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const currentJob = jobTitles[currentJobIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentJob.length) {
            setDisplayText(currentJob.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentJob.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Move to next job title
            setIsDeleting(false);
            setCurrentJobIndex(
              (prevIndex) => (prevIndex + 1) % jobTitles.length
            );
          }
        }
      },
      isDeleting ? 100 : 150
    ); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentJobIndex, jobTitles]);

  return (
    <section className="min-h-screen bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              HELLO, MY NAME IS
            </p>

            {/* Name */}
            <h1 className="text-4xl  font-bold leading-tight">
              <span className="text-[#FF014F]">Muhammad</span>{" "}
              <span className="text-white">Sadeeq</span>
            </h1>

            {/* Title with Typewriter Effect */}
            <h2 className="text-3xl lg:text-4xl text-gray-300 font-medium min-h-[3rem] flex items-center">
              {displayText}
              <span className="animate-pulse text-[#FF014F] ml-1">|</span>
            </h2>

            {/* About Me */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              From Pakistan. I have rich experience in development cycle for
              dynamic web projects, app development, and I am also proficient in
              UX/UI design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF014F] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#e6003a] hover:-translate-y-1 transition-all duration-300">
                Download Resume
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                Contact Me
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/sadeeq-profile.jpeg"
                  alt="Muhammad Sadeeq"
                  fill
                  className="object-cover object-top rounded-full border-4 border-[#FF014F] "
                  priority
                />
              </div>

              {/* Pink Accent Shape */}
              <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-[#FF014F] rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
