"use client";

import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="sobre"
      className="py-24 bg-brand-900/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-display font-bold text-brand-400 mb-1">
                  5k+
                </p>
                <p className="text-xs text-brand-200/60 uppercase font-bold">
                  Clientes Satisfeitos
                </p>
              </div>
              <div className="glass-card p-6 text-center ">
                <p className="text-3xl font-display font-bold text-brand-400 mb-1">
                  100%
                </p>
                <p className="text-xs text-brand-200/60 uppercase font-bold">
                  Dados Públicos
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-display font-bold text-brand-400 mb-1">
                  LGPD
                </p>
                <p className="text-xs text-brand-200/60 uppercase font-bold">
                  Conformidade Total
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center md:text-start">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Sobre a <span className="text-primary font-bold">DUARTE HUB</span>
            </h2>
            <p className="text-brand-200/80 text-lg mb-6 leading-relaxed">
              A Duarte Hub nasceu com o propósito de democratizar o acesso à
              inteligência de dados para empresas de todos os tamanhos.
              Acreditamos que a informação estratégica não deve ser um
              privilégio apenas de grandes corporações.
            </p>
            <p className="text-brand-200/70 mb-8">
              Nossa missão é fornecer ferramentas e dados precisos que permitam
              aos empreendedores brasileiros prospectar com eficiência, reduzir
              custos de aquisição e escalar seus negócios de forma sustentável e
              ética.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <picture className="w-12 h-12 rounded-full">
                <img
                  className="overflow-hidden rounded-full"
                  src="./jabs-profile.jpeg"
                  alt="DH"
                />
              </picture>
              <div >
                <p className="font-bold text-white">Equipe <span className="text-primary">Duarte Hub</span></p>
                <p className="text-sm text-brand-400">Inteligência de Dados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
