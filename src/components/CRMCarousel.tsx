"use client";

import React from "react";
import { motion } from "motion/react";

export default function CRMCarousel() {
  const crms = [
    {
      name: "Zoho CRM",
      logo: "https://www.zoho.com/zohoone/section/zoho-crm-vector-logo.png",
    },
    {
      name: "RD Station CRM",
      logo: "https://d335luupugsy6k.cloudfront.net/cms_cdn/1711368932_e91c3ac89f6.png",
    },
    {
      name: "Pipedrive",
      logo: "https://cdn.pipedrive.com/s/img/footer/logo.png",
    },
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/web-servers/hubspot.com/style/img/global/hubspot-logo.svg",
    },
    {
      name: "Bitrix24",
      logo: "https://www.bitrix24.com/d/crm/images/logo-bitrix24.svg",
    },
    {
      name: "Salesforce",
      logo: "https://www.salesforce.com/content/dam/web/en_us/www/logo/logo-salesforce.svg",
    },
    {
      name: "Kommo",
      logo: "https://kommo.ru/static/logo.svg",
    },
    {
      name: "Monday.com",
      logo: "https://cdn.monday.com/images/monday_logo_blue.svg",
    },
    {
      name: "PipeRun",
      logo: "https://piperun.com.br/images/logo-piperun.svg",
    },
    {
      name: "Freshsales",
      logo: "https://freshsales-branding.s3.amazonaws.com/freshsales/fs-mark-logo.svg",
    },
  ];

  return (
    <section className="py-16 bg-brand-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Integração Facilitada com os Principais CRMs do Mercado
          </h3>
          <p className="text-brand-200/70 text-sm md:text-base">
            Nossas listas de inteligência comercial são entregues em formato CSV estruturado, prontas para importação imediata. Alimente seu funil de vendas em minutos, transformando dados brutos em leads qualificados nas maiores plataformas do mundo:
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-950 to-transparent z-10" />

          <motion.div
            className="flex gap-8 py-8"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...crms, ...crms, ...crms].map((crm, idx) => (
              <div
                key={idx}
                className="shrink-0 w-32 h-20 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              >
                <img
                  src={crm.logo}
                  alt={crm.name}
                  className="h-12 object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
