"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Globe, Building2 } from "lucide-react";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {
      title: "Bases por Região",
      description:
        "Bases regionais abrangendo múltiplos estados, perfeitas para expansão territorial e vendas em escala.",
      price: "R$ 599,90",
      originalPrice: "R$ 799,90",
      discountPercent: 25,
      features: [
        "Razão social",
        "CNPJ",
        "CNAE",
        "Endereço comercial",
        "Situação cadastral",
        "Informações de contato comercial registradas publicamente",
      ],
      icon: <Globe className="w-8 h-8 text-brand-400" />,
      link: "https://kirvano.com/p/base-regiao",
    },
    {
      title: "Base Brasil",
      description:
        "A base mais completa do Brasil, com dados de todas as empresas ativas em território nacional.",
      price: "R$ 997,90",
      originalPrice: "R$3997,90",
      discountPercent: 75,
      features: [
        "Razão social",
        "CNPJ",
        "CNAE",
        "Endereço comercial",
        "Situação cadastral",
        "Informações de contato comercial registradas publicamente",
      ],
      icon: <Building2 className="w-8 h-8 text-brand-400" />,
      link: "https://kirvano.com/p/base-brasil",
    },
  ];

  const regionLinks = {
    todas: "https://kirvano.com/p/base-regiao",
    norte: "https://kirvano.com/p/base-regiao-norte",
    nordeste: "https://kirvano.com/p/base-regiao-nordeste",
    "centro-oeste": "https://kirvano.com/p/base-regiao-centro-oeste",
    sudeste: "https://kirvano.com/p/base-regiao-sudeste",
    sul: "https://kirvano.com/p/base-regiao-sul",
  };

  const [selectedRegion, setSelectedRegion] =
    useState<keyof typeof regionLinks>("todas");

  return (
    <motion.section
      id="products"
      className="py-24 bg-brand-900/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Bases Empresariais
          </h2>
          <p className="text-brand-200/70 max-w-2xl mx-auto">
            Escolha a base de dados que melhor se adapta à sua estratégia de
            vendas e comece a prospectar hoje mesmo.
          </p>
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              product={product}
              regionLinks={regionLinks}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
