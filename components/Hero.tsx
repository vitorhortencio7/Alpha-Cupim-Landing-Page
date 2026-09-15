/**
 * =====================================================================
 * HERO SECTION - HOMEPAGE (FOCO EM CONVERSÃO E SEO LOCAL)
 * =====================================================================
 *
 * DECISÕES DE SEO E CRO:
 * 1. H1 Único: "Dedetização Especializada em Juazeiro do Norte".
 *    Contém a palavra-chave primária exata de maior volume no Google Ads/Orgânico.
 * 2. Mensagem Semântica: O subtítulo posiciona o controle de pragas no Cariri
 *    e destaca cupins, baratas, escorpiões e roedores tanto para residências quanto empresas.
 * 3. Prevenção de Alegações Exageradas:
 *    - Substituído "nº 1 do Cariri" e "+2.500 clientes" por posicionamento de autoridade real.
 *    - Substituído "Técnicos certificados Anvisa" por "Equipe Técnica Especializada"
 *      (a Anvisa regulamenta produtos saneantes, não emite certificados para indivíduos).
 *    - Garantia apresentada de forma responsável ("Garantia técnica conforme o serviço contratado").
 * 4. Tracking do Google Ads / GTM:
 *    O clique no botão principal aciona `handleTrackedWhatsAppClick({ location: 'hero' })`
 *    com identificação de origem e proteção anti double-firing.
 */

import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const Hero: React.FC = () => {
  const keyGuarantees = [
    "Atendimento residencial e comercial",
    "Avaliação técnica e orçamento sem custos",
    "Tratamento adequado para cada tipo de praga",
    "Garantia técnica conforme o serviço contratado",
  ];

  return (
    <section className="bg-[#0b1329] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            {/* Trust badge responsável */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full mb-5">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-[14px] font-semibold text-blue-200">
                Dedetização Profissional em Juazeiro do Norte e Cariri
              </span>
            </div>
            
            {/* H1 Principal Único da Homepage */}
            <h1 className="text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold text-white leading-[1.2] tracking-tight mb-5">
              Dedetização Especializada em <span className="text-blue-400">Juazeiro do Norte</span>
            </h1>
            
            {/* Proposta de Valor Convincente e Responsável */}
            <p className="text-[16px] lg:text-[18px] text-slate-300 leading-[1.65] font-normal mb-7 max-w-2xl">
              Controle profissional de <strong className="text-white font-semibold">cupins, baratas, escorpiões e roedores</strong> para residências e empresas no Cariri. Aplicação técnica com produtos regularizados e acompanhamento especializado.
            </p>

            {/* Checklist de Diferenciais Verificáveis */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {keyGuarantees.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-[14px] lg:text-[15px] text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Botões de Ação (CRO) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a 
                href={BUSINESS_CONFIG.whatsapp.defaultMessage ? `https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}` : '#'}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'hero', message: BUSINESS_CONFIG.whatsapp.messages.hero, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] lg:text-[17px] px-7 py-4 rounded-xl shadow-lg transition-colors"
                id="btn-hero-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Solicitar Orçamento Grátis</span>
              </a>

              <a 
                href={BUSINESS_CONFIG.phone.telHref}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-5 py-4 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para Alpha Cupim no número ${BUSINESS_CONFIG.phone.display}`}
                id="btn-hero-call"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>

            {/* Disponibilidade de Atendimento Regional */}
            <div className="flex items-center gap-2 text-slate-400 text-[14px]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>Consulte a disponibilidade de atendimento para sua região em Juazeiro do Norte e Cariri</span>
            </div>
          </div>

          {/* Coluna Visual: Foto Profissional com Atributos Anti-CLS */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={BUSINESS_CONFIG.assets.heroTechnician} 
                  alt="Técnico da Alpha Cupim uniformizado realizando controle de pragas em Juazeiro do Norte" 
                  className="w-full h-72 sm:h-80 object-cover object-center" 
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="600"
                  height="320"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#0b1329]/95 border border-slate-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white shadow">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-[13px] font-semibold">Equipe Técnica Especializada</span>
                </div>
              </div>
              
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[16px] font-bold text-white">Inspeção no Local</div>
                  <div className="text-[14px] text-slate-400">Avaliamos o nível da infestação sem custos</div>
                </div>
                <div className="bg-blue-600/20 text-blue-300 font-bold text-[14px] px-3 py-1.5 rounded-lg border border-blue-500/30">
                  Orçamento Grátis
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
