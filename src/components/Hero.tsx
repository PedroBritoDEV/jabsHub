"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BarChart3, Globe } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex justify-between items-center mt-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              Inteligência de Dados para Negócios
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 ">
              A Base Empresarial Mais Completa do Brasil em Um Só Lugar
            </h1>
            <p className="text-lg md:text-xl text-brand-200/80 leading-relaxed mb-10 max-w-2xl">
              Dados empresariais públicos organizados por estado, região e CNAE.
              Pronto para análise comercial e inteligência estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produtos"
                className="flex items-center justify-center gap-2 bg-white text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl shadow-white/5 group hover:scale-105"
              >
                Ver Bases Disponíveis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
              >
                Novas Soluções IA
                <span className="font-extralight text-xs border text-amber-400 px-1 rounded ">
                  em breve
                </span>
              </a>
            </div>
          </motion.div>
        </div>
        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.6 }}
          className="hidden lg:block w-80"
        >
          <div className="glass-card p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-300 uppercase font-bold tracking-wider">
                  Empresas Ativas
                </p>
                <p className="text-2xl font-display font-bold">+22 Milhões</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center">
                <Globe className="text-brand-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-300 uppercase font-bold tracking-wider">
                  Abrangência
                </p>
                <p className="text-2xl font-display font-bold">Nacional</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
