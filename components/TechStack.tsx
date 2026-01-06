"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Git/GitHub",
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <h3 className="text-3xl font-light text-primary border-l-4 border-accent pl-4 inline-block">
          Technical Arsenal
        </h3>
      </motion.div>

      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="px-6 py-3 bg-white/40 border border-primary/10 rounded-full text-primary font-medium 
            hover:bg-primary hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
