import React from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight, Phone, Award, Clock, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const DedetizacaoPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Serviço de Dedetização</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Dedetização Especializada no Cariri</span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
            Dedetização Profissional contra Baratas, Escorpiões e Formigas
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
            Controle integrado de pragas urbanas em Juazeiro do Norte, Crato e Barbalha. Utilizamos formulações modernas sem cheiro forte, seguras para crianças e animais domésticos, com garantia formal por escrito de até 1 ano.
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
              <span>Solicitar Orçamento Grátis</span>
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

        {/* Content Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Pragas Controladas</h2>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Escorpiões e Aranhas:</strong> Aplicação estratégica em ralos, caixas de passagem e frestas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Baratas de Esgoto e Francesinhas:</strong> Produtos com efeito cascata que eliminam o ninho.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Formigas e Traças:</strong> Gel específico inodoro sem necessidade de desocupar o imóvel.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pulgas e Carrapatos:</strong> Tratamento de alta residualidade em áreas internas e externas.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">Diferenciais do Nosso Tratamento</h2>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Produtos Registrados na Anvisa:</strong> Alta tecnologia de microencapsulamento.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Retorno Rápido:</strong> Afastamento mínimo de apenas 2 a 4 horas para animais e crianças.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Garantia por Escrito:</strong> Assistência técnica inclusa no contrato durante todo o período.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Equipe Uniformizada e Capacitada:</strong> Atendimento com crachá e EPIs no Crajubar.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[20px] font-bold text-slate-900 mb-1">Agende sua Inspeção Técnica Gratuita</h3>
            <p className="text-[15px] text-slate-600">Nossa equipe volante no Cariri atende no mesmo dia.</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-6 py-3.5 rounded-xl shadow-sm whitespace-nowrap transition-colors"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
            <span>Falar com Técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
