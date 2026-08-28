import React from 'react';
import { Calendar, CheckCircle2, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const AgendarVisitaPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Agendar Visita Gratuita</span>
        </nav>

        {/* Hero */}
        <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Visita Técnica 100% Sem Custos</span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
            Agende Sua Inspeção de Pragas e Orçamento Gratuito
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
            Nossos técnicos realizam a inspeção presencial no seu imóvel em Juazeiro do Norte, Crato ou Barbalha para identificar os focos de infestação e apresentar o orçamento exato sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
            >
              <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
              <span>Agendar Minha Visita no WhatsApp</span>
            </a>

            <a
              href="tel:88999010860"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>(88) 99901-0860</span>
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-6">Como Funciona a Visita Gratuita?</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-3">1</div>
              <h3 className="font-bold text-slate-900 text-[17px] mb-2">Solicitação no WhatsApp</h3>
              <p className="text-[14px] text-slate-600">Você nos informa seu bairro e o melhor dia e turno para a vistoria.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-3">2</div>
              <h3 className="font-bold text-slate-900 text-[17px] mb-2">Inspeção no Local</h3>
              <p className="text-[14px] text-slate-600">Técnicos uniformizados avaliam o nível e focos exatos das pragas.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-3">3</div>
              <h3 className="font-bold text-slate-900 text-[17px] mb-2">Orçamento na Hora</h3>
              <p className="text-[14px] text-slate-600">Apresentamos a proposta com preço justo e garantia formal por escrito.</p>
            </div>
          </div>
        </div>

        {/* Reassurance */}
        <div className="grid sm:grid-cols-2 gap-4 text-slate-700">
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-[15px] font-medium">Sem cobrança de taxa de deslocamento no Crajubar</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-[15px] font-medium">Garantia formal com assistência técnica inclusa</span>
          </div>
        </div>

      </div>
    </div>
  );
};
