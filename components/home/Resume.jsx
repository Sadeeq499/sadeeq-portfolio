"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Resume() {
  const [expandedEducation, setExpandedEducation] = useState([0]);
  const [expandedExperience, setExpandedExperience] = useState([0]);

  const toggleEducation = (index) => {
    setExpandedEducation((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleExperience = (index) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const educationData = [
    {
      institution: "Islamia College University Peshawar",
      degree: "Bachelor of Science - Software Engineering",
      period: "2019 - 2023",
      description:
        "Comprehensive study of software engineering principles, algorithms, data structures, software development methodologies, and computer science fundamentals.",
    },
    {
      institution: "Muslim Model School and College",
      degree: "Higher Secondary Education - Computer Science",
      period: "2017 - 2019",
      description:
        "Completed higher secondary education with focus on computer science fundamentals, mathematics, and programming basics.",
    },
  ];

  const experienceData = [
    {
      company: "Nartec-Solutions",
      position: "Full Stack Engineer",
      period: "Nov 2023 - PRESENT",
      description:
        "Developed comprehensive software solutions including Inventory Control & Tracking systems, Traceability System Solutions for supply chain management, Warehouse Management Solutions, Fixed Assets/Asset Tracking & Tagging systems, Barcode/Labeling/POS & scanning systems, Queue Management Systems, and Field Service Management applications. Provided consulting, deployment, and support for technology systems.",
    },
    {
      company: "ExtremSoft",
      position: "Full Stack Developer",
      period: "Dec 2020 - Oct 2023",
      description:
        "Developed full-stack applications for multiple businesses, SaaS applications, and management systems. Focused on creating scalable and efficient solutions for various business needs.",
    },
    {
      company: "Tech Emulsion",
      position: "Frontend Developer",
      period: "Feb 2020 - Sep 2020",
      description:
        "Created web applications that maintain high standards of code quality and smart application design to ensure application performance, uptime, and scalability.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">My Resume</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Real <span className="text-[#FF014F]">Problem Solutions</span>{" "}
            Experience
          </h2>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>

            {/* Timeline Line */}
            <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-700"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <button
                      onClick={() => toggleEducation(index)}
                      className="w-8 h-8 bg-black border-2 border-[#FF014F] rounded-full flex items-center justify-center hover:bg-[#FF014F] transition-colors duration-300"
                    >
                      {expandedEducation.includes(index) ? (
                        <FaMinus className="w-3 h-3 text-white" />
                      ) : (
                        <FaPlus className="w-3 h-3 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-400 italic mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>

                    {expandedEducation.includes(index) && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-8">Experience</h3>

            {/* Timeline Line */}
            <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-700"></div>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <button
                      onClick={() => toggleExperience(index)}
                      className="w-8 h-8 bg-black border-2 border-[#FF014F] rounded-full flex items-center justify-center hover:bg-[#FF014F] transition-colors duration-300"
                    >
                      {expandedExperience.includes(index) ? (
                        <FaMinus className="w-3 h-3 text-white" />
                      ) : (
                        <FaPlus className="w-3 h-3 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 italic mb-2">{exp.position}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      {exp.period.includes("PRESENT") ? (
                        <>
                          {exp.period.split(" - ")[0]} -{" "}
                          <span className="text-[#FF014F]">PRESENT</span>
                        </>
                      ) : (
                        exp.period
                      )}
                    </p>

                    {expandedExperience.includes(index) && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
