"use client";

import React from "react";
import { motion } from "motion/react";
import { Cpu, Zap, Lock } from "lucide-react";

export default function Solutions() {
  return (
    <motion.section
      id="solucoes"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="md:w-2/3"
          >
            <span className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-4 block">
              Futuro & Inovação
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Novas Soluções <span className="text-primary text-5xl md:text-6xl">Em Breve</span>
            </h2>
            <p className="text-brand-200/70 text-lg mb-8 leading-relaxed">
              Estamos desenvolvendo a próxima geração de ferramentas para Duarte
              Hub. Em breve, você terá acesso a agentes de IA treinados para
              automatizar sua prospecção e análise de mercado.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Cpu className="text-brand-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Agentes de IA Especialistas</h4>
                  <p className="text-sm text-brand-200/60">
                    IA treinada para qualificar leads e realizar o primeiro
                    contato de forma humanizada.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Automação de Workflows</h4>
                  <p className="text-sm text-brand-200/60">
                    Integração direta das bases com seu CRM e ferramentas de
                    disparo automático.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center md:w-1/2"
          >
            {/* Floating avatars */}
            <motion.div
              className="absolute -top-2 left-0 md:left-10 w-18 h-18 rounded-full border-2 border-white/20 overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://picsum.photos/48/48?random=1"
                alt="Member"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -top-2 right-0 md:right-10 w-18 h-18 rounded-full border-2 border-white/20 overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src="https://picsum.photos/48/48?random=2"
                alt="Member"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-10 md:left-10 w-18 h-18 rounded-full border-2 border-white/20 overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, 2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <img
                src="https://picsum.photos/48/48?random=3"
                alt="Member"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-10 md:right-10 w-18 h-18 rounded-full border-2 border-white/20 overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <img
                src="https://picsum.photos/48/48?random=4"
                alt="Member"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute top-70  w-18 h-18 rounded-full border-2 border-white/20 overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <img
                src="https://picsum.photos/48/48?random=5"
                alt="Member"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div className="w-64 h-64 glass-card flex items-center justify-center p-8 relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-600/40 animate-pulse">
                  <Lock className="text-white w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">
                  Área de Membros
                </h3>
                <p className="text-brand-300 font-medium">
                  Acesso Exclusivo em Desenvolvimento
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
