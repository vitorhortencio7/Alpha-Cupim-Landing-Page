/**
 * =====================================================================
 * SERVICES SECTION (SERVIÇOS DE DEDETIZAÇÃO E DESCUPINIZAÇÃO)
 * =====================================================================
 */

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const Services: React.FC = () => {
  const list = [
    { 
      title: "Dedetização Geral e Escorpiões", 
      badge: "Mais Solicitado",
      desc: "Controle especializado de baratas, escorpiões, formigas e aranhas com produtos de ação residual e retorno seguro ao ambiente.", 
      items: ["Aplicação técnica orientada", "Produtos regularizados Anvisa", "Garantia formal por escrito"],
      canonicalHref: "/dedetizacao",
      message: BUSINESS_CONFIG.whatsapp.messages.dedetizacao
    },
    { 
      title: "Descupinização Especializada", 
      badge: "Especialidade Alpha",
      desc: "Tratamento localizado e barreiras protetoras contra cupins de madeira seca e cupins de solo, preservando telhados e móveis.", 
      items: ["Barreira química protetora", "Preservação de estruturas", "Aplicação limpa e precisa"],
      canonicalHref: "/descupinizacao",
      message: BUSINESS_CONFIG.whatsapp.messages.descupinizacao
    },
    { 
      title: "Desratização e Roedores", 
      badge: "Controle Seguro",
      desc: "Mapeamento estratégico e controle de roedores com porta-iscas blindados e monitoramento para residências e comércios.", 
      items: ["Iscas atrativas lacradas", "Mapeamento de acessos", "Prevenção contínua"],
      canonicalHref: "/contato",
      message: "Olá! Gostaria de um orçamento para desratização e controle de roedores."
    },
    { 
      title: "Controle Comercial e Laudos", 
      badge: "Exigência Sanitária",
      desc: "Emissão de Laudo Técnico, Certificado de Execução e Ordem de Serviço para comércios, clínicas, indústrias e vigilância.", 
      items: ["Documentação oficial emitida", "Responsável técnico habilitado", "Adequação a normas sanitárias"],
      canonicalHref: "/contato",
      message: "Olá! Gostaria de uma proposta para controle de pragas comercial e emissão de laudo técnico."
    }
  ];

  return (
    <section id="servicos" className="py-10 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1.5">Serviços Especializados</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Soluções Completas em Controle de Pragas no Cariri
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Atendimento residencial e comercial em Juazeiro do Norte, Crato e Barbalha com visita técnica e orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {list.map((s, i) => (
            <div 
              key={i}
              className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-3">
                  {s.badge}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                
                <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-200/80">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <a 
                  href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(s.message)}`}
                  onClick={(e) => handleTrackedWhatsAppClick({ location: `service_card_${i}`, message: s.message, event: e })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
                >
                  <span>Pedir Orçamento Grátis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {s.canonicalHref && (
                  <a
                    href={s.canonicalHref}
                    className="w-full text-center block text-xs font-semibold text-slate-500 hover:text-blue-600 py-1 transition-colors"
                  >
                    Saiba mais sobre este serviço →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner Mobile-First */}
        <div className="mt-8 p-4 sm:p-5 bg-blue-50/80 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 text-center sm:text-left">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">Precisa de avaliação para sua residência ou empresa?</h3>
            <p className="text-xs sm:text-sm text-slate-600">Nossa equipe atende Juazeiro do Norte e toda a região do Cariri.</p>
          </div>
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'services_banner', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-12 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-xs sm:text-sm px-5 rounded-xl shadow-sm whitespace-nowrap transition-colors"
            id="btn-services-banner-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
            <span>Falar com Técnico Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
