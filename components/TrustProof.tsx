/**
 * =====================================================================
 * TRUST PROOF SECTION (PROVAS DE CONFIANÇA E COMPROVAÇÃO REAL)
 * =====================================================================
 */

import React from 'react';
import { Award, Users, MapPin } from 'lucide-react';

const TrustProof: React.FC = () => {
  const trustData = [
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      tag: "TRANSPARÊNCIA",
      title: "Avaliações no Google",
      desc: "Veja os relatos de famílias e empresas atendidas pela Alpha Cupim em Juazeiro do Norte e região do Cariri."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      tag: "ATENDIMENTO AMPLO",
      title: "Residencial e Comercial",
      desc: "Tratamentos planejados para residências, condomínios, estabelecimentos comerciais e galpões industriais."
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      tag: "PRESENÇA REGIONAL",
      title: "Equipe no Cariri",
      desc: "Inspeção e orçamento sem taxa de deslocamento para Juazeiro do Norte, Crato e Barbalha."
    }
  ];

  return (
    <section className="bg-slate-50 py-10 sm:py-14 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {trustData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col items-start"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">{item.tag}</span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">{item.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
