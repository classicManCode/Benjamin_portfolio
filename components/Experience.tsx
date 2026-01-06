"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Fullstack Developer",
    company: "Freelance / Agency",
    description:
      "Leading development teams, architecting scalable solutions, and mentoring junior developers. Specialized in Next.js enterprise applications.",
  },
  {
    year: "2021 - 2023",
    role: "Frontend Team Lead",
    company: "Tech Solutions Ltd.",
    description:
      "Spearheaded the migration to React/TypeScript, improving code quality and reducing technical debt by 40%.",
  },
  {
    year: "2019 - 2021",
    role: "Web Developer",
    company: "Creative Digital Studio",
    description:
      "Developed responsive websites and e-commerce platforms using the MERN stack. Collaborated closely with designers.",
  },
  {
    year: "2017 - 2019",
    role: "Junior Developer",
    company: "StartUp Inc",
    description:
      "Started my journey building improved UI components and maintaining legacy codebases.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        className="mb-16 pl-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-light text-primary border-l-4 border-accent pl-6">
          Professional Journey
        </h3>
      </motion.div>

      <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="pl-8 md:pl-12 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Dot on timeline */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-neutral-bg"></div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-accent font-bold min-w-[140px] tracking-wide">
                {exp.year}
              </span>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                <p className="text-lg text-primary/70 mb-2">{exp.company}</p>
                <p className="text-primary/60 max-w-2xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
