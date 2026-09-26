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
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 inline-flex items-center justify-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            Nossa Atuação no Cariri
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Registros de Serviços Executados
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Atendimentos realizados em Juazeiro do Norte, Crato e Barbalha com equipe uniformizada e equipamentos de proteção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 mb-8 items-stretch">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col h-full hover:border-slate-300 transition-colors"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
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
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">{img.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{img.desc}</p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-xs sm:text-sm px-6 rounded-xl shadow-xs transition-colors"
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
