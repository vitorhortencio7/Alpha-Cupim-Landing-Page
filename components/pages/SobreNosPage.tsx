/**
 * =====================================================================
 * PÁGINA: SOBRE A ALPHA CUPIM (/sobre-nos) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { Award, CheckCircle2, Star } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const SobreNosPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <>
      <SEO
        title="Sobre a Alpha Cupim | Controle de Pragas no Cariri"
        description="Conheça a história, valores e equipe técnica especializada da Alpha Cupim Dedetização em Juazeiro do Norte e região do Cariri."
        canonicalPath="/sobre-nos"
      />

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Sobre Nós</span>
          </nav>

          {/* Hero */}
          <div className="bg-[#0b1329] rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white mb-8 sm:mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Controle Especializado de Pragas Urbanas</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 sm:mb-4">
              Sobre a Alpha Cupim Dedetização
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
              Atuamos na proteção de residências, condomínios, estabelecimentos comerciais e indústrias no Cariri cearense com metodologia técnica, produtos autorizados pela Anvisa e foco em segurança sanitária.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-800">
              <div>
                <div className="text-lg sm:text-xl font-bold text-blue-400">Regional</div>
                <div className="text-xs text-slate-300">Base em Juazeiro do Norte</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-amber-400">Verificado</div>
                <div className="text-xs text-slate-300">Perfil Google Empresas</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400">Contratual</div>
                <div className="text-xs text-slate-300">Garantia por Escrito</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Crajubar</div>
                <div className="text-xs text-slate-300">Orçamento Sem Custos</div>
              </div>
            </div>
          </div>

          {/* História & Valores */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">Nossa Proposta de Valor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Compromisso Técnico e Transparência
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                A Alpha Cupim se destaca na região do Cariri pelo atendimento pontual e pela clareza nas orientações prestadas a cada cliente. Entendemos que o controle de pragas exige rigor técnico, diagnóstico correto da espécie e respeito às pessoas e animais que habitam o imóvel.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Trabalhamos exclusivamente com produtos saneantes de fabricantes reconhecidos e aprovados pela Anvisa, assegurando rápida liberação do ambiente seguindo as orientações passadas por nossos técnicos.
              </p>

              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Emissão de Ordem de Serviço e Certificado de Execução.</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Equipe própria, uniformizada e com equipamentos de proteção.</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Visita técnica gratuita para avaliação em Juazeiro do Norte, Crato e Barbalha.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
              <img 
                src={BUSINESS_CONFIG.assets.heroTechnician} 
                alt="Equipe técnica da Alpha Cupim em atendimento no Cariri"
                className="w-full h-64 sm:h-72 object-cover"
                loading="lazy"
                decoding="async"
                width="500"
                height="320"
              />
              <div className="p-4 sm:p-5 bg-slate-900 text-white">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Atendimento Humanizado e Responsável</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consulte as opiniões reais de quem já contratou a Alpha Cupim no nosso Perfil da Empresa no Google.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-5 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">Deseja solicitar uma avaliação no seu imóvel?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-xl mx-auto">
              Nossos especialistas estão à disposição no WhatsApp para agendar sua inspeção gratuita no Cariri.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_sobre_nos_bottom', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-xs sm:text-sm px-7 rounded-xl shadow-md transition-colors"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
              <span>Falar com a Alpha Cupim no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default SobreNosPage;
