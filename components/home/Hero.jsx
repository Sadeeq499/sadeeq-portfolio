"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

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
              <Link href="/contact">
                <button className="border border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Sadeeq499"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:muhammadsadeeq11223@gmail.com"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Oyee____SaQi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:border-[#FF014F] hover:text-[#FF014F] transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
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
