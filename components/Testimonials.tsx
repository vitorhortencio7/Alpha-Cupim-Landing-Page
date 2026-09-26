/**
 * =====================================================================
 * TESTIMONIALS SECTION (AVALIAÇÕES E PROVA SOCIAL)
 * =====================================================================
 */

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';

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
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">Opinião de Clientes</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Avaliações de Clientes no Google
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Acompanhe o que clientes de Juazeiro do Norte, Crato e Barbalha comentam sobre nossos serviços no Perfil da Empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {VERIFIED_REVIEWS.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
                    {[1, 2, 3, 4, 5].map(n => (
                      <Star key={n} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">{rev.time}</span>
                </div>
                
                <p className="text-slate-700 font-normal text-xs sm:text-sm mb-4 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{rev.name}</h3>
                  <p className="text-[11px] text-slate-500">{rev.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href={BUSINESS_CONFIG.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-5 bg-white hover:bg-slate-100 active:bg-slate-100 rounded-xl shadow-xs border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm transition-colors"
            id="btn-ver-avaliacoes-google"
          >
            <span>Ver Todas as Avaliações no Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
