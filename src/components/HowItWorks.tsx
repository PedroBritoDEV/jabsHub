"use client";

import React from "react";
import { motion } from "motion/react";
import { Database, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Escolha sua Base",
      description:
        "Selecione o pacote de dados que melhor atende seu nicho de atuação.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Pagamento Seguro",
      description:
        "Finalize sua compra através da Kirvano com total segurança e garantia.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Entrega Imediata",
      description:
        "Receba o link de download e acesso à plataforma instantaneamente após a confirmação.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Escala de Vendas",
      description:
        "Importe os dados e comece a converter novos clientes com inteligência.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <motion.section
      id="como-funciona"
      className="py-24 bg-brand-950"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-brand-200/70 max-w-2xl mx-auto">
            Processo simplificado para você focar no que importa: vender mais.
          </p>
        </div>
        <div className="md:w-5/6 m-auto aspect-video neon-video ">
          <iframe
            className="w-full h-full rounded-2xl scale-[1.02]"
            src="https://www.youtube.com/embed/1l8tEUBKH_I?autoplay=1&mute=1&loop=1&playlist=1l8tEUBKH_I"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative mt-14">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 bg-brand-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>

              <h4 className="font-bold text-xl mb-3">{step.title}</h4>

              <p className="text-sm text-brand-200/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
