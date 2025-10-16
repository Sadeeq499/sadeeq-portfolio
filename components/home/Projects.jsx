import React from "react";
import { FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Sabi Unique Collection",
      description:
        "Luxury fashion e-commerce store offering premium unstitched and ready-to-wear clothing, curated collections, and exclusive accessories for modern style.",
      image: "/api/placeholder/400/300",
      live: "https://sabiuniquecollection.com/",
      category: "E-Commerce",
      icon: FaGlobe,
    },
    {
      title: "Vacanzy",
      description:
        "End-to-end business services platform offering company formation, trade licensing, visa & immigration support, compliance, and digital dashboard tools.",
      image: "/api/placeholder/400/300",
      live: "https://vacanzy.co/",
      category: "Business Services",
      icon: FaCode,
    },
    {
      title: "GSTSA1",
      description:
        "Saudi Arabia technology & compliance company delivering barcode, RFID, inventory management, product tracking, and supply chain authentication solutions. :contentReference[oaicite:0]{index=0}",
      image: "/api/placeholder/400/300",
      live: "https://gstsa1.org/",
      category: "Tax Services",
      icon: FaGlobe,
    },
    {
      title: "Saddy Voices",
      description:
        "Voiceover & audio production agency working with international clients, providing studio recording, dubbing, narration, and multilingual voice talent services.",
      image: "/api/placeholder/400/300",
      live: "https://www.saddyvoices.com/",
      category: "Media Platform",
      icon: FaGlobe,
    },
    {
      title: "Cyber Nexus LLC",
      description:
        "IT & cybersecurity firm offering consulting, infrastructure security, managed services, threat assessments, and enterprise protection solutions.",
      image: "/api/placeholder/400/300",
      live: "https://www.cybernexusllc.us/",
      category: "Cybersecurity",
      icon: FaCode,
    },
    {
      title: "SJS System",
      description:
        "Saudi–Japanese business council portal facilitating trade, investment, and strategic cooperation between Saudi Arabia and Japan.",
      image: "/api/placeholder/400/300",
      live: "https://sjs.gstsa1.org/",
      category: "Education",
      icon: FaCode,
    },
    {
      title: "FWatch",
      description:
        "FireWatch is a smart platform for tracking and managing fire safety equipment. It ensures compliance and readiness through real-time monitoring and automated inspections.",
      image: "/api/placeholder/400/300",
      live: "https://fwatch.gstsa1.org/",
      category: "Finance",
      icon: FaGlobe,
    },
    {
      title: "Buy Barcode UPC",
      description:
        "Platform for GTIN/UPC barcode issuance, barcode generation, product labeling, and inventory & identification support for businesses.",
      image: "/api/placeholder/400/300",
      live: "https://buybarcodeupc.com/",
      category: "Business Tools",
      icon: FaCode,
    },
    {
      title: "SUE Realty",
      description:
        "Dubai real estate brokerage and investment firm specializing in luxury property listings, off-plan developments, and property advisory services.",
      image: "/api/placeholder/400/300",
      live: "https://suerealty.com/",
      category: "Real Estate",
      icon: FaGlobe,
    },
    {
      title: "Nartec Solutions",
      description:
        "Tech solutions company delivering software development, automation, IoT, and business process optimization tools.",
      image: "/api/placeholder/400/300",
      live: "https://nartec-solutions.com/",
      category: "Tech Solutions",
      icon: FaCode,
    },
    {
      title: "GRoute Admin",
      description:
        "This Transportation & Logistics System tracks inventory, delivery routes, and sales orders in real time. It offers performance analytics and master data to optimize operations and ensure timely deliveries.",
      image: "/api/placeholder/400/300",
      live: "https://admin.groute.online/",
      category: "Logistics",
      icon: FaGlobe,
    },
    {
      title: "Quranic World",
      description:
        "Quranic World is an online academy offering live Quran and Arabic courses for all levels. It provides flexible scheduling, expert teachers, and interactive learning tools.",
      image: "/api/placeholder/400/300",
      live: "https://quranic-world.vercel.app/",
      category: "Education",
      icon: FaGlobe,
    },
    {
      title: "Food App (React Native)",
      description:
        "Mobile food delivery app built with React Native, featuring restaurant listings, menu browsing, order checkout, and delivery tracking.",
      image: "/api/placeholder/400/300",
      live: "https://github.com/Sadeeq499/food-app-react-native",
      category: "Mobile App",
      icon: FaMobile,
    },
    {
      title: "GPOS Dashboard",
      description:
        "Retail & point-of-sale analytics dashboard with inventory management, sales tracking, reporting metrics, and business insights.",
      image: "/api/placeholder/400/300",
      live: "https://gposv2.gtrack.online/dashboard",
      category: "POS System",
      icon: FaCode,
    },
    {
      title: "Liaison Consultancy",
      description:
        "Liaison Consultancy Services digitizes building permissions and development rights under HMDA. It streamlines applications through platforms like TG-bPASS and the TDR portal",
      image: "/api/placeholder/400/300",
      live: "https://liaison-consultancy-services.vercel.app/",
      category: "Consulting",
      icon: FaGlobe,
    },
    {
      title: "Amex Financial",
      description: "---",
      image: "/api/placeholder/400/300",
      live: "https://amex.fatsme.online/",
      category: "Fintech",
      icon: FaCode,
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

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#FF014F] hover:bg-[#e6003a] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      View Project
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
