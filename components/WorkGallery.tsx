
import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const WorkGallery: React.FC = () => {
  const images = [
    { url: "https://i.ibb.co/7NjjqsGG/10.jpg", tag: "Dedetização Residencial", loc: "Juazeiro do Norte", alt: "Técnico Alpha Cupim realizando dedetização residencial em Juazeiro do Norte" },
    { url: "https://i.ibb.co/Rkmv9hcp/1.jpg", tag: "Controle em Restaurantes", loc: "Crato - CE", alt: "Controle de pragas em restaurante no Cariri" },
    { url: "https://i.ibb.co/DPpBn5qD/4.jpg", tag: "Descupinização Estrutural", loc: "Barbalha - CE", alt: "Tratamento contra cupins em estruturas de madeira no Crato" },
    { url: "https://i.ibb.co/rK54H95J/2.jpg", tag: "Sanitização Comercial", loc: "Cariri Industrial", alt: "Aplicação de sanitizante em galpão industrial em Barbalha" }
  ];

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div className="max-w-xl">
            <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Galeria em Tempo Real</span>
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-slate-900 leading-tight">
              Técnicos da Alpha Cupim em Atendimento
            </h2>
          </div>
          <p className="text-[15px] lg:text-[17px] text-slate-600 leading-[1.6] max-w-md">
            Atendimento presencial uniformizado e identificado nos principais bairros e condomínios de Juazeiro do Norte, Crato e Barbalha.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-100 border border-slate-200 shadow-sm">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover" 
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                <div>
                  <div className="text-white font-bold text-[13px] sm:text-[14px] leading-tight">{img.tag}</div>
                  <div className="text-slate-300 text-[12px] font-medium">{img.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-slate-700">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Técnicos Próprios e Capacitados</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Produtos Registrados no Ministério da Saúde</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Certificado e Laudo Técnico Emitidos na Hora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;

