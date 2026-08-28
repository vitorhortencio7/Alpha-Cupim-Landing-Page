import React from 'react';
import { Shield, CheckCircle2, ArrowRight, Phone, ShieldCheck, Home, AlertTriangle } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const DescupinizacaoPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Serviço de Descupinização</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia de até 1 Ano por Escrito</span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
            Descupinização Especializada contra Cupim de Madeira e Solo
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
            Proteção definitiva para seus móveis planejados, portas, telhados e estruturas de madeira. Realizamos barreira química profunda e injeção pressurizada sem danificar o acabamento da sua casa ou empresa no Cariri.
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
              <span>Agendar Inspeção de Cupim Grátis</span>
            </a>

            <a
              href="tel:88999010860"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Ligar: (88) 99901-0860</span>
            </a>
          </div>
        </div>

        {/* Types of Termites & Treatments */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-4 font-bold">
              <Home className="w-5 h-5" />
            </div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-3">Cupim de Madeira Seca</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
              Ataca portas, armários planejados, forros e batentes, expelindo pequenos grânulos (pó de madeira).
            </p>
            <ul className="space-y-2 text-[14px] text-slate-700 font-medium pt-3 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tratamento por injeção e pulverização localizada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Preservação total de laminados e vernizes</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4 font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-[22px] font-bold text-slate-900 mb-3">Cupim Subterrâneo (Solo)</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
              Constrói túneis de terra em paredes, pisos e tubulações elétricas, causando graves danos estruturais.
            </p>
            <ul className="space-y-2 text-[14px] text-slate-700 font-medium pt-3 border-t border-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Barreira química de proteção perimetral e solo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Interrupção da colônia e rainha na raiz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Warning Alert */}
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[17px] font-bold text-amber-900 mb-1">Identificou pó de madeira ou furos em portas?</h3>
            <p className="text-[15px] text-amber-800 leading-relaxed">
              Não tente usar inseticidas aerossóis comuns: eles apenas dispersam a colônia de cupins para outras partes do imóvel. Chame nossos técnicos credenciados para um diagnóstico preciso e gratuito no Cariri.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[20px] font-bold text-slate-900 mb-1">Proteja seu patrimônio com a Alpha Cupim</h3>
            <p className="text-[15px] text-slate-600">Visita técnica gratuita em Juazeiro do Norte, Crato e Barbalha.</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-6 py-3.5 rounded-xl shadow-sm whitespace-nowrap transition-colors"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
            <span>Falar com Especialista em Cupins</span>
          </a>
        </div>

      </div>
    </div>
  );
};
