"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building robust, scalable applications using modern stacks like Next.js, React, and Node.js.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and aesthetically pleasing interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing web applications for speed, SEO, and maximum conversion rates.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Ensuring your digital presence looks and functions perfectly across all device sizes.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white/30 my-20 rounded-3xl backdrop-blur-sm border border-white/40">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-light text-primary mb-4">
          What I Bring to the Table
        </h3>
        <p className="text-primary/60 max-w-2xl mx-auto">
          Comprehensive solutions for your digital needs, from concept to
          deployment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group p-8 bg-neutral-bg/50 rounded-xl border border-primary/5 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h4 className="text-xl font-semibold text-primary mb-3">
              {service.title}
            </h4>
            <p className="text-primary/70 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
