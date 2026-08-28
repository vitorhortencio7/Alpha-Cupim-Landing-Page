import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const ContatoPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contato e Atendimento</span>
        </nav>

        {/* Hero */}
        <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
            <Clock className="w-4 h-4 text-green-400" />
            <span>Plantão de Atendimento Rápido</span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
            Entre em Contato com a Alpha Cupim
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
            Precisa de um orçamento, tirar dúvidas técnicas ou agendar uma dedetização no Crajubar? Nossos canais oficiais estão disponíveis para atendê-lo agora mesmo.
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
              <span>Chamar no WhatsApp (88) 99901-0860</span>
            </a>

            <a
              href="tel:88999010860"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Ligação Direta</span>
            </a>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-[18px] font-bold text-slate-900 mb-1">WhatsApp Principal</h2>
              <p className="text-[14px] text-slate-600 mb-4">Atendimento direto com nossos técnicos para agendamentos e orçamentos.</p>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              onClick={handleWhatsAppClick}
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-green-600 hover:text-green-700 text-[15px]"
            >
              (88) 99901-0860 →
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-[18px] font-bold text-slate-900 mb-1">Telefone Comercial</h2>
              <p className="text-[14px] text-slate-600 mb-4">Ligações de segunda a sábado, inclusive plantões emergenciais.</p>
            </div>
            <a 
              href="tel:88999010860" 
              className="font-bold text-blue-600 hover:text-blue-700 text-[15px]"
            >
              (88) 99901-0860 →
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-[18px] font-bold text-slate-900 mb-1">E-mail Corporativo</h2>
              <p className="text-[14px] text-slate-600 mb-4">Para envio de editais, orçamentos corporativos e contratos.</p>
            </div>
            <a 
              href="mailto:alphacupim@gmail.com" 
              className="font-bold text-purple-600 hover:text-purple-700 text-[15px]"
            >
              alphacupim@gmail.com →
            </a>
          </div>

        </div>

        {/* Location & Coverage */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-[19px] font-bold text-slate-900 mb-2">Base Operacional e Região de Cobertura</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                Com base central em Juazeiro do Norte - Ceará, atendemos residências, comércios, clínicas, escolas e indústrias em todo o Crajubar e cidades vizinhas:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Juazeiro do Norte', 'Crato', 'Barbalha', 'Missão Velha', 'Jardim', 'Cariri Cearense'].map((city, idx) => (
                  <span key={idx} className="bg-white border border-slate-300 text-slate-700 px-3 py-1 rounded-lg text-[13px] font-medium">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
