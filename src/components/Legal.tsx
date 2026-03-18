"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function Legal() {
  return (
    <motion.section
      className="py-16 bg-brand-950 border-t border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10  font-bold text-brand-300 mb-6">
          <ShieldCheck className="w-5 h-5" />
          Conformidade Legal
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">Aviso Legal e LGPD</h3>
        <p className="text-brand-200/50 text-medium leading-relaxed mb-8">
          A Duarte Hub atua estritamente de acordo com a Lei Geral de Proteção
          de Dados (LGPD). Todas as informações contidas em nossas bases de
          dados são de origem pública, extraídas de fontes oficiais como a
          Receita Federal do Brasil e outros órgãos governamentais. Não
          comercializamos dados sensíveis de pessoas físicas ou informações
          privadas não autorizadas. O uso das bases para fins de marketing e
          vendas deve respeitar as boas práticas de comunicação e as
          regulamentações vigentes de cada setor.
        </p>
      </div>
    </motion.section>
  );
}
