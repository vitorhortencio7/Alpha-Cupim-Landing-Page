/**
 * =====================================================================
 * FAQ SECTION (DÚVIDAS FREQUENTES COM RESPOSTAS RESPONSÁVEIS)
 * =====================================================================
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const FAQItem: React.FC<{ q: string; a: string; defaultOpen?: boolean }> = ({ q, a, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-200 last:border-0 py-3.5 sm:py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group gap-3 cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">{q}</span>
        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center shrink-0 transition-colors">
          {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-blue-600" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-600" />}
        </div>
      </button>
      {isOpen && (
        <div className="pt-2.5 pr-2 sm:pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Preciso sair de casa durante a dedetização em Juazeiro do Norte?",
      a: "Depende da técnica aplicada. Para pulverizações contra baratas e escorpiões, recomendamos geralmente um período de afastamento de 2 a 4 horas, especialmente para crianças, idosos, gestantes e animais de estimação. Em tratamentos com iscas em gel para formigas e baratas em áreas internas, na maioria das vezes não é necessário sair do imóvel.",
      defaultOpen: true
    },
    {
      q: "Os produtos utilizados são seguros para a família e pets?",
      a: "A Alpha Cupim utiliza exclusivamente produtos saneantes registrados na Anvisa e autorizados pelo Ministério da Saúde. Nossa equipe fornece todas as orientações prévias e pós-aplicação para que o ambiente seja reocupado com total tranquilidade.",
    },
    {
      q: "Como funciona a garantia do serviço de dedetização e descupinização?",
      a: "A garantia é formalizada em contrato e varia conforme o tipo de praga, o grau de infestação e as características estruturais do local. Caso ocorra qualquer reincidência dentro do período acordado, nossa equipe realiza a revisão técnica.",
    },
    {
      q: "A visita técnica de orçamento é gratuita no Cariri?",
      a: "Sim. Realizamos a visita técnica de inspeção e o orçamento sem custos para Juazeiro do Norte, Crato e Barbalha, sem taxa de deslocamento.",
    },
    {
      q: "A Alpha Cupim emite laudo técnico e documentação sanitária?",
      a: "Sim. Emitimos o Certificado de Execução do Serviço e a Ordem de Serviço com a discriminação dos produtos utilizados, dosagens e orientações técnicas, atendendo às exigências dos órgãos de fiscalização sanitária."
    }
  ];

  return (
    <section id="duvidas" className="py-10 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1.5">Tire Suas Dúvidas</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Perguntas Frequentes sobre Dedetização e Controle de Pragas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Respostas transparentes sobre segurança, métodos de controle e visita técnica no Cariri.
          </p>
        </div>

        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs mb-6 sm:mb-8">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={f.defaultOpen} />)}
        </div>

        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-2 font-medium">Tem alguma dúvida sobre o seu imóvel ou tipo de praga?</p>
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'faq', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-bold text-xs sm:text-sm"
            id="btn-faq-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
            <span>Fale diretamente com nosso especialista no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
