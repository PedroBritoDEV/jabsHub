"use client";

import React from "react";
import { Database, Users, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">Duarte Hub</span>
          </div>

          <div className="text-brand-400 text-sm">
            © {new Date().getFullYear()} Duarte Hub. Todos os direitos reservados.
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
}
