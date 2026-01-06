"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  isPlaceholder?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nootrio Health Food Blog",
    description:
      "A comprehensive health food blog featuring dynamic content, categorization, and a clean reading experience.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://nootrio-health-food-blog.vercel.app/",
    image: "/project-nootrio.png",
  },
  {
    id: 2,
    title: "Client Management Web App",
    description:
      "A streamlined dashboard for managing client relationships, invoicing, and project tracking.",
    tech: ["React", "Node.js", "Express"],
    isPlaceholder: true,
    image: "/project-dashboard.png",
  },
  {
    id: 3,
    title: "Random Quotes Generator",
    description:
      "An interactive application that generates inspiring quotes with social sharing capabilities.",
    tech: ["JavaScript", "CSS", "API"],
    isPlaceholder: true,
    image: "/project-quotes.png",
  },
];

export default function Projects() {
  const [notification, setNotification] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.isPlaceholder) {
      setNotification(true);
      setTimeout(() => setNotification(false), 3000);
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-4xl font-light text-primary text-center md:text-left border-l-4 border-accent pl-6">
          Projects
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 cursor-pointer 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleProjectClick(project)}
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                {project.isPlaceholder ? (
                  <Lock className="w-5 h-5 text-primary/40" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                )}
              </div>
              <p className="text-primary/70 mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-neutral-bg text-primary/80 px-3 py-1 rounded-full border border-primary/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-1/2 left-0 right-0 -translate-y-1/2 md:top-auto md:bottom-10 md:translate-y-0 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center justify-center gap-3 w-[90vw] max-w-md mx-auto backdrop-blur-md bg-opacity-95"
          >
            <span className="text-sm font-medium text-center">
              New features are being implemented. Check back soon!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
