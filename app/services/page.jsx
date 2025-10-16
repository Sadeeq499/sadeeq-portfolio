import React from "react";
import Services from "@/components/home/Services";

export const metadata = {
  title:
    "Services - Muhammad Sadeeq | Full Stack Web Development & Business Solutions",
  description:
    "Professional web development services by Muhammad Sadeeq including full-stack development, backend APIs, frontend architecture, UI/UX design, authentication, payment integration, deployment, and DevOps solutions.",
  keywords: [
    "Web Development Services",
    "Full Stack Development",
    "Backend API Development",
    "Frontend Architecture",
    "UI/UX Design Services",
    "Authentication & Security",
    "Payment Gateway Integration",
    "Maps & Location Services",
    "Deployment & DevOps",
    "Database & Cache Systems",
    "Testing & API Validation",
    "Performance Optimization",
    "Real-time Communication",
    "React Development Services",
    "Node.js Development",
    "MongoDB Development",
    "MySQL Development",
    "PostgreSQL Development",
    "Docker Services",
    "CI/CD Pipeline",
    "Business Development Solutions",
  ],
  openGraph: {
    title:
      "Services - Muhammad Sadeeq | Full Stack Web Development & Business Solutions",
    description:
      "Professional web development services including full-stack development, backend APIs, frontend architecture, UI/UX design, authentication, payment integration, and DevOps solutions.",
    url: "https://www.sadeeqdev.tech/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Services - Muhammad Sadeeq | Full Stack Web Development & Business Solutions",
    description:
      "Professional web development services including full-stack development, backend APIs, frontend architecture, UI/UX design, authentication, payment integration, and DevOps solutions.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/services",
  },
};

function page() {
  return <Services />;
}

export default page;
