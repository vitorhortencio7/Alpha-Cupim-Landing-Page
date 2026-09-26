/**
 * =====================================================================
 * FLOATING WHATSAPP BUTTON (CONVERSÃO RÁPIDA MOBILE E DESKTOP)
 * =====================================================================
 */

import React from 'react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 pb-safe">
      <a
        href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
        onClick={(e) => handleTrackedWhatsAppClick({ location: 'floating_widget', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-150 active:scale-95"
        aria-label="Falar com especialista da Alpha Cupim no WhatsApp"
        id="btn-floating-whatsapp"
      >
        <img 
          src={BUSINESS_CONFIG.whatsapp.iconUrl} 
          alt="WhatsApp" 
          className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow shrink-0"
          width="28"
          height="28"
        />
        <span className="hidden sm:inline-block text-xs sm:text-sm font-bold pr-1">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
