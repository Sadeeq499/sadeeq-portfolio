import React from "react";
import Skills from "@/components/home/Skills";

export const metadata = {
  title: "Skills - Muhammad Sadeeq | Professional Technical Skills & Expertise",
  description:
    "Explore Muhammad Sadeeq's comprehensive technical skills including JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, PostgreSQL, Docker, DevOps, authentication, testing, and performance optimization technologies.",
  keywords: [
    "Muhammad Sadeeq Skills",
    "Technical Skills",
    "Programming Skills",
    "JavaScript Skills",
    "TypeScript Skills",
    "React Skills",
    "Node.js Skills",
    "MongoDB Skills",
    "MySQL Skills",
    "PostgreSQL Skills",
    "Docker Skills",
    "DevOps Skills",
    "Authentication Skills",
    "Testing Skills",
    "Performance Optimization",
    "Full Stack Skills",
    "Web Development Skills",
    "Backend Development Skills",
    "Frontend Development Skills",
    "Database Skills",
    "API Development Skills",
    "Mobile Development Skills",
    "React Native Skills",
    "UI/UX Skills",
    "Design Skills",
    "Payment Integration Skills",
    "Maps Integration Skills",
    "File Handling Skills",
    "Security Skills",
    "CI/CD Skills",
  ],
  openGraph: {
    title:
      "Skills - Muhammad Sadeeq | Professional Technical Skills & Expertise",
    description:
      "Explore Muhammad Sadeeq's comprehensive technical skills including JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, PostgreSQL, Docker, DevOps, and more.",
    url: "https://www.sadeeqdev.tech/skills",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Technical Skills & Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Skills - Muhammad Sadeeq | Professional Technical Skills & Expertise",
    description:
      "Explore Muhammad Sadeeq's comprehensive technical skills including JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, PostgreSQL, Docker, DevOps, and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/skills",
  },
};

function page() {
  return <Skills />;
}

export default page;
