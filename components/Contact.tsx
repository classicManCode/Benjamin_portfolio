"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formState;
    const body = `Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:legenderyprime@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Inquiry"
    )}&body=${body}`;
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl font-light text-primary mb-4">Just send me a Mail</h3>
        <p className="text-primary/70">
          Have a project in mind or just want to say hi?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/60 shadow-sm"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-white/50 border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-primary"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-primary"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full bg-white/50 border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-primary"
                placeholder="Project Inquiry"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-primary"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-white/50 border border-primary/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none text-primary"
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-4 rounded-lg hover:bg-portfolio-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-6 flex justify-center">
            <a
              href="mailto:legenderyprime@gmail.com"
              className="text-sm text-primary/60 hover:text-accent flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              legenderyprime@gmail.com
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
