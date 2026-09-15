/**
 * =====================================================================
 * FLOATING WHATSAPP BUTTON (CONVERSÃO RÁPIDA MOBILE E DESKTOP)
 * =====================================================================
 *
 * DECISÕES DE CRO E RASTREAMENTO:
 * 1. Posição fixa no canto inferior direito com z-index alto sem sobrepor formulários.
 * 2. Integração com handleTrackedWhatsAppClick({ location: 'floating_widget' }).
 * 3. Fallback de link padrão caso o usuário abra em nova aba ou com restrições de script.
 */

import React from 'react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
        onClick={(e) => handleTrackedWhatsAppClick({ location: 'floating_widget', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-4 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
        aria-label="Falar com especialista da Alpha Cupim no WhatsApp"
        id="btn-floating-whatsapp"
      >
        <img 
          src={BUSINESS_CONFIG.whatsapp.iconUrl} 
          alt="WhatsApp" 
          className="w-7 h-7 drop-shadow"
          width="28"
          height="28"
        />
        <span className="hidden sm:inline-block text-[14px] font-bold pr-1">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
