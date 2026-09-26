/**
 * =====================================================================
 * PÁGINA DEDICADA: ORÇAMENTO RÁPIDO (/orcamento-rapido) - MOBILE-FIRST
 * =====================================================================
 */

import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Star,
  Sparkles
} from 'lucide-react';
import { SEO } from '../SEO';
import { OrcamentoRapidoForm } from '../OrcamentoRapidoForm';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';

interface OrcamentoRapidoPageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const OrcamentoRapidoPage: React.FC<OrcamentoRapidoPageProps> = ({ 
  onNavigateHome,
}) => {
  const trustHighlights = [
    "Orçamento 100% gratuito e sem compromisso",
    "Atendimento rápido em Juazeiro do Norte, Crato e Barbalha",
    "Produtos regularizados pela Anvisa e Ministério da Saúde",
    "Garantia técnica documentada por escrito no contrato",
  ];

  return (
    <>
      <SEO
        title="Orçamento Rápido Online | Alpha Cupim Dedetizadora"
        description="Solicite seu orçamento gratuito e personalizado em poucos segundos. Controle de cupins, baratas, ratos e escorpiões em Juazeiro do Norte e Cariri."
        canonicalPath="/orcamento-rapido"
      />

      <div className="pt-20 pb-12 sm:pt-28 sm:pb-20 bg-[#080d1a] min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb de navegação */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6" aria-label="Navegação Estrutural">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-blue-400 font-medium transition-colors"
            >
              Início
            </button>
            <span>/</span>
            <span className="text-white font-semibold">Orçamento Rápido</span>
          </nav>

          {/* Cabeçalho de Campanha (Visual Mobile-First) */}
          <div className="text-left mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 bg-blue-950/80 border border-blue-500/30 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-bold text-blue-200">
                Atendimento Rápido no Cariri
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-2">
              Seu orçamento personalizado em <span className="text-blue-400">menos de 1 minuto</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Elimine cupins, baratas, ratos ou escorpiões. Preencha o formulário e receba a proposta sem custos no seu WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* O FORMULÁRIO EM DESTAQUE */}
            <div className="lg:col-span-7 w-full">
              <OrcamentoRapidoForm 
                isModal={false} 
                sourceLocation="landing_page_orcamento_rapido"
              />
            </div>

            {/* PROVAS SOCIAIS E SEGURANÇA */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Card de Avaliação Google */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-md">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-white">4.9 de avaliação no Google</div>
                  <div className="text-xs text-slate-400">Dedetizadora recomendada no Cariri</div>
                </div>
                <div className="text-right">
                  <ShieldCheck className="w-8 h-8 text-blue-400 inline-block" />
                </div>
              </div>

              {/* Destaques de Confiança */}
              <div className="space-y-2">
                {trustHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-900/50 border border-slate-800/70 rounded-xl p-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Fallback de Ligação Telefônica Direta */}
              <div className="p-3.5 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  Prefere ligar agora?{' '}
                  <a 
                    href={BUSINESS_CONFIG.phone.telHref} 
                    className="text-blue-400 hover:text-blue-300 font-bold underline"
                  >
                    {BUSINESS_CONFIG.phone.display}
                  </a>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default OrcamentoRapidoPage;
