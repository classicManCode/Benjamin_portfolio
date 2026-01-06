"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-light text-primary mb-8 leading-tight">
            More than just <br />
            <span className="font-bold border-b-4 border-accent">
              clean code.
            </span>
          </h3>
          <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
            <p>
              I'm Benjamin Onyia, a Fullstack Web Developer with
              over 6 years of hands-on experience in building digital products
              that scale.
            </p>
            <p>
              My journey started with a curiosity for how things work on the
              web, which quickly evolved into a passion for crafting
              pixel-perfect, accessible, and performant user experiences. I
              don't just write code, I solve problems through design thinking
              and robust engineering.
            </p>
            <p>
              When I'm not debugging or optimizing render cycles, you can find
              me exploring modern architecture, reading about behavioral
              psychology, or refining my espresso brewing technique.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full h-80 md:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500 border border-primary/10"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-accent">6+</div>
              <div className="text-xl text-primary font-medium tracking-wide">
                YEARS EXPERIENCE
              </div>
              <div className="w-12 h-1 bg-accent mx-auto mt-4"></div>
              <p className="text-sm text-primary/60 mt-4">
                Delivering Excellence & Innovation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
