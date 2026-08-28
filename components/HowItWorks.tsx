
import React from 'react';
import { MessageCircle, Search, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const HowItWorks: React.FC = () => {
  const stepsData = [
    { 
      n: "1", 
      t: "Contato Rápido no WhatsApp", 
      d: "Envie sua dúvida ou descreva o problema. Nossa equipe em Juazeiro do Norte responde em poucos minutos.", 
      i: <MessageCircle className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "2", 
      t: "Inspeção e Diagnóstico Gratuito", 
      d: "Agendamos uma visita técnica sem custos para identificar os focos exatos e o tipo de infestação.", 
      i: <Search className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "3", 
      t: "Aplicação Segura e Inodora", 
      d: "Execução no dia e horário de sua preferência, com produtos sem cheiro e seguros para sua família.", 
      i: <ShieldCheck className="w-5 h-5 text-blue-600"/> 
    },
    { 
      n: "4", 
      t: "Garantia e Laudo por Escrito", 
      d: "Entrega do certificado com garantia de até 1 ano e assistência técnica inclusa em todo o Cariri.", 
      i: <ClipboardCheck className="w-5 h-5 text-blue-600"/> 
    }
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 px-5 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Etapas Claras e Fáceis</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Como Funciona o Atendimento da Alpha Cupim
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Em apenas 4 passos descomplicados, seu imóvel fica protegido contra qualquer tipo de praga.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stepsData.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    {step.i}
                  </div>
                  <span className="text-[18px] font-extrabold text-blue-600/70">0{step.n}</span>
                </div>
                <h3 className="text-[18px] lg:text-[20px] font-bold text-slate-900 mb-2 leading-snug">{step.t}</h3>
                <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.6]">{step.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
            <span>Agendar Visita Gratuita Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

