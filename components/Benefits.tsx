
import React from 'react';
import { Shield, FileText, CheckCircle2, Zap, Star } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const Benefits: React.FC = () => {
  const TEAM_PHOTO = "https://i.ibb.co/kshG4frj/Imagem-do-Whats-App-de-2024-12-04-s-11-30-26-afd6ea56.png"; 

  const benefitsList = [
    { 
      title: "Visita Técnica e Orçamento 100% Gratuitos", 
      desc: "Nossos técnicos vão até seu endereço em Juazeiro do Norte, Crato ou Barbalha, identificam os focos de infestação e elaboram o orçamento sem você pagar nada pela visita." 
    },
    { 
      title: "Fórmulas Inodoras e Seguras para Pets e Crianças", 
      desc: "Trabalhamos com princípios ativos de última geração autorizados pela Anvisa, que não deixam manchas nas paredes e permitem retorno rápido ao ambiente com total segurança." 
    },
    { 
      title: "Garantia por Escrito de até 1 Ano", 
      desc: "Você recebe contrato e Certificado de Garantia formal. Caso qualquer praga reapareça durante o período contratado, realizamos o reforço gratuitamente." 
    },
    { 
      title: "Laudo Técnico e Documentação Sanitária", 
      desc: "Emitimos laudo detalhado e cronograma de controle de pragas com Responsável Técnico habilitado para fiscalizações da Vigilância Sanitária e auditorias." 
    }
  ];

  return (
    <section id="beneficios" className="py-16 lg:py-24 px-5 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Diferenciais Alpha Cupim</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
                Por Que os Moradores e Empresas do Cariri Escolhem a Alpha Cupim?
              </h2>
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-[1.65]">
                Unimos atendimento humanizado, pontualidade rigorosa e biotecnologia avançada para garantir um ambiente saudável e livre de pragas.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[14px] shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-[17px] lg:text-[19px] font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                    <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.6]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a 
                href={WHATSAPP_LINK}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
              >
                <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
                <span>Agendar Minha Visita Gratuita</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img 
                src={TEAM_PHOTO} 
                alt="Equipe Técnica Profissional Alpha Cupim em Juazeiro do Norte" 
                className="w-full h-80 lg:h-96 object-cover object-top" 
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 bg-[#0b1329] text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-[13px] font-bold text-amber-300">Compromisso com o Cliente</span>
                </div>
                <p className="text-[15px] text-slate-300 leading-relaxed mb-3">
                  "Nossa equipe atua uniformizada, com crachá e EPIs completos para garantir segurança e total discrição no seu imóvel."
                </p>
                <div className="text-[13px] font-bold uppercase tracking-wider text-blue-400">Diretoria Técnica • Alpha Cupim Cariri</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;

