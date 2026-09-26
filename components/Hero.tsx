/**
 * =====================================================================
 * HERO SECTION - HOMEPAGE (100% MOBILE-FIRST E CRO)
 * =====================================================================
 *
 * DECISÕES MOBILE-FIRST E CRO:
 * 1. Padding vertical ajustado: pt-20 pb-10 no mobile (otimizado para o header de 64px).
 * 2. Tipografia fluida: H1 text-2xl em telas pequenas para evitar quebra excessiva de linhas.
 * 3. Botões de ação em largura total no mobile com altura de 48px+ (thumb-zone).
 * 4. Imagem em proporção harmoniosa sem empurrar o conteúdo inicial excessivamente.
 */

import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';

interface HeroProps {
  onOpenQuote?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const keyGuarantees = [
    "Atendimento residencial e comercial",
    "Avaliação técnica e orçamento sem custos",
    "Tratamento direcionado para cada praga",
    "Garantia técnica formal por contrato",
  ];

  return (
    <section className="bg-[#0b1329] text-white pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            {/* Kicker Badge Mobile Responsivo */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-3 py-1.5 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-blue-200">
                Dedetizadora no Cariri • Juazeiro, Crato e Barbalha
              </span>
            </div>
            
            {/* H1 Principal Único da Homepage */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3 sm:mb-4">
              Dedetização Especializada em <span className="text-blue-400">Juazeiro do Norte</span>
            </h1>
            
            {/* Proposta de Valor Convincente */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6 max-w-2xl">
              Controle profissional de <strong className="text-white font-semibold">cupins, baratas, escorpiões e roedores</strong> para residências e empresas no Cariri. Aplicação técnica com produtos regularizados e acompanhamento especializado.
            </p>

            {/* Checklist de Diferenciais Verificáveis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              {keyGuarantees.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Botões de Ação (100% Thumb-Friendly no Mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <a 
                href="/orcamento-rapido"
                onClick={(e) => {
                  if (onOpenQuote) {
                    e.preventDefault();
                    onOpenQuote();
                  }
                }}
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base px-6 rounded-xl shadow-lg shadow-green-950/40 transition-all cursor-pointer"
                id="btn-hero-quote"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Solicitar Orçamento Grátis</span>
              </a>

              <a 
                href={BUSINESS_CONFIG.phone.telHref}
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-white font-semibold text-sm sm:text-base px-5 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para Alpha Cupim no número ${BUSINESS_CONFIG.phone.display}`}
                id="btn-hero-call"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>

            {/* Disponibilidade de Atendimento Regional */}
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>Atendimento em Juazeiro do Norte, Crato, Barbalha e cidades vizinhas</span>
            </div>
          </div>

          {/* Coluna Visual: Foto Profissional Proporcional */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={BUSINESS_CONFIG.assets.heroTechnician} 
                  alt="Técnico da Alpha Cupim uniformizado realizando controle de pragas em Juazeiro do Norte" 
                  className="w-full h-52 sm:h-64 lg:h-72 object-cover object-center" 
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="600"
                  height="320"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-[#0b1329]/95 border border-slate-700/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-white shadow">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-semibold">Equipe Técnica Própria</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">Inspeção no Local</div>
                  <div className="text-xs sm:text-sm text-slate-400">Avaliamos a infestação sem custos</div>
                </div>
                <div className="bg-blue-600/20 text-blue-300 font-bold text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-blue-500/30">
                  Visita Sem Custo
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
