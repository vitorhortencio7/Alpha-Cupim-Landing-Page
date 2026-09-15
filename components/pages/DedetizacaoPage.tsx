/**
 * =====================================================================
 * PÁGINA: DEDETIZAÇÃO EM JUAZEIRO DO NORTE (/dedetizacao)
 * =====================================================================
 *
 * DECISÕES DE SEO E CRO:
 * 1. Title: "Dedetização em Juazeiro do Norte | Alpha Cupim"
 * 2. Canonical próprio: https://alphacupim.com.br/dedetizacao
 * 3. H1 Exato: "Dedetização em Juazeiro do Norte"
 * 4. Botão de WhatsApp rápido acima da dobra para mobile.
 * 5. Link interno para o serviço complementar de descupinização (/descupinizacao).
 */

import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Clock, MapPin, Award } from 'lucide-react';
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

      <div className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-5">
          
          {/* Breadcrumb com URLs Canônicas */}
          <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Dedetização</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Controle de Pragas Urbanas no Cariri</span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
              Dedetização em Juazeiro do Norte
            </h1>

            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
              Controle profissional de <strong className="text-white">baratas, escorpiões, formigas, aranhas e roedores</strong> para residências e estabelecimentos comerciais no Cariri. Formulações modernas regularizadas na Anvisa e garantia técnica contratual.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.dedetizacao)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_dedetizacao_hero', message: BUSINESS_CONFIG.whatsapp.messages.dedetizacao, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
                id="btn-dedetizacao-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Solicitar Orçamento Grátis</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Pragas e Diferenciais */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
              <h2 className="text-[22px] font-bold text-slate-900 mb-4">Pragas Controladas</h2>
              <ul className="space-y-3.5 text-[15px] text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Escorpiões e Aranhas:</strong> Aplicação técnica residual em ralos, caixas de passagem e frestas perimétricas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Baratas de Esgoto e Francesinhas:</strong> Uso de iscas em gel e pulverização dirigida aos focos de abrigo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Formigas Urbanas:</strong> Tratamento limpo com iscas atrativas sem necessidade de lavar louças ou desocupar cômodos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pulgas e Carrapatos:</strong> Aplicação de alta residualidade em pisos, rodapés e áreas externas.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
              <h2 className="text-[22px] font-bold text-slate-900 mb-4">Padrões de Aplicação</h2>
              <ul className="space-y-3.5 text-[15px] text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Produtos Registrados na Anvisa:</strong> Princípios ativos autorizados e manipulados sob dosagem correta.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Rápida Reocupação:</strong> Período médio de afastamento de 2 a 4 horas em aplicações de pulverização.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Garantia por Escrito:</strong> Assistência técnica formal durante o período estipulado no contrato.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Equipe Própria:</strong> Técnicos uniformizados e identificados em Juazeiro do Norte e Crajubar.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Link interno complementar */}
          <div className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-[17px] font-bold text-slate-900">Seu problema é com cupins em móveis, forros ou telhados?</h3>
              <p className="text-[14px] text-slate-600">Acesse nossa página dedicada de descupinização especializada no Cariri.</p>
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
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-[14px] whitespace-nowrap"
            >
              <span>Ver Descupinização</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Call to action de rodapé */}
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 mb-1">Agende sua Avaliação Técnica Sem Custos</h3>
              <p className="text-[15px] text-slate-600">Atendimento em Juazeiro do Norte, Crato e Barbalha.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.dedetizacao)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_dedetizacao_bottom', message: BUSINESS_CONFIG.whatsapp.messages.dedetizacao, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-6 py-3.5 rounded-xl shadow-sm whitespace-nowrap transition-colors"
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
