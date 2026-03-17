"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Database,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Globe,
  Zap,
  Users,
  Building2,
  Mail,
  Lock,
  ExternalLink,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Database className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            DUARTE HUB
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-200">
          <a href="#produtos" className="hover:text-white transition-colors">
            Produtos
          </a>
          <a href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a
            href="#como-funciona"
            className="hover:text-white transition-colors"
          >
            Como Funciona
          </a>
          <a href="#sobre" className="hover:text-white transition-colors">
            Sobre
          </a>
        </div>
        <a
          href="https://kirvano.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-background px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-600/20 active:scale-95 hover:scale-105"
        >
          Acessar Agora
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
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
            {/* <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Zap className="text-amber-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-300 uppercase font-bold tracking-wider">
                  Atualização
                </p>
                <p className="text-2xl font-display font-bold">Semanal</p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-brand-200/70 max-w-2xl mx-auto">
            Processo simplificado para você focar no que importa: vender mais.
          </p>
        </div>
        <div className="md:w-5/6 m-auto aspect-video">
          <iframe
            className="w-full h-full rounded-2xl"
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
};

const Products = () => {
  const products = [
    {
      title: "Bases por Região",
      description:
        "Bases regionais abrangendo múltiplos estados, perfeitas para expansão territorial e vendas em escala.",
      price: "R$ 297 a R$ 497",
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
      title: "Base Brasil Completa",
      description:
        "A base mais completa do Brasil, com dados de todas as empresas ativas em território nacional.",
      price: "R$ 997 a R$ 1.497",
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
      id="produtos"
      className="py-24 bg-brand-900/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Bases Empresariais
          </h2>
          <p className="text-brand-200/70 max-w-2xl mx-auto">
            Escolha a base de dados que melhor se adapta à sua estratégia de
            vendas e comece a prospectar hoje mesmo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className={`glass-card p-8 flex flex-col h-full md:w-1/2 border rounded-lg shadow-md shadow-white/10 relative ${
                product.title === "Base Brasil Completa"
                  ? "border-emerald-500 bg-emerald-500/10 shadow-2xl shadow-emerald-500/20 "
                  : "border-white/10"
              }`}
            >
              {product.title === "Base Brasil Completa" && (
                <div className="mb-4 absolute -top-3">
                  <span className=" px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="mb-6">{product.icon}</div>
              <div className="flex items-center gap-10">
                <h3 className="font-display text-2xl font-bold mb-4">
                  {product.title}
                </h3>
                {product.title === "Bases por Região" && (
                  <div className="mb-6">
                    
                    <select
                      value={selectedRegion}
                      onChange={(e) =>
                        setSelectedRegion(
                          e.target.value as keyof typeof regionLinks,
                        )
                      }
                      className="w-full bg-brand-950/60 border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="todas">Todas as Regiões</option>
                      <option value="norte">Norte</option>
                      <option value="nordeste">Nordeste</option>
                      <option value="centro-oeste">Centro-Oeste</option>
                      <option value="sudeste">Sudeste</option>
                      <option value="sul">Sul</option>
                    </select>
                  </div>
                )}
              </div>
              <p className="text-brand-200/70 text-sm mb-8 flex-grow leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-2 text-sm text-brand-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-baseline gap-2 mb-4">
                  <span className="text-4xl text-white font-display font-bold">
                    {product.price}
                  </span>
                  <span className="text-xs text-white uppercase font-bold">
                    Acesso Vitalício
                  </span>
                </div>
                <a
                  href={
                    product.title === "Bases por Região"
                      ? regionLinks[selectedRegion]
                      : product.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white py-3 rounded-xl font-bold transition-all hover:scale-105"
                >
                  Comprar na Kirvano
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Solutions = () => {
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Novas Soluções <span className="text-brand-400">Em Breve</span>
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
                  <h4 className="font-bold text-lg mb-1">
                    Agentes de IA Especialistas
                  </h4>
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
                  <h4 className="font-bold text-lg mb-1">
                    Automação de Workflows
                  </h4>
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
};

const About = () => {
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
                  24/7
                </p>
                <p className="text-xs text-brand-200/60 uppercase font-bold">
                  Suporte Ativo
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

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Sobre a Duarte Hub
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
            <div className="flex items-center gap-4">
              <picture className="w-12 h-12 rounded-full">
                <img
                  className="overflow-hidden rounded-full"
                  src="./jabs-profile.jpeg"
                  alt="DH"
                />
              </picture>
              <div>
                <p className="font-bold">Equipe Duarte Hub</p>
                <p className="text-sm text-brand-400">Inteligência de Dados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Legal = () => {
  return (
    <motion.section
      className="py-16 bg-brand-950 border-t border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-300 mb-6">
          <ShieldCheck className="w-3 h-3" />
          Conformidade Legal
        </div>
        <h3 className="text-xl font-bold mb-4">Aviso Legal e LGPD</h3>
        <p className="text-brand-200/50 text-sm leading-relaxed mb-8">
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
};

const FinalCTA = () => {
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
              href="https://kirvano.com"
              target="_blank"
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
};

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              DUARTE HUB
            </span>
          </div>

          <div className="text-brand-400 text-sm">
            © {new Date().getFullYear()} Duarte Hub. Todos os direitos
            reservados.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-brand-400 hover:text-white transition-colors"
            >
              <Users className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-brand-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-brand-400 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function Home() {
  return (
    <div className="selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <Solutions />
        <About />
        <Legal />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
