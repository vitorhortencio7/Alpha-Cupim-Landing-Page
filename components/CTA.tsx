/**
 * =====================================================================
 * FINAL CTA SECTION (CHAMADA FINAL DE ALTA CONVERSÃO)
 * =====================================================================
 */

import React from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const CTA: React.FC = () => {
  return (
    <section className="bg-[#0b1329] text-white py-16 lg:py-20 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-5 text-center">
        
        <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-[14px] font-semibold text-blue-200">
            Atendimento Rápido no Cariri
          </span>
        </div>

        <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-white leading-tight mb-5">
          Solicite Sua Visita Técnica e Orçamento Sem Custos
        </h2>

        <p className="text-[16px] lg:text-[18px] text-slate-300 max-w-2xl mx-auto mb-8 leading-[1.65]">
          Fale diretamente com nossa equipe em Juazeiro do Norte pelo WhatsApp. Informamos valores, tiramos dúvidas sobre segurança e agendamos o melhor horário para você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.cta_final)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'cta_final', message: BUSINESS_CONFIG.whatsapp.messages.cta_final, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] lg:text-[17px] px-8 py-4 rounded-xl shadow-lg transition-colors"
            id="btn-cta-final-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a 
            href={BUSINESS_CONFIG.phone.telHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
            aria-label={`Ligar para o telefone ${BUSINESS_CONFIG.phone.display}`}
            id="btn-cta-final-call"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-slate-400 text-[14px]">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span>Atendimento em Juazeiro do Norte, Crato, Barbalha e cidades vizinhas</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;
