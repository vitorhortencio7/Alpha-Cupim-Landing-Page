/**
 * =====================================================================
 * FINAL CTA SECTION (CHAMADA FINAL DE ALTA CONVERSÃO)
 * =====================================================================
 */

import React from 'react';
import { Phone, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

interface CTAProps {
  onOpenQuote?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="bg-[#0b1329] text-white py-12 sm:py-16 lg:py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-1.5 bg-blue-950/80 border border-blue-500/30 px-3 py-1 rounded-full mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs sm:text-sm font-semibold text-blue-200">
            Atendimento Rápido no Cariri
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 sm:mb-4">
          Solicite Sua Visita Técnica e Orçamento Sem Custos
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Fale diretamente com nossa equipe em Juazeiro do Norte pelo WhatsApp ou simule online em menos de 1 minuto com nosso formulário interativo.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6 sm:mb-8">
          <button 
            type="button"
            onClick={onOpenQuote}
            className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base px-6 rounded-xl shadow-lg shadow-green-950/40 transition-all cursor-pointer"
            id="btn-cta-final-quote"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Simular Orçamento Online</span>
          </button>

          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.cta_final)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'cta_final', message: BUSINESS_CONFIG.whatsapp.messages.cta_final, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-white font-bold text-sm sm:text-base px-6 rounded-xl border border-slate-700 transition-colors"
            id="btn-cta-final-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
            <span>Falar no WhatsApp</span>
          </a>

          <a 
            href={BUSINESS_CONFIG.phone.telHref}
            className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm px-5 rounded-xl border border-slate-700/60 transition-colors"
            aria-label={`Ligar para o telefone ${BUSINESS_CONFIG.phone.display}`}
            id="btn-cta-final-call"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
          </a>
        </div>

        <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
          <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Atendimento em Juazeiro do Norte, Crato, Barbalha e cidades vizinhas</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;
