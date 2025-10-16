import React from "react";
import Resume from "@/components/home/Resume";

export const metadata = {
  title:
    "Resume - Muhammad Sadeeq | Full Stack Engineer Experience & Education",
  description:
    "View Muhammad Sadeeq's professional resume including 5+ years of full-stack development experience at Nartec-Solutions, ExtremSoft, and Tech Emulsion. Education from Islamia College University Peshawar in Software Engineering.",
  keywords: [
    "Muhammad Sadeeq Resume",
    "Full Stack Engineer Resume",
    "Software Engineer CV",
    "Web Developer Experience",
    "Nartec-Solutions",
    "ExtremSoft",
    "Tech Emulsion",
    "Islamia College University",
    "Software Engineering Degree",
    "Full Stack Developer CV",
    "Professional Experience",
    "Developer Resume",
    "Technical Skills Resume",
    "MERN Stack Experience",
    "React Developer Resume",
    "Node.js Developer CV",
  ],
  openGraph: {
    title:
      "Resume - Muhammad Sadeeq | Full Stack Engineer Experience & Education",
    description:
      "View Muhammad Sadeeq's professional resume including 5+ years of full-stack development experience at Nartec-Solutions, ExtremSoft, and Tech Emulsion.",
    url: "https://www.sadeeqdev.tech/resume",
    type: "profile",
    images: [
      {
        url: "/sadeeq-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Professional Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Resume - Muhammad Sadeeq | Full Stack Engineer Experience & Education",
    description:
      "View Muhammad Sadeeq's professional resume including 5+ years of full-stack development experience at Nartec-Solutions, ExtremSoft, and Tech Emulsion.",
    images: ["/sadeeq-profile.jpeg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/resume",
  },
};

function page() {
  return <Resume />;
}

export default page;
