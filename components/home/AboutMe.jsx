import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Me Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="/about-me.jpeg"
                alt="Muhammad Sadeeq - About Me"
                fill
                className="object-cover object-center rounded-lg "
                priority
              />
            </div>
          </div>

          {/* Right Column - About Me Content */}
          <div className="space-y-8">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white">About Me</h2>

            {/* Main Title */}
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-[#FF014F]">Driven</span>, innovative
              Software <span className="text-[#FF014F]">Engineer</span>
            </h3>

            {/* About Paragraph */}
            <p className="text-gray-300 text-lg leading-relaxed">
              More than 5 years Experience in the development of software and
              solutions. A conscientious person who pays attention to details.
              Very passionate about software development, always willing and
              ready to learn new things/concepts. Proven leader with the ability
              to streamline development processes to drive the achievement of
              organisational objectives.
            </p>

            {/* Skills List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#FF014F] rounded-full flex items-center justify-center mt-1">
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
                <p className="text-gray-300">
                  Develop highly interactive Front end / User Interfaces for the
                  web
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#FF014F] rounded-full flex items-center justify-center mt-1">
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
                <p className="text-gray-300">
                  Progressive Web Applications (PWA) in normal and SPA Stacks
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#FF014F] rounded-full flex items-center justify-center mt-1">
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
                <p className="text-gray-300">
                  Integration of third party services such as AWS / Digital
                  Ocean
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#FF014F] rounded-full flex items-center justify-center mt-1">
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
                <p className="text-gray-300">
                  Integration of payment services such as M-Pesa and paypal etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
