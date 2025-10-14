import React from "react";
import {
  FaGlobe,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaCreditCard,
  FaUserGraduate,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: FaGlobe,
      title: "WEB DEVELOPMENT",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing.",
    },
    {
      icon: FaPalette,
      title: "UI/UX DESIGN",
      description:
        "Create intuitive interfaces and delightful user experiences by blending aesthetics with usability.",
    },
    {
      icon: FaMobileAlt,
      title: "APP DEVELOPMENT",
      description:
        "Modern and mobile-ready application that will help you reach all of your marketing.",
    },
    {
      icon: FaCode,
      title: "API DESIGN / INTEGRATION",
      description:
        "Developing a highly secure, fast and scalable APIs both REST and GraphQL.",
    },
    {
      icon: FaCreditCard,
      title: "PAYMENT INTEGRATION",
      description:
        "Automate the process of payments to allow users pay right on your platform",
    },
    {
      icon: FaUserGraduate,
      title: "MENTORSHIP",
      description:
        "Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">
            I like to make things easy and fun
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            My <span className="text-[#FF014F]">Special Services</span> For your{" "}
            <span className="text-[#FF014F]">Business Development</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative bg-[#1E1E1E] rounded-xl p-8 text-center hover:bg-[#2A2A2A] transition-all duration-500 group border border-gray-800 hover:border-[#FF014F]/30 shadow-2xl hover:shadow-[#FF014F]/10 hover:shadow-2xl transform hover:-translate-y-2"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF014F]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF014F] to-[#e6003a] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#FF014F]/25 group-hover:shadow-[#FF014F]/40">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  {/* Icon Glow */}
                  <div className="absolute inset-0 w-16 h-16 bg-[#FF014F] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Service Title */}
                <h3 className="relative text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-[#FF014F] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FF014F] to-[#e6003a] group-hover:w-16 transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
