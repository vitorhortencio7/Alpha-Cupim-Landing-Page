/**
 * =====================================================================
 * WORK GALLERY SECTION (FOTOS REAIS DE ATENDIMENTOS NO CARIRI)
 * =====================================================================
 */

import React from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const WorkGallery: React.FC = () => {
  const images = [
    {
      url: "https://i.ibb.co/7NjjqsGG/10.jpg",
      title: "Descupinização em Telhados e Forros",
      desc: "Tratamento preventivo e curativo contra cupins de madeira seca"
    },
    {
      url: "https://i.ibb.co/DPpBn5qD/4.jpg",
      title: "Aplicação Técnica Especializada",
      desc: "Equipamentos calibrados para pulverização residual em ralos e frestas"
    },
    {
      url: "https://i.ibb.co/rK54H95J/2.jpg",
      title: "Controle em Condomínios e Empresas",
      desc: "Barreira protetora em áreas comuns com emissão de laudo sanitário"
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4" />
            Nossa Atuação no Cariri
          </span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Registros de Serviços Executados
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-xl mx-auto leading-[1.65]">
            Atendimentos realizados em Juazeiro do Norte, Crato e Barbalha com equipe uniformizada e equipamentos de proteção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 items-stretch">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:border-slate-300 transition-colors"
            >
              <div className="relative h-64 sm:h-72 md:h-60 lg:h-68 w-full overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={img.url} 
                  alt={`${img.title} - Alpha Cupim Juazeiro do Norte`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width="400"
                  height="300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-1.5">{img.title}</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{img.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[13px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Serviço com Garantia Técnica</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
            onClick={(e) => handleTrackedWhatsAppClick({ location: 'work_gallery', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-xs transition-colors"
            id="btn-gallery-whatsapp"
          >
            <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
            <span>Solicitar Avaliação Técnica no Seu Imóvel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
