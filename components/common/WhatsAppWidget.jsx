"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const phoneNumber = "923065799407"; // Pakistan format (92 country code + number without 0)
  const message =
    "Assalam o Alaikum, I need help or I'm interested in your services."; // Default message

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
a
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>

        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
