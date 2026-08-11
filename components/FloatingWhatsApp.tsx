
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const FloatingWhatsApp: React.FC = () => {

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-blue-50 flex items-center gap-2 pointer-events-auto">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest">
          Online Agora
        </span>
      </div>
      <a 
        href={WHATSAPP_LINK}
        onClick={handleWhatsAppClick}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse pointer-events-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all border-4 border-white p-3 hover:scale-110 active:scale-95"
        aria-label="WhatsApp Alpha"
      >
        <img src={WHATSAPP_ICON} alt="WA" className="w-full h-full object-contain" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
