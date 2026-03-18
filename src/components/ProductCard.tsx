"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ExternalLink, Percent, TrendingDown } from "lucide-react";

export type RegionKey =
  | "todas"
  | "norte"
  | "nordeste"
  | "centro-oeste"
  | "sudeste"
  | "sul";

export type ProductCardProps = {
  product: {
    title: string;
    description: string;
    price: string;
    originalPrice?: string;
    discountPercent?: number;
    features: string[];
    icon: React.ReactNode;
    link: string;
  };
  regionLinks: Record<RegionKey, string>;
  selectedRegion: RegionKey;
  setSelectedRegion: React.Dispatch<React.SetStateAction<RegionKey>>;
};

export default function ProductCard({
  product,
  regionLinks,
  selectedRegion,
  setSelectedRegion,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = -((y - midY) / midY) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHover(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={resetTilt}
      className={`relative flex flex-col p-8 group overflow-hidden rounded-3xl border-t-2 bg-black/20 shadow-2xl shadow-white/20 transition-all md:w-1/3 min-h-175 ${
        product.title === "Base Brasil"
          ? "border-primary shadow-primary"
          : ""
      }`}
      style={{
        perspective: 1100,
      }}
    >
      <motion.div
        className="relative"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hover ? 6 : 0}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl flex items-center gap-4 font-display font-bold text-white">
                {product.title}
                {product.title === "Base Brasil" && (
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg shadow-emerald-500/30">
                    Mais popular
                  </span>
                )}
              </h3>
              <p className="text-sm text-brand-200/70 max-w-lg">
                {product.description}
              </p>
            </div>
            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/20 ${
                product.title === "Base Brasil"
                ? "text-primary"
                : "text-white"
            }`}>
              {product.icon}
            </div>
          </div>

          <div className="mt-8 border-b border-white/20 pb-5">
            {product.discountPercent && product.originalPrice ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                    <Percent className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400">
                      {product.discountPercent}% OFF
                    </span>
                  </div>
                  <span className="text-xs text-brand-300/60 italic">promoção limitada</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-display font-bold text-white">
                    {product.price}
                  </div>
                  <div className="text-lg text-brand-300/60 line-through">
                    {product.originalPrice}
                  </div>
                </div>
               
              </div>
            ) : (
              <div className="text-4xl font-display font-bold text-white">
                {product.price}
              </div>
            )}
            <div className="text-xs text-primary/80 uppercase tracking-widest mt-2">
              Acesso Vitalício
            </div>
          </div>

          <ul className="mt-8 space-y-3">
            {product.features.map((feature, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-3 text-sm text-brand-100"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-100">
                  <CheckCircle2 className={`w-4 h-4 ${
                            product.title === "Base Brasil"
                            ? "text-primary"
                            : "text-white"
                        }`}/>
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      {product.title === "Bases por Região" && (
        <div className="relative mt-auto">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value as RegionKey)}
            className="w-full appearance-none from-brand-950/80 to-brand-900/60 border border-white/10 text-white px-4 py-3 pr-10 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all"
          >
            <option className="bg-[#0f172a] text-white" value="todas">
              Todas as Regiões
            </option>
            <option className="bg-[#0f172a] text-white" value="norte">
              Norte
            </option>
            <option className="bg-[#0f172a] text-white" value="nordeste">
              Nordeste
            </option>
            <option className="bg-[#0f172a] text-white" value="centro-oeste">
              Centro-Oeste
            </option>
            <option className="bg-[#0f172a] text-white" value="sudeste">
              Sudeste
            </option>
            <option className="bg-[#0f172a] text-white" value="sul">
              Sul
            </option>
          </select>

          {/* ícone custom */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/60">
            ▼
          </div>
        </div>
      )}
      <div className=" pt-0 mt-auto">
        <button className={`btn-animated w-full border-white/10 shadow-2xl rounded-lg ${
                product.title === "Base Brasil"
                ? "bg-primary text-white  shadow-primary/80"
                : "bg-white/90 text-primary shadow-white/50"
            }`}>
          <a
            href={
              product.title === "Bases por Região"
                ? regionLinks[selectedRegion]
                : product.link
            }
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-600  py-3 rounded-xl font-bold transition-all hover:scale-105"
          >
            Comprar Agora
            <ExternalLink className="w-4 h-4" />
          </a>
        </button>
      </div>
    </div>
  );
}
