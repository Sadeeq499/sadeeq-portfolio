import React from "react";
import Projects from "@/components/home/Projects";

export const metadata = {
  title:
    "Projects Portfolio - Muhammad Sadeeq | Featured Web & Mobile Applications",
  description:
    "Explore Muhammad Sadeeq's featured projects including Artworks by Afreen, Selftor, ME Accounts Audit, GS1 Saudi Arabia, and more. A diverse portfolio of e-commerce platforms, real estate applications, financial services, and supply chain solutions.",
  keywords: [
    "Muhammad Sadeeq Projects",
    "Portfolio Projects",
    "Web Development Projects",
    "E-commerce Projects",
    "React Projects",
    "Node.js Projects",
    "Mobile App Projects",
    "Business Applications",
    "Artworks by Afreen",
    "Selftor Real Estate",
    "ME Accounts Audit",
    "GS1 Saudi Arabia",
    "Sabi Unique Collection",
    "Vacanzy Platform",
    "GSTSA1 System",
    "Saddy Voices",
    "Cyber Nexus LLC",
    "Real Estate App",
    "Auditing Services UAE",
    "Barcode Registration System",
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
      "Explore Muhammad Sadeeq's featured projects including Artworks by Afreen, Selftor, ME Accounts Audit, GS1 Saudi Arabia, and more. View live demos of professional web and mobile applications.",
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
      "Explore Muhammad Sadeeq's featured projects including Artworks by Afreen, Selftor, ME Accounts Audit, GS1 Saudi Arabia, and more. View live demos of professional web and mobile applications.",
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
