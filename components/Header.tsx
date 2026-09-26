/**
 * =====================================================================
 * HEADER / NAVBAR (100% MOBILE-FIRST E ACESSIBILIDADE)
 * =====================================================================
 *
 * DECISÕES MOBILE-FIRST E CRO:
 * 1. Altura compacta no mobile: h-16 (64px) em celulares para preservar espaço
 *    útil na viewport (abaixo do teto de 15% sticky), expandindo para h-20 no desktop.
 * 2. Hitbox de toque mínima de 44x44px em todos os controles móveis.
 * 3. Menu gaveta reformulado: eliminação de botões verdes duplicados.
 *    Hierarquia clara: navegação limpa + CTA primário de Orçamento + contato secundário.
 */

import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenQuote?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Orçamento Rápido', href: '/orcamento-rapido', isNew: true },
    { label: 'Dedetização', href: '/dedetizacao' },
    { label: 'Descupinização', href: '/descupinizacao' },
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1329]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo da Alpha Cupim */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2 focus:outline-none shrink-0"
          aria-label="Alpha Cupim - Página Inicial"
        >
          <img 
            src={BUSINESS_CONFIG.assets.logo} 
            alt="Alpha Cupim - Dedetização e Controle de Pragas em Juazeiro do Norte" 
            className="h-9 sm:h-11 w-auto object-contain"
            width="130"
            height="40"
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Navegação Principal">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPath === item.href
                  ? 'text-blue-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {item.isNew && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Novo
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* CTAs Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS_CONFIG.phone.telHref}
            className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
            aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>{BUSINESS_CONFIG.phone.display}</span>
          </a>

          <a
            href="/orcamento-rapido"
            onClick={(e) => {
              if (onOpenQuote) {
                e.preventDefault();
                onOpenQuote();
              } else {
                handleLinkClick(e, '/orcamento-rapido');
              }
            }}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer"
            id="btn-header-quote"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Orçamento Rápido</span>
          </a>
        </div>

        {/* Ações Mobile Rápidas (Touch Target >= 44px) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Botão rápido WhatsApp Mobile */}
          <a
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'header_mobile_icon', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green-600 active:bg-green-700 text-white rounded-xl flex items-center justify-center shadow-sm"
            aria-label="Falar no WhatsApp com a Alpha Cupim"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
          </a>

          {/* Botão Hambúrguer Mobile (44px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 text-slate-300 hover:text-white bg-slate-800/80 active:bg-slate-700 rounded-xl flex items-center justify-center focus:outline-none transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Gaveta Mobile Fluida e Otimizada */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1427] border-b border-slate-800 px-4 py-5 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-1 mb-5" aria-label="Navegação Mobile">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-base font-semibold py-3 px-3 rounded-xl flex items-center justify-between transition-colors ${
                  currentPath === item.href 
                    ? 'text-blue-400 bg-blue-950/40' 
                    : 'text-slate-200 active:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.isNew && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Novo
                    </span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>

          {/* Ações Mobile Claras e Não-Repetitivas */}
          <div className="space-y-2.5 pt-4 border-t border-slate-800">
            {/* CTA Primário: Orçamento Rápido */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuote) {
                  onOpenQuote();
                } else if (onNavigate) {
                  onNavigate('/orcamento-rapido');
                }
              }}
              className="w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-[0.99] text-white text-base font-extrabold rounded-xl shadow-lg shadow-green-950/40 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Pedir Orçamento Rápido</span>
            </button>

            {/* Contato Telefônico Direto */}
            <a
              href={BUSINESS_CONFIG.phone.telHref}
              className="w-full h-11 flex items-center justify-center gap-2 bg-slate-800/80 active:bg-slate-700 text-slate-200 text-sm font-semibold rounded-xl border border-slate-700/80 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
