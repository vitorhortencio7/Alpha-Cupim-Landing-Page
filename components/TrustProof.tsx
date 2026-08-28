
import React from 'react';
import { Award, Users, MapPin } from 'lucide-react';

const TrustProof: React.FC = () => {
  const trustData = [
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      tag: "AVALIAÇÃO MÁXIMA",
      title: "Nota 5.0 no Google",
      desc: "Mais de 120 avaliações verificadas de famílias e empresas em Juazeiro do Norte, Crato e Barbalha."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      tag: "EXPERIÊNCIA COMPROVADA",
      title: "+2.500 Imóveis Atendidos",
      desc: "Tratamento especializado em residências, condomínios, comércios, clínicas e indústrias no Cariri."
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      tag: "AGILIDADE REGIONAL",
      title: "Equipe Local no Crajubar",
      desc: "Técnicos com rota diária para inspeção e aplicação rápida no mesmo dia, sem custos de deslocamento."
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
              <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[15px] lg:text-[17px] text-slate-600 leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof;

