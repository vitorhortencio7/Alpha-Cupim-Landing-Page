/**
 * =====================================================================
 * HOW IT WORKS SECTION (FLUXO CLARO DE ATENDIMENTO)
 * =====================================================================
 */

import React from 'react';
import { MessageCircle, Search, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const HowItWorks: React.FC = () => {
  const stepsData = [
    { 
      n: "1", 
      t: "Contato Rápido no WhatsApp", 
      d: "Envie sua dúvida ou descreva o problema. Nossa equipe em Juazeiro do Norte responde com agilidade.", 
      i: <MessageCircle className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "2", 
      t: "Inspeção e Orçamento Sem Custos", 
      d: "Agendamos uma avaliação presencial gratuita para diagnosticar os focos e o nível da infestação.", 
      i: <Search className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "3", 
      t: "Aplicação Técnica e Segura", 
      d: "Execução no dia e turno de sua preferência, com produtos regularizados e orientações de segurança.", 
      i: <ShieldCheck className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "4", 
      t: "Garantia e Laudo por Escrito", 
      d: "Entrega do Certificado de Garantia formal conforme o serviço contratado e assistência técnica no Cariri.", 
      i: <ClipboardCheck className="w-5 h-5 text-blue-600"/> 
    }
  ];

  return (
    <section id="como-funciona" className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">Etapas Claras</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Como Funciona o Atendimento da Alpha Cupim
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Em 4 etapas transparentes, seu imóvel recebe o diagnóstico e o tratamento adequado contra pragas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {stepsData.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                    {step.i}
                  </div>
                  <span className="text-sm font-extrabold text-blue-600/70">0{step.n}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">{step.t}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'how_it_works', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-sm sm:text-base px-7 rounded-xl shadow-md transition-colors"
            id="btn-how-it-works-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
            <span>Agendar Visita Gratuita Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
