
import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Maria Cecília Albuquerque",
      loc: "Bairro Lagoa Seca, Juazeiro do Norte",
      text: "Excelente atendimento! Resolveram o problema de escorpiões no mesmo dia. Técnicos educados, uniformizados e o produto não deixou cheiro nenhum na casa.",
      initials: "MC",
      time: "Avaliado há 2 semanas"
    },
    {
      name: "João Paulo Meneses",
      loc: "Centro, Crato - CE",
      text: "Contratei a descupinização para o telhado e portas de madeira. Deram garantia formal por escrito de 1 ano e o resultado foi 100% eficaz. Recomendo com certeza.",
      initials: "JM",
      time: "Avaliado há 1 mês"
    },
    {
      name: "Francisca Cláudia Lima",
      loc: "Condomínio Fechado, Barbalha - CE",
      text: "Fizeram o controle preventivo geral na minha residência. Tenho duas crianças e um pet, e foi super seguro e tranquilo. Pontuais e muito transparentes.",
      initials: "FC",
      time: "Avaliado há 3 semanas"
    }
  ];

  const GOOGLE_REVIEWS_URL = "https://share.google/nWFRW4Ub6A1Td8eME";

  return (
    <section className="py-16 lg:py-24 px-5 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Opinião de Quem Confia</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            O Que Nossos Clientes Dizem no Google
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Mais de 120 avaliações 5 estrelas de famílias e comércios em Juazeiro do Norte, Crato e Barbalha.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
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
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-100 rounded-xl shadow-xs border border-slate-300 text-slate-800 font-bold text-[14px] transition-colors"
          >
            <div className="flex gap-0.5">
               {[1, 2, 3, 4, 5].map(n => (
                 <Star key={n} className="w-4 h-4 fill-amber-400 text-amber-400" />
               ))}
            </div>
            <span>Ver todas as avaliações no Perfil da Empresa no Google</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

