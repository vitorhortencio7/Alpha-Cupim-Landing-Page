import React, { useEffect } from 'react';
import { MessageSquare, Phone, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const WhatsAppPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-5 text-center">
        
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Atendimento via WhatsApp</span>
        </nav>

        <div className="bg-[#0b1329] rounded-3xl p-8 sm:p-14 text-white shadow-xl border border-slate-800 mb-10">
          <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <MessageSquare className="w-8 h-8" />
          </div>

          <span className="inline-block bg-green-500/20 text-green-300 px-3.5 py-1 rounded-full text-[13px] font-bold uppercase tracking-wider mb-4">
            Plantão Técnico Online
          </span>

          <h1 className="text-[28px] sm:text-[40px] font-extrabold leading-tight mb-4">
            Fale Agora com a Alpha Cupim no WhatsApp
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Nossa equipe técnica atende imediatamente no Cariri. Tire suas dúvidas, solicite preços ou agende uma inspeção gratuita no seu imóvel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[17px] px-10 py-4 rounded-xl shadow-lg transition-colors"
            >
              <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />
              <span>Abrir Conversa no WhatsApp</span>
            </a>

            <a
              href="tel:88999010860"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-7 py-4 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Ligar (88) 99901-0860</span>
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-4 text-left">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <Clock className="w-6 h-6 text-blue-600 mb-2" />
            <h2 className="font-bold text-slate-900 text-[16px] mb-1">Resposta Imediata</h2>
            <p className="text-[14px] text-slate-600">Atendimento rápido por técnicos de Juazeiro do Norte.</p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
            <h2 className="font-bold text-slate-900 text-[16px] mb-1">Orçamento Gratuito</h2>
            <p className="text-[14px] text-slate-600">Sem compromisso e sem custo de visita técnica.</p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
            <h2 className="font-bold text-slate-900 text-[16px] mb-1">Garantia Formal</h2>
            <p className="text-[14px] text-slate-600">Contrato e laudo técnico emitidos com responsabilidade.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
