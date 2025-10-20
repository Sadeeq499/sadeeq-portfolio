import { Geist, Geist_Mono, Pacifico, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Muhammad Sadeeq - Full Stack Developer & UI/UX Designer",
  description:
    "Professional Full Stack Developer and UI/UX Designer with 5+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and collaborations.",
  keywords: [
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Web Developer",
    "Software Engineer",
    "Freelance Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Sadeeq" }],
  creator: "Muhammad Sadeeq",
  publisher: "Muhammad Sadeeq",
  verification: {
    google: "thG7tu7PbrvSF3MF4zevdiT8RrLLdB5QA_gPwswjH5Q",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sadeeqdev.tech",
    title: "Muhammad Sadeeq - Full Stack Developer & UI/UX Designer",
    description:
      "Professional Full Stack Developer and UI/UX Designer with 5+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Muhammad Sadeeq Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Sadeeq - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sadeeq - Full Stack Developer & UI/UX Designer",
    description:
      "Professional Full Stack Developer and UI/UX Designer with 5+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@muhammadsadeeq",
  },
  alternates: {
    canonical: "https://www.sadeeqdev.tech",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
