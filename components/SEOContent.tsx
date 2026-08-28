
import React from 'react';
import { ShieldAlert, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const SEOContent: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Guia de Prevenção e Saúde Ambiental
          </span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Controle de Pragas em Juazeiro do Norte e Região do Cariri
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-2xl mx-auto leading-[1.65]">
            Entenda como o clima do Cariri afeta a proliferação de pragas e saiba como manter sua residência e empresa 100% protegidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          
          <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-2xl">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-3">
              Descupinização e Cupins no Clima do Cariri
            </h3>
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-5">
              As altas temperaturas e a umidade sazonal em Juazeiro do Norte e Crato criam condições ideais para a reprodução de cupins de madeira seca e cupins subterrâneos. Nossa tecnologia cria barreiras químicas que penetram profundamente nas estruturas, eliminando a colônia na raiz.
            </p>
            <ul className="space-y-2.5 pt-3 border-t border-slate-200">
              <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proteção de móveis planejados, forros, telhados e batentes.</span>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantia de até 1 ano com acompanhamento técnico presencial.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-2xl">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-3">
              Prevenção de Escorpiões e Baratas no Crajubar
            </h3>
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-5">
              Escorpiões alimentam-se principalmente de baratas e habitam galerias de esgoto e frestas de alvenaria. A dedetização semestral corta a cadeia alimentar dessas pragas perigosas, impedindo infestações dentro de residências, creches e empresas.
            </p>
            <ul className="space-y-2.5 pt-3 border-t border-slate-200">
              <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Produtos microencapsulados com efeito residual de longa duração.</span>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Laudo técnico emitido para alvarás sanitários e vigilância.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Action card */}
        <div className="bg-[#0b1329] rounded-2xl p-6 sm:p-10 text-white border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-[20px] sm:text-[24px] font-bold mb-2">
                Suspeita de pragas no seu imóvel no Cariri?
              </h3>
              <p className="text-[15px] lg:text-[16px] text-slate-300 leading-relaxed">
                Não espere a infestação se espalhar. Solicite uma inspeção técnica presencial gratuita com nossos especialistas hoje mesmo.
              </p>
            </div>

            <a 
              href={WHATSAPP_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-md shrink-0 whitespace-nowrap transition-colors"
            >
              <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;

