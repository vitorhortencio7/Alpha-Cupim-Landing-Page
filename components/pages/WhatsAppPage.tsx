/**
 * =====================================================================
 * PÁGINA: ATENDIMENTO WHATSAPP (/falar-no-whatsapp) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Clock } from 'lucide-react';
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

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Atendimento via WhatsApp</span>
          </nav>

          <div className="bg-[#0b1329] rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white shadow-xl border border-slate-800 mb-8 sm:mb-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Atendimento Online
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
              Fale Agora com a Alpha Cupim no WhatsApp
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-6">
              Nossa equipe técnica atende Juazeiro do Norte, Crato e Barbalha. Tire suas dúvidas, solicite valores e agende sua visita gratuita.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_whatsapp_button', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-8 rounded-xl shadow-lg transition-colors"
                id="btn-page-whatsapp-open"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Abrir Conversa no WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base px-6 rounded-xl border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 max-w-xl mx-auto text-left text-xs sm:text-sm text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{BUSINESS_CONFIG.openingHours.days}, das {BUSINESS_CONFIG.openingHours.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resposta ágil para orçamentos e dúvidas técnicas no Cariri</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WhatsAppPage;
