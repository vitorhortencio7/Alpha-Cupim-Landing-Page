
import React from 'react';
import { Clock, ShieldCheck, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-16 lg:py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0b1329] rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl border border-slate-800">
          
          <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-4 py-2 rounded-full mb-6 text-[13px] font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Plantão de Atendimento em Juazeiro do Norte e Cariri</span>
          </div>
          
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Proteja Sua Família e Seu Negócio Hoje Mesmo
          </h2>
          
          <p className="text-[16px] lg:text-[18px] text-slate-300 max-w-2xl mx-auto leading-[1.65] mb-8">
            Mais de <strong className="text-white font-bold">2.500 imóveis protegidos</strong>. Agende agora sua inspeção técnica e orçamento 100% gratuitos sem nenhum compromisso.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[17px] px-9 py-4 rounded-xl shadow-lg transition-colors"
            >
              <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />
              <span>Agendar Minha Visita Gratuita Agora</span>
            </a>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-[13px] text-slate-300 font-semibold mt-2">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-emerald-400" />
                 <span>Garantia formal de até 1 ano</span>
              </div>
              <div className="flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-blue-400" />
                 <span>Juazeiro do Norte, Crato e Barbalha</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;

