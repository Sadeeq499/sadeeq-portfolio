import React from "react";
import AboutMe from "@/components/home/AboutMe";

export const metadata = {
  title: "About Muhammad Sadeeq - Full Stack Developer & MERN Stack Expert",
  description:
    "Learn about Muhammad Sadeeq, a Full Stack Developer with 5+ years of experience in MERN Stack, React Native, REST APIs, and database management. Specialized in building scalable web applications and mobile solutions.",
  keywords: [
    "About Muhammad Sadeeq",
    "Full Stack Developer About",
    "MERN Stack Developer",
    "React Developer Profile",
    "Node.js Developer",
    "Backend Developer",
    "Web Developer Experience",
    "Software Engineer Background",
    "React Native Developer",
    "Database Management",
    "REST API Development",
    "VPS Deployment",
    "CI/CD Pipeline",
    "Git Workflows",
  ],
  openGraph: {
    title: "About Muhammad Sadeeq - Full Stack Developer & MERN Stack Expert",
    description:
      "Learn about Muhammad Sadeeq, a Full Stack Developer with 5+ years of experience in MERN Stack, React Native, REST APIs, and database management.",
    url: "https://www.sadeeqdev.tech/about",
    type: "profile",
    images: [
      {
        url: "/about-me.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Full Stack Developer About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Sadeeq - Full Stack Developer & MERN Stack Expert",
    description:
      "Learn about Muhammad Sadeeq, a Full Stack Developer with 5+ years of experience in MERN Stack, React Native, REST APIs, and database management.",
    images: ["/about-me.jpeg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/about",
  },
};

function page() {
  return <AboutMe />;
}

export default page;
