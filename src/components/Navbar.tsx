"use client";

import React from "react";
import { Database } from "lucide-react";

export default function Navbar() {
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
          <a href="#como-funciona" className="hover:text-white transition-colors">
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
}
