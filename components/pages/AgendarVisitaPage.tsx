/**
 * =====================================================================
 * PÁGINA: AGENDAR VISITA TÉCNICA (/agendar-visita) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { Calendar, CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
}

export const AgendarVisitaPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <>
      <SEO
        title="Agendar Visita Gratuita | Alpha Cupim Dedetizadora"
        description="Agende uma inspeção técnica sem custos no seu imóvel em Juazeiro do Norte, Crato ou Barbalha com a Alpha Cupim."
        canonicalPath="/agendar-visita"
        noIndex={true}
      />

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Agendar Visita</span>
          </nav>

          {/* Hero */}
          <div className="bg-[#0b1329] rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white mb-8 sm:mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Visita Técnica Sem Custos</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
              Agende Sua Inspeção de Pragas e Orçamento Gratuito
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
              Nossos técnicos comparecem ao seu imóvel em Juazeiro do Norte, Crato ou Barbalha para avaliar os focos e apresentar o diagnóstico com preço justo e sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_agendar_visita_hero', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-7 rounded-xl shadow-md transition-colors"
                id="btn-agendar-visita-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Agendar Pelo WhatsApp Agora</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base px-5 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Passos e Benefícios */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Como Funciona a Avaliação</h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Agendamento Simples:</strong> Escolha a data e o melhor turno (manhã ou tarde).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Inspeção Minuciosa:</strong> Mapeamos rodapés, forros, frestas, ralos e caixas de gordura.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Diagnóstico Preciso:</strong> Explicamos qual é a espécie exata e o método técnico adequado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sem Surpresas:</strong> Orçamento claro, detalhado e com condições de pagamento facilitadas.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Garantias e Horários</h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Horário de Atendimento:</strong>
                    <p className="text-slate-600">{BUSINESS_CONFIG.openingHours.days}, das {BUSINESS_CONFIG.openingHours.hours}.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Segurança Sanitária:</strong>
                    <p className="text-slate-600">Equipe uniformizada, com EPIs e produtos devidamente regularizados pela Anvisa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AgendarVisitaPage;
