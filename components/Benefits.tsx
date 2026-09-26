/**
 * =====================================================================
 * BENEFITS SECTION (DIFERENCIAIS VERIFICÁVEIS)
 * =====================================================================
 */

import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const Benefits: React.FC = () => {
  const benefitsList = [
    { 
      title: "Visita Técnica e Orçamento Sem Custos", 
      desc: "Nossos especialistas comparecem ao seu endereço em Juazeiro do Norte, Crato ou Barbalha para avaliar a infestação e formular o orçamento sem cobrança de deslocamento." 
    },
    { 
      title: "Produtos Regularizados na Anvisa", 
      desc: "Utilizamos princípios ativos autorizados pelo Ministério da Saúde e pela Anvisa, com métodos direcionados para permitir um retorno seguro ao imóvel." 
    },
    { 
      title: "Garantia Técnica por Escrito", 
      desc: "Você recebe contrato e Certificado de Garantia formal conforme o serviço contratado. Em caso de reincidência durante a vigência, prestamos assistência técnica." 
    },
    { 
      title: "Documentação e Laudo Técnico", 
      desc: "Emitimos ordem de serviço e documentação sanitária com especificação dos produtos e métodos empregados, atendendo às fiscalizações sanitárias." 
    }
  ];

  return (
    <section id="beneficios" className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">Diferenciais Alpha Cupim</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
                Por Que Escolher a Alpha Cupim no Cariri?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Atendimento humanizado, pontualidade e técnicas modernas de controle para manter sua residência ou empresa protegida contra pragas urbanas.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs sm:text-sm shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'benefits', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-7 rounded-xl shadow-md transition-colors"
                id="btn-benefits-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Agendar Minha Visita Gratuita</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
              <img 
                src={BUSINESS_CONFIG.assets.teamPhoto} 
                alt="Equipe técnica da Alpha Cupim uniformizada para controle de pragas no Cariri" 
                className="w-full h-60 sm:h-72 lg:h-80 object-cover object-top" 
                loading="lazy"
                decoding="async"
                width="500"
                height="384"
              />
              <div className="p-4 sm:p-5 bg-[#0b1329] text-white">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  <span className="text-xs font-bold text-amber-300">Compromisso e Profissionalismo</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5">
                  "Nossa equipe atua uniformizada, identificada e com equipamentos de proteção individual para garantir segurança técnica e discrição no seu imóvel."
                </p>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Equipe Técnica • Alpha Cupim Cariri</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
