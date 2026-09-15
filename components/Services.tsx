/**
 * =====================================================================
 * SERVICES SECTION (SERVIÇOS DE DEDETIZAÇÃO E DESCUPINIZAÇÃO)
 * =====================================================================
 *
 * DECISÕES DE CRO E SEO:
 * 1. Cupim destacado como especialidade estratégica da empresa.
 * 2. Links internos usando URLs canônicas (/dedetizacao e /descupinizacao)
 *    para distribuir autoridade e facilitar a navegação do usuário.
 * 3. CTAs com mensagens contextualizadas por praga/serviço.
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
    <section id="servicos" className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Serviços Especializados</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Soluções Completas em Controle de Pragas no Cariri
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-2xl mx-auto leading-[1.65]">
            Atendimento residencial e comercial em Juazeiro do Norte, Crato e Barbalha com visita técnica e orçamento sem compromisso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((s, i) => (
            <div 
              key={i}
              className="bg-slate-50 p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 text-[12px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                  {s.badge}
                </div>
                <h3 className="text-[19px] lg:text-[21px] font-bold text-slate-900 mb-3 leading-snug">{s.title}</h3>
                <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.6] mb-5">{s.desc}</p>
                
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-200/80">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <a 
                  href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(s.message)}`}
                  onClick={(e) => handleTrackedWhatsAppClick({ location: `service_card_${i}`, message: s.message, event: e })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[14px] py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <span>Pedir Orçamento Grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {s.canonicalHref && (
                  <a
                    href={s.canonicalHref}
                    className="w-full text-center block text-[13px] font-semibold text-slate-500 hover:text-blue-600 py-1 transition-colors"
                  >
                    Saiba mais sobre este serviço →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-10 p-6 bg-blue-50/80 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-[16px] font-bold text-slate-900">Precisa de avaliação para sua residência ou empresa?</h3>
            <p className="text-[14px] text-slate-600">Nossa equipe atende Juazeiro do Norte e toda a região do Cariri.</p>
          </div>
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'services_banner', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[14px] px-5 py-3 rounded-xl shadow-sm whitespace-nowrap transition-colors"
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
