
import React from 'react';
import { Phone, ShieldCheck, CheckCircle2, Star, Clock } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const Hero: React.FC = () => {
  const HERO_IMAGE = "https://i.ibb.co/Q2r5Smp/9.jpg"; 

  const keyGuarantees = [
    "Aplicação inodora, segura para crianças e pets",
    "Garantia formal por escrito de até 1 ano",
    "Visita técnica e orçamento 100% gratuitos",
    "Laudo e certificado técnico para alvarás"
  ];

  return (
    <section className="bg-[#0b1329] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1.5 rounded-full mb-5">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-[14px] font-semibold text-blue-200">
                Dedetizadora nº 1 no Cariri • +2.500 clientes protegidos
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold text-white leading-[1.2] tracking-tight mb-5">
              Dedetização Especializada em <span className="text-blue-400">Juazeiro do Norte, Crato e Barbalha</span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-[16px] lg:text-[18px] text-slate-300 leading-[1.65] font-normal mb-7 max-w-2xl">
              Elimine definitivamente <strong className="text-white font-semibold">cupins, baratas, escorpiões e roedores</strong> da sua casa ou empresa com biotecnologia inodora, técnicos uniformizados e garantia técnica comprovada.
            </p>

            {/* Checklist of guarantees */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {keyGuarantees.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-[14px] lg:text-[15px] text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a 
                href={WHATSAPP_LINK}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] lg:text-[17px] px-7 py-4 rounded-xl shadow-lg transition-colors"
              >
                <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
                <span>Solicitar Orçamento Grátis</span>
              </a>

              <a 
                href="tel:88999010860"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-5 py-4 rounded-xl border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(88) 99901-0860</span>
              </a>
            </div>

            {/* Live technician availability indicator */}
            <div className="flex items-center gap-2 text-slate-400 text-[14px]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Equipes de plantão com atendimento no mesmo dia em todo o Crajubar</span>
            </div>
          </div>

          {/* Right Column: Real Professional Photo & Credentials */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={HERO_IMAGE} 
                  alt="Técnico Alpha Cupim uniformizado realizando controle de pragas em Juazeiro do Norte" 
                  className="w-full h-72 sm:h-80 object-cover object-center" 
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#0b1329]/95 border border-slate-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 text-white shadow">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-[13px] font-semibold">Técnicos Certificados Anvisa</span>
                </div>
              </div>
              
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[16px] font-bold text-white">Inspeção Sem Custos</div>
                  <div className="text-[14px] text-slate-400">Avaliamos o foco da infestação no local</div>
                </div>
                <div className="bg-blue-600/20 text-blue-300 font-bold text-[14px] px-3 py-1.5 rounded-lg border border-blue-500/30">
                  100% Grátis
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

