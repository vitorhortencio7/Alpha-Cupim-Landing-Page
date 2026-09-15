/**
 * =====================================================================
 * PÁGINA: ATENDIMENTO WHATSAPP (/falar-no-whatsapp)
 * =====================================================================
 *
 * DECISÕES DE SEO E CRO:
 * 1. robots="noindex,follow": Página utilitária de abertura de WhatsApp.
 * 2. Canonical apontando para si mesma (/falar-no-whatsapp).
 * 3. Fallback visual e rastreamento completo de conversão.
 */

import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
}

export const WhatsAppPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <>
      <SEO
        title="Falar no WhatsApp | Alpha Cupim Dedetizadora"
        description="Conecte-se diretamente com a equipe técnica da Alpha Cupim pelo WhatsApp para orçamentos e agendamentos no Cariri."
        canonicalPath="/falar-no-whatsapp"
        noIndex={true}
      />

      <div className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-5 text-center">
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[14px] text-slate-500 mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Atendimento via WhatsApp</span>
          </nav>

          <div className="bg-[#0b1329] rounded-3xl p-8 sm:p-14 text-white shadow-xl border border-slate-800 mb-10">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <MessageSquare className="w-8 h-8" />
            </div>

            <span className="inline-block bg-green-500/20 text-green-300 px-3.5 py-1 rounded-full text-[13px] font-bold uppercase tracking-wider mb-4">
              Atendimento Online
            </span>

            <h1 className="text-[28px] sm:text-[40px] font-extrabold leading-tight mb-4">
              Fale Agora com a Alpha Cupim no WhatsApp
            </h1>

            <p className="text-[16px] sm:text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Nossa equipe técnica atende Juazeiro do Norte, Crato e Barbalha. Tire suas dúvidas, solicite valores e agende sua visita gratuita.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_whatsapp_button', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[17px] px-10 py-4 rounded-xl shadow-lg transition-colors"
                id="btn-page-whatsapp-open"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-6 h-6" width="24" height="24" />
                <span>Abrir Conversa no WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-7 py-4 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Cards informativos */}
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <Clock className="w-6 h-6 text-blue-600 mb-2" />
              <h2 className="font-bold text-slate-900 text-[16px] mb-1">Resposta Ágil</h2>
              <p className="text-[14px] text-slate-600">Atendimento rápido por técnicos locais de Juazeiro do Norte.</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h2 className="font-bold text-slate-900 text-[16px] mb-1">Avaliação Gratuita</h2>
              <p className="text-[14px] text-slate-600">Inspeção no seu imóvel sem taxa de visita no Cariri.</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
              <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
              <h2 className="font-bold text-slate-900 text-[16px] mb-1">Garantia Contratual</h2>
              <p className="text-[14px] text-slate-600">Contrato e assistência técnica formal inclusos.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WhatsAppPage;
