/**
 * =====================================================================
 * HEADER / NAVBAR (NAVEGAÇÃO CANÔNICA E ACESSIBILIDADE)
 * =====================================================================
 *
 * DECISÕES DE SEO E UX:
 * 1. Todos os links internos apontam para as URLs canônicas oficiais.
 * 2. Acessibilidade completa: aria-expanded, aria-label e atributos para leitores de tela.
 * 3. Botão do WhatsApp no topo integrado ao rastreamento unificado de conversão.
 */

import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se onNavigate foi passado (modo SPA interno)
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Dedetização', href: '/dedetizacao' },
    { label: 'Descupinização', href: '/descupinizacao' },
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1329]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Logo da Alpha Cupim */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Alpha Cupim - Página Inicial"
        >
          <img 
            src={BUSINESS_CONFIG.assets.logo} 
            alt="Alpha Cupim - Dedetização e Controle de Pragas em Juazeiro do Norte" 
            className="h-11 w-auto object-contain"
            width="140"
            height="44"
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação Principal">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`text-[14px] font-semibold transition-colors ${
                currentPath === item.href
                  ? 'text-blue-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTAs Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS_CONFIG.phone.telHref}
            className="flex items-center gap-2 text-slate-300 hover:text-white text-[14px] font-semibold transition-colors"
            aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>{BUSINESS_CONFIG.phone.display}</span>
          </a>

          <a
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'header_desktop', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[14px] px-4 py-2.5 rounded-xl shadow-sm transition-colors"
            id="btn-header-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
            <span>Orçamento Rápido</span>
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'header_mobile_icon', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-600 text-white rounded-lg flex items-center justify-center"
            aria-label="Abrir WhatsApp da Alpha Cupim"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1329] border-b border-slate-800 px-5 py-6">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-[16px] font-semibold py-1.5 flex items-center justify-between ${
                  currentPath === item.href ? 'text-blue-400' : 'text-slate-200'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={BUSINESS_CONFIG.phone.telHref}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white text-[15px] font-semibold py-3 rounded-xl border border-slate-700"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{BUSINESS_CONFIG.phone.display}</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleTrackedWhatsAppClick({ location: 'header_mobile_drawer', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e });
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white text-[15px] font-bold py-3.5 rounded-xl shadow-md"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
              <span>Solicitar Orçamento Grátis</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
