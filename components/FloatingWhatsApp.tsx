
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      <div className="bg-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
          Online Agora
        </span>
      </div>
      <a 
        href={WHATSAPP_LINK}
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl border-4 border-white p-3.5 active:scale-95"
        aria-label="Falar com a Alpha Cupim no WhatsApp"
      >
        <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-full h-full object-contain" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;

