import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benjamin-onyia.vercel.app"),
  title: {
    default: "Benjamin Onyia | Fullstack Web Developer",
    template: "%s | Benjamin Onyia",
  },
  description:
    "Fullstack Web Developer with 6+ years of experience building scalable web applications. Expert in React, Next.js, TypeScript, Node.js, and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Benjamin Onyia",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Freelance Developer",
    "Nigeria Developer",
    "Lagos Developer",
  ],
  authors: [
    { name: "Benjamin Onyia", url: "https://benjamin-onyia.vercel.app" },
  ],
  creator: "Benjamin Onyia",
  publisher: "Benjamin Onyia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benjamin-onyia.vercel.app",
    title: "Benjamin Onyia | Fullstack Web Developer",
    description:
      "Fullstack Web Developer with 6+ years of experience. Expert in React, Next.js, TypeScript, and Node.js. Building scalable, performant web applications.",
    siteName: "Benjamin Onyia Portfolio",
    images: [
      {
        url: "/portfolio_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Benjamin Onyia - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Onyia | Fullstack Web Developer",
    description:
      "Fullstack Web Developer with 6+ years of experience. Expert in React, Next.js, TypeScript, and Node.js.",
    images: ["/portfolio_image.jpeg"],
    creator: "@benjaminonyia",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} antialiased bg-neutral-bg text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
