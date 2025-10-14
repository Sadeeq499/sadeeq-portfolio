import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaGlobe,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      category: "Web App",
      icon: FaGlobe,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      live: "#",
      category: "Web App",
      icon: FaCode,
    },
    {
      title: "Fitness Tracker Mobile App",
      description:
        "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "#",
      category: "Mobile App",
      icon: FaMobile,
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "#",
      live: "#",
      category: "Web App",
      icon: FaGlobe,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      github: "#",
      live: "#",
      category: "Web App",
      icon: FaCode,
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics platform for social media management with insights, scheduling, and performance tracking across platforms.",
      image: "/api/placeholder/400/300",
      technologies: ["Angular", "D3.js", "Express.js", "MySQL"],
      github: "#",
      live: "#",
      category: "Web App",
      icon: FaGlobe,
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">
            My <span className="text-[#FF014F]">Portfolio</span>
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Featured <span className="text-[#FF014F]">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="relative bg-[#1E1E1E] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-500 group border border-gray-800 hover:border-[#FF014F]/30 shadow-lg hover:shadow-[#FF014F]/10 hover:shadow-xl transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF014F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-[#FF014F] opacity-50" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF014F] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF014F] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-800 hover:bg-[#FF014F] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 bg-[#FF014F] hover:bg-[#e6003a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FF014F] to-[#e6003a] group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
