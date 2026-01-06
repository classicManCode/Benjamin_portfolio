import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Onyia | Fullstack Web Developer",
  description:
    "Minimalist portfolio of Benjamin Onyia, a Fullstack Web Developer with 6+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-neutral-bg text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
