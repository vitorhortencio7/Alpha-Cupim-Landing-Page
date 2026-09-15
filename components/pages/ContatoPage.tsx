/**
 * =====================================================================
 * PÁGINA: CONTATO E ATENDIMENTO (/contato)
 * =====================================================================
 *
 * DECISÕES DE SEO E CRO:
 * 1. Title: "Contato | Alpha Cupim Dedetizadora"
 * 2. Canonical: https://alphacupim.com.br/contato
 * 3. H1: "Fale com a Alpha Cupim Dedetização"
 * 4. Canais oficiais centralizados de businessConfig com rastreamento Google Ads.
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

      <div className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-5">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contato</span>
          </nav>

          {/* Hero */}
          <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
              <Clock className="w-4 h-4 text-green-400" />
              <span>Atendimento Comercial e Orçamentos</span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
              Fale com a Alpha Cupim Dedetização
            </h1>

            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
              Precisa de um orçamento, tirar dúvidas técnicas ou solicitar uma avaliação no Cariri? Nossos canais oficiais estão disponíveis para atender você com pontualidade.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_contato_hero', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
                id="btn-contato-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Chamar no WhatsApp: {BUSINESS_CONFIG.phone.display}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Cards de Contato */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-[18px] font-bold text-slate-900 mb-1">WhatsApp Principal</h2>
                <p className="text-[14px] text-slate-600 mb-4">Atendimento rápido para solicitação de orçamentos e agendamento de inspeções.</p>
              </div>
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_contato_card_wa', event: e })}
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-green-600 hover:text-green-700 text-[15px]"
              >
                {BUSINESS_CONFIG.phone.display} →
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-[18px] font-bold text-slate-900 mb-1">Telefone Comercial</h2>
                <p className="text-[14px] text-slate-600 mb-4">Atendimento telefônico de segunda a sábado das {BUSINESS_CONFIG.openingHours.hours}.</p>
              </div>
              <a 
                href={BUSINESS_CONFIG.phone.telHref} 
                className="font-bold text-blue-600 hover:text-blue-700 text-[15px]"
              >
                {BUSINESS_CONFIG.phone.display} →
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-[18px] font-bold text-slate-900 mb-1">E-mail Corporativo</h2>
                <p className="text-[14px] text-slate-600 mb-4">Envio de solicitações para empresas, condomínios e documentação sanitária.</p>
              </div>
              <a 
                href={`mailto:${BUSINESS_CONFIG.email}`} 
                className="font-bold text-purple-600 hover:text-purple-700 text-[15px]"
              >
                {BUSINESS_CONFIG.email} →
              </a>
            </div>

          </div>

          {/* Localização e Cobertura */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-[19px] font-bold text-slate-900 mb-2">Base Operacional e Regiões Atendidas</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                  Com base em {BUSINESS_CONFIG.location.city} - {BUSINESS_CONFIG.location.state}, prestamos atendimento em toda a Região do Cariri:
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_CONFIG.location.citiesServed.map((city, idx) => (
                    <span key={idx} className="bg-white border border-slate-300 text-slate-700 px-3 py-1 rounded-lg text-[13px] font-medium">
                      📍 {city}
                    </span>
                  ))}
                  <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-lg text-[13px] font-bold">
                    Região do Crajubar
                  </span>
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
