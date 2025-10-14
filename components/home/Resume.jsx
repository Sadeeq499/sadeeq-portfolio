"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Resume() {
  const [expandedEducation, setExpandedEducation] = useState([0]);
  const [expandedExperience, setExpandedExperience] = useState([0]);

  const toggleEducation = (index) => {
    setExpandedEducation(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleExperience = (index) => {
    setExpandedExperience(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const educationData = [
    {
      institution: "Moringa School",
      degree: "Software Development",
      period: "2021 - 2021",
      description: "Diligently attended software development courses, advancing skills and knowledge. With this being a continuous improvement, got to learn to contribute effectively in software development roles."
    },
    {
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      degree: "Computer Science",
      period: "2018 - 2022",
      description: "Comprehensive study of computer science fundamentals, algorithms, data structures, and software engineering principles."
    }
  ];

  const experienceData = [
    {
      company: "Weza Prosoft Limited",
      position: "Software Engineer",
      period: "Oct 2020 - PRESENT",
      description: "Create of web applications that maintains high standards of code quality and smart application design to ensure application performance, uptime, and scale."
    },
    {
      company: "Paya Ventures Ltd (Paya Finance)",
      position: "Full Stack Developer",
      period: "Jan 2019 - Sep 2020",
      description: "Developed and maintained financial applications with focus on security and performance optimization."
    },
    {
      company: "Moringa School",
      position: "Technical Mentor",
      period: "Jun 2021 - Dec 2021",
      description: "Mentored students in software development, conducted code reviews, and facilitated learning sessions."
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">My Resume</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Real <span className="text-[#FF014F]">Problem Solutions</span> Experience
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
                      {exp.period.includes('PRESENT') ? (
                        <>
                          {exp.period.split(' - ')[0]} - <span className="text-[#FF014F]">PRESENT</span>
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