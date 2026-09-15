/**
 * =====================================================================
 * TRUST PROOF SECTION (PROVAS DE CONFIANÇA E COMPROVAÇÃO REAL)
 * =====================================================================
 *
 * DECISÃO DE COMPLIANCE E CRO:
 * Removidos números não verificados (+2.500 imóveis, 120 avaliações hardcoded)
 * para cumprir a regra de não inventar alegações que não possam ser comprovadas.
 * Mantida a credibilidade focada na transparência, presença local e link real
 * para o Perfil da Empresa no Google.
 */

import React from 'react';
import { Award, Users, MapPin } from 'lucide-react';

const TrustProof: React.FC = () => {
  const trustData = [
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      tag: "TRANSPARÊNCIA",
      title: "Avaliações no Google",
      desc: "Veja os relatos de famílias e empresas atendidas pela Alpha Cupim em Juazeiro do Norte e região do Cariri."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      tag: "ATENDIMENTO AMPLO",
      title: "Residencial e Comercial",
      desc: "Tratamentos planejados para residências, condomínios, estabelecimentos comerciais e galpões industriais."
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      tag: "PRESENÇA REGIONAL",
      title: "Equipe no Cariri",
      desc: "Inspeção e orçamento sem taxa de deslocamento para Juazeiro do Norte, Crato e Barbalha."
    }
  ];

  return (
    <section className="bg-slate-50 py-12 lg:py-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {trustData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-1">{item.tag}</span>
              <h2 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-[15px] lg:text-[17px] text-slate-600 leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
