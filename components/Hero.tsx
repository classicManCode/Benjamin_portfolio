"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <motion.div
        className="flex-1 space-y-8 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="space-y-4">
          <motion.h2
            className="text-xl md:text-2xl font-medium text-accent tracking-wide flex items-center justify-center md:justify-start gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="w-12 h-[1px] bg-accent"></span>
            Hello, I'm
          </motion.h2>
          <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tight leading-none">
            Benjamin <br /> Onyia
          </h1>
        </div>

        <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
          Fullstack Web Developer with{" "}
          <span className="font-semibold text-primary">6+ years</span> of
          experience crafting high-performance, minimalist digital experiences.
        </p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView()
            }
            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-portfolio-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="px-8 py-4 border border-primary/20 text-primary rounded-full font-medium hover:bg-white/50 transition-all hover:border-primary"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center md:justify-end relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
      >
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
          <div className="absolute inset-4 border-2 border-accent/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
            <Image
              src="/portfolio_image.jpeg"
              alt="Benjamin Onyia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40 animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
