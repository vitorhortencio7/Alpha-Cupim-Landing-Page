
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

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
      a: "Para aplicações contra baratas e escorpiões, recomendamos apenas de 2 a 4 horas de afastamento para gestantes, idosos e animais de estimação. Em tratamentos com gel inodoro contra formigas e baratas, você não precisa sair do imóvel nem interromper sua rotina.",
      defaultOpen: true
    },
    {
      q: "Os produtos utilizados são seguros para pets e crianças?",
      a: "Sim. A Alpha Cupim utiliza exclusivamente fórmulas modernas de laboratórios autorizados pela Anvisa e Ministério da Saúde, sem cheiro forte e com perfil toxicológico seguro de rápida decomposição no ambiente."
    },
    {
      q: "Quanto tempo dura a garantia do serviço de dedetização e descupinização?",
      a: "A garantia varia de 3 meses a 1 ano (para tratamentos específicos de descupinização estrutural). Você recebe o Certificado de Garantia formal e Laudo de Execução por escrito no momento da conclusão."
    },
    {
      q: "A visita técnica de orçamento é gratuita no Cariri?",
      a: "Sim! A visita técnica presencial para inspeção de pragas e o orçamento detalhado são 100% gratuitos em Juazeiro do Norte, Crato e Barbalha, sem qualquer cobrança por deslocamento."
    },
    {
      q: "A Alpha Cupim emite laudo e certificado para a Vigilância Sanitária?",
      a: "Sim, emitimos documentação técnica oficial completa, com especificação dos produtos químicos registrados na Anvisa, dosagens, pragas-alvo e assinatura do Responsável Técnico habilitado para fiscalizações e auditorias."
    }
  ];

  return (
    <section id="duvidas" className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Tire Suas Dúvidas</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Perguntas Frequentes sobre Dedetização
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Respostas diretas e transparentes sobre segurança, garantia e métodos de aplicação.
          </p>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} defaultOpen={f.defaultOpen} />)}
        </div>

        <div className="text-center">
          <p className="text-[15px] text-slate-600 mb-3 font-medium">Ainda tem alguma dúvida específica sobre o seu imóvel?</p>
          <a 
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-[15px]"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
            <span>Fale diretamente com nosso especialista no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

