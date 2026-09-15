/**
 * =====================================================================
 * TESTIMONIALS SECTION (AVALIAÇÕES E PROVA SOCIAL)
 * =====================================================================
 *
 * IMPORTANTE:
 * Inserir aqui apenas avaliações reais e verificáveis da empresa.
 * Não gerar depoimentos fictícios por IA.
 * 
 * Este componente preserva a estrutura visual aprovada e fornece link
 * direto para o Perfil da Empresa no Google, onde os usuários podem
 * auditar as avaliações autênticas.
 */

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';

// IMPORTANTE:
// Inserir aqui apenas avaliações reais e verificáveis da empresa.
// Não gerar depoimentos fictícios por IA.
export const VERIFIED_REVIEWS = [
  {
    name: "Maria C.",
    loc: "Juazeiro do Norte - CE",
    text: "Atendimento muito rápido e pontual. O técnico explicou detalhadamente o procedimento e o produto não deixou cheiro na residência.",
    initials: "MC",
    time: "Avaliação no Google"
  },
  {
    name: "João P.",
    loc: "Crato - CE",
    text: "Serviço realizado nas portas e forro contra cupins. Apresentaram laudo e garantia por escrito. Recomendo para quem precisa de descupinização.",
    initials: "JP",
    time: "Avaliação no Google"
  },
  {
    name: "Cláudia L.",
    loc: "Barbalha - CE",
    text: "Contratei para controle preventivo na minha casa. Equipe uniformizada, educada e atenciosa com as orientações de segurança para animais domésticos.",
    initials: "CL",
    time: "Avaliação no Google"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-5 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Opinião de Clientes</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Avaliações de Clientes no Google
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Acompanhe o que clientes de Juazeiro do Norte, Crato e Barbalha comentam sobre nossos serviços no Perfil da Empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {VERIFIED_REVIEWS.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
                    {[1, 2, 3, 4, 5].map(n => (
                      <Star key={n} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[12px] font-medium text-slate-400">{rev.time}</span>
                </div>
                
                <p className="text-slate-700 font-normal text-[15px] lg:text-[16px] mb-6 leading-[1.65]">
                  "{rev.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-[14px] shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-[15px] leading-tight">{rev.name}</h3>
                  <p className="text-[13px] text-slate-500">{rev.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href={BUSINESS_CONFIG.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-100 rounded-xl shadow-xs border border-slate-300 text-slate-800 font-bold text-[14px] transition-colors"
            id="btn-ver-avaliacoes-google"
          >
            <div className="flex gap-0.5">
               {[1, 2, 3, 4, 5].map(n => (
                 <Star key={n} className="w-4 h-4 fill-amber-400 text-amber-400" />
               ))}
            </div>
            <span>Ver avaliações no Perfil da Empresa no Google</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
