"use client";

import React from "react";
import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <motion.section
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-brand-600 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] z-1" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-8">
            Pronto para escalar seus resultados?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já utilizam a Duarte Hub para
            dominar seus mercados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              rel="noopener noreferrer"
              className="bg-white text-background px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl shadow-black/20"
            >
              Começar Agora
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-950/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
            >
              Falar com Consultor
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
