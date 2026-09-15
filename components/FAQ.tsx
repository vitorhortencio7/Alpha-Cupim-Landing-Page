/**
 * =====================================================================
 * FAQ SECTION (DÚVIDAS FREQUENTES COM RESPOSTAS RESPONSÁVEIS)
 * =====================================================================
 *
 * DECISÕES TÉCNICAS E DE SEGURANÇA SANITÁRIA:
 * As respostas foram revisadas para não prometer soluções mágicas ou "100% atóxicas".
 * A Anvisa não classifica saneantes químicos como 100% atóxicos sem restrições;
 * orientações de afastamento temporário (2 a 4 horas) e uso de formulações
 * em gel dependem estritamente do tipo de praga e método acordado no contrato.
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const FAQItem: React.FC<{ q: string; a: string; defaultOpen?: boolean }> = ({ q, a, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-200 last:border-0 py-4 sm:py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900 text-[16px] lg:text-[18px] leading-snug group-hover:text-blue-600 transition-colors">{q}</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center shrink-0 transition-colors">
          {isOpen ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
        </div>
      </button>
      {isOpen && (
        <div className="pt-3 pr-8 text-[15px] lg:text-[16px] text-slate-600 leading-[1.65]">
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
    <section id="duvidas" className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Tire Suas Dúvidas</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Perguntas Frequentes sobre Dedetização e Controle de Pragas
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Respostas transparentes sobre segurança, métodos de controle e visita técnica no Cariri.
          </p>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={f.defaultOpen} />)}
        </div>

        <div className="text-center">
          <p className="text-[15px] text-slate-600 mb-3 font-medium">Tem alguma dúvida sobre o seu imóvel ou tipo de praga?</p>
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.floating)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'faq', message: BUSINESS_CONFIG.whatsapp.messages.floating, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-[15px]"
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
