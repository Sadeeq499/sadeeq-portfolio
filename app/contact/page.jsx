import React from "react";
import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Contact Muhammad Sadeeq - Full Stack Developer | Get In Touch",
  description:
    "Contact Muhammad Sadeeq for your next project. Professional Full Stack Developer with 3+ years experience in web development, mobile apps, and technical mentoring. Available for freelance projects and collaborations.",
  keywords: [
    "Contact Muhammad Sadeeq",
    "Hire Full Stack Developer",
    "Contact Web Developer",
    "Freelance Developer Contact",
    "React Developer Hire",
    "Node.js Developer Contact",
    "Mobile App Developer",
    "Technical Mentor",
    "Web Development Services",
    "Project Consultation",
    "Software Development Contact",
    "Developer Portfolio Contact",
  ],
  openGraph: {
    title: "Contact Muhammad Sadeeq - Full Stack Developer | Get In Touch",
    description:
      "Contact Muhammad Sadeeq for your next project. Professional Full Stack Developer with 3+ years experience in web development, mobile apps, and technical mentoring.",
    url: "https://www.sadeeqdev.tech/contact",
    type: "website",
    images: [
      {
        url: "/sadeeq-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Muhammad Sadeeq - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Muhammad Sadeeq - Full Stack Developer | Get In Touch",
    description:
      "Contact Muhammad Sadeeq for your next project. Professional Full Stack Developer with 3+ years experience in web development, mobile apps, and technical mentoring.",
    images: ["/sadeeq-profile.jpeg"],
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech/contact",
  },
};

function page() {
  return <Contact />;
}

export default page;
