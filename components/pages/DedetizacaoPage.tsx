/**
 * =====================================================================
 * PÁGINA: DEDETIZAÇÃO EM JUAZEIRO DO NORTE (/dedetizacao) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { CheckCircle2, ArrowRight, Phone, Award } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const DedetizacaoPage: React.FC<PageProps> = ({ onNavigateHome, onNavigate }) => {
  return (
    <>
      <SEO
        title="Dedetização em Juazeiro do Norte | Alpha Cupim"
        description="Controle profissional de baratas, formigas, ratos, escorpiões e outras pragas em Juazeiro do Norte e região do Cariri."
        canonicalPath="/dedetizacao"
      />

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb com URLs Canônicas */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Dedetização</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-[#0b1329] rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white mb-8 sm:mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Controle de Pragas Urbanas no Cariri</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
              Dedetização em Juazeiro do Norte
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
              Controle profissional de <strong className="text-white font-semibold">baratas, escorpiões, formigas, aranhas e roedores</strong> para residências e estabelecimentos comerciais no Cariri. Formulações modernas regularizadas na Anvisa e garantia técnica contratual.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.dedetizacao)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_dedetizacao_hero', message: BUSINESS_CONFIG.whatsapp.messages.dedetizacao, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-7 rounded-xl shadow-md transition-colors"
                id="btn-dedetizacao-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Solicitar Orçamento Grátis</span>
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

          {/* Pragas e Diferenciais */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Pragas Controladas</h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Escorpiões e Aranhas:</strong> Aplicação técnica residual em ralos, caixas de passagem e frestas perimétricas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Baratas de Esgoto e Francesinhas:</strong> Uso de iscas em gel e pulverização dirigida aos focos de abrigo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Formigas Urbanas:</strong> Tratamento limpo com iscas atrativas sem necessidade de desocupar cômodos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pulgas e Carrapatos:</strong> Aplicação de alta residualidade em pisos, rodapés e áreas externas.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Padrões de Aplicação</h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Produtos Registrados na Anvisa:</strong> Princípios ativos autorizados e manipulados sob dosagem correta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Rápida Reocupação:</strong> Período médio de afastamento de 2 a 4 horas em aplicações de pulverização.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Garantia por Escrito:</strong> Assistência técnica formal durante o período estipulado no contrato.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Equipe Própria:</strong> Técnicos uniformizados e identificados em Juazeiro do Norte e Crajubar.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Link interno complementar */}
          <div className="mb-8 sm:mb-12 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Seu problema é com cupins em móveis, forros ou telhados?</h3>
              <p className="text-xs sm:text-sm text-slate-600">Acesse nossa página dedicada de descupinização especializada no Cariri.</p>
            </div>
            <a
              href="/descupinizacao"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/descupinizacao');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm whitespace-nowrap py-1"
            >
              <span>Ver Descupinização</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Call to action de rodapé */}
          <div className="p-5 sm:p-7 bg-blue-50/80 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">Agende sua Avaliação Técnica Sem Custos</h3>
              <p className="text-xs sm:text-sm text-slate-600">Atendimento em Juazeiro do Norte, Crato e Barbalha.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.dedetizacao)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_dedetizacao_bottom', message: BUSINESS_CONFIG.whatsapp.messages.dedetizacao, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-xs sm:text-sm px-6 rounded-xl shadow-sm whitespace-nowrap transition-colors"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
              <span>Chamar Especialista</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default DedetizacaoPage;
