"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-bg selection:bg-accent/30 selection:text-primary">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10 md:gap-24 pb-20 relative"
        >
          <Header />
          <div id="home">
            <Hero />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="tech-stack">
            <TechStack />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <footer className="text-center text-primary/40 text-sm pb-8 pt-12 border-t border-primary/5">
            <p>
              &copy; {new Date().getFullYear()} Benjamin Onyia. Built with
              Next.js, Tailwind & Motion.
            </p>
          </footer>
        </motion.div>
      )}
    </main>
  );
}
