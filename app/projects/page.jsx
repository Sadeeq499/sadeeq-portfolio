import React from "react";
import Projects from "@/components/home/Projects";

export const metadata = {
  title:
    "Projects Portfolio - Muhammad Sadeeq | Featured Web & Mobile Applications",
  description:
    "Explore Muhammad Sadeeq's featured projects including e-commerce platforms, business services, mobile apps, and web applications. View live demos of Sabi Unique Collection, Vacanzy, GSTSA1, and more professional projects.",
  keywords: [
    "Muhammad Sadeeq Projects",
    "Portfolio Projects",
    "Web Development Projects",
    "E-commerce Projects",
    "React Projects",
    "Node.js Projects",
    "Mobile App Projects",
    "Business Applications",
    "Sabi Unique Collection",
    "Vacanzy Platform",
    "GSTSA1 System",
    "Saddy Voices",
    "Cyber Nexus LLC",
    "React Native Apps",
    "Full Stack Projects",
    "Featured Work",
    "Project Showcase",
    "Developer Portfolio",
  ],
  openGraph: {
    title:
      "Projects Portfolio - Muhammad Sadeeq | Featured Web & Mobile Applications",
    description:
      "Explore Muhammad Sadeeq's featured projects including e-commerce platforms, business services, mobile apps, and web applications. View live demos of professional projects.",
    url: "https://www.sadeeqdev.tech/projects",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Featured Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Projects Portfolio - Muhammad Sadeeq | Featured Web & Mobile Applications",
    description:
      "Explore Muhammad Sadeeq's featured projects including e-commerce platforms, business services, mobile apps, and web applications. View live demos of professional projects.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/projects",
  },
};

function page() {
  return <Projects />;
}

export default page;
