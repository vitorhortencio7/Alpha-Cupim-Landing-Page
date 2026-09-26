/**
 * =====================================================================
 * PÁGINA: CONTATO E ATENDIMENTO (/contato) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
}

export const ContatoPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <>
      <SEO
        title="Contato | Alpha Cupim Dedetizadora"
        description="Fale com a Alpha Cupim Dedetização em Juazeiro do Norte e região do Cariri. Atendimento via WhatsApp, telefone e orçamento gratuito."
        canonicalPath="/contato"
      />

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contato</span>
          </nav>

          {/* Hero */}
          <div className="bg-[#0b1329] rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white mb-8 sm:mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 text-green-400" />
              <span>Atendimento Comercial e Orçamentos</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
              Fale com a Alpha Cupim Dedetização
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
              Precisa de um orçamento, tirar dúvidas técnicas ou solicitar uma avaliação no Cariri? Nossos canais oficiais estão disponíveis para atender você com pontualidade.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_contato_hero', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-7 rounded-xl shadow-md transition-colors"
                id="btn-contato-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Chamar no WhatsApp: {BUSINESS_CONFIG.phone.display}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base px-5 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Cards de Contato */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 mb-8 sm:mb-12">
            
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">WhatsApp Principal</h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">Atendimento rápido para solicitação de orçamentos e agendamento de inspeções.</p>
              </div>
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_contato_card_wa', event: e })}
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-green-600 hover:text-green-700 text-xs sm:text-sm"
              >
                {BUSINESS_CONFIG.phone.display} →
              </a>
            </div>

            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Telefone Comercial</h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">Atendimento telefônico de segunda a sábado das {BUSINESS_CONFIG.openingHours.hours}.</p>
              </div>
              <a 
                href={BUSINESS_CONFIG.phone.telHref} 
                className="font-bold text-blue-600 hover:text-blue-700 text-xs sm:text-sm"
              >
                {BUSINESS_CONFIG.phone.display} →
              </a>
            </div>

            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">E-mail Corporativo</h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">Envio de solicitações para empresas, condomínios e documentação sanitária.</p>
              </div>
              <a 
                href={`mailto:${BUSINESS_CONFIG.email}`} 
                className="font-bold text-purple-600 hover:text-purple-700 text-xs sm:text-sm"
              >
                {BUSINESS_CONFIG.email} →
              </a>
            </div>

          </div>

          {/* Localização e Cobertura */}
          <div className="bg-slate-50 p-5 sm:p-7 rounded-2xl border border-slate-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Área de Atendimento Presencial</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Atendemos presencialmente em <strong className="text-slate-800">Juazeiro do Norte, Crato, Barbalha, Missão Velha, Brejo Santo</strong> e regiões adjacentes do Cariri cearense com avaliação técnica no local.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Empresa regularizada • Responsável técnico capacitado</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContatoPage;
