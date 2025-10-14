import React from "react";

function Skills() {
  const skills = [
    {
      name: "Javascript",
      logo: (
        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-lg">JS</span>
        </div>
      ),
    },
    {
      name: "Typescript",
      logo: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">TS</span>
        </div>
      ),
    },
    {
      name: "Python",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="#3776ab"
            />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              fill="#ffd43b"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "PHP",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">php</span>
          </div>
        </div>
      ),
    },
    {
      name: "Next Js",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xs">NEXT</span>
          </div>
        </div>
      ),
    },
    {
      name: "React",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="2" />
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
          </svg>
        </div>
      ),
    },
    {
      name: "React Native",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="2" />
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
            <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Angular",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
        </div>
      ),
    },
    {
      name: "Laravel",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
        </div>
      ),
    },
    {
      name: "Figma",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 via-blue-400 to-purple-400 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">F</span>
          </div>
        </div>
      ),
    },
    {
      name: "Django",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-green-500 font-bold text-sm">django</span>
        </div>
      ),
    },
    {
      name: "Tailwind CSS",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8 text-cyan-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        </div>
      ),
    },
    {
      name: "Bootstrap",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
        </div>
      ),
    },
    {
      name: "jQuery",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">j</span>
          </div>
        </div>
      ),
    },
    {
      name: "Wordpress",
      logo: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">
            My <span className="text-[#FF014F]">Talent</span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Professional Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-[#1E1E1E] rounded-lg p-6 text-center hover:bg-[#2A2A2A] transition-all duration-300 group border border-gray-800 hover:border-[#FF014F]/30 shadow-lg hover:shadow-[#FF014F]/10 hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Skill Logo */}
              <div className="flex justify-center mb-4">{skill.logo}</div>

              {/* Skill Name */}
              <h3 className="text-white text-sm font-medium group-hover:text-[#FF014F] transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
