/**
 * =====================================================================
 * SEO CONTENT SECTION (CONTEÚDO SEMÂNTICO LOCAL E LINKS INTERNOS)
 * =====================================================================
 */

import React from 'react';
import { ShieldAlert, Calendar, CheckCircle2 } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 block">
            Guia Técnico de Prevenção
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-2 sm:mb-3">
            Controle de Pragas em Juazeiro do Norte e Região do Cariri
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Entenda como o clima regional influencia a proliferação de insetos e conheça as melhores práticas para manter seu imóvel protegido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 mb-8">
          
          <div className="bg-slate-50 border border-slate-200/90 p-4 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-3">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                Descupinização e Cupins no Clima do Cariri
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                As temperaturas elevadas e períodos de estiagem alternados com chuvas no Cariri favorecem a revoada e infestação de cupins de madeira seca e cupins de solo. A Alpha Cupim atua com tratamentos por injeção localizada e barreiras químicas protetoras.
              </p>
              <ul className="space-y-2 pt-2.5 border-t border-slate-200 mb-5">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proteção de armários embutidos, forros, telhados e portas.</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia técnica formal com assistência em contrato.</span>
                </li>
              </ul>
            </div>

            <a 
              href="/descupinizacao" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm"
            >
              Conhecer serviço de descupinização →
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 p-4 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                Prevenção de Escorpiões e Baratas no Cariri
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Escorpiões alimentam-se principalmente de baratas e buscam abrigo em ralos, caixas de gordura e frestas. O controle periódico reduz os focos alimentares e a circulação dessas pragas em residências, condomínios e empresas.
              </p>
              <ul className="space-y-2 pt-2.5 border-t border-slate-200 mb-5">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Produtos saneantes com efeito residual prolongado.</span>
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Laudo e ordem de serviço emitidos com responsabilidade técnica.</span>
                </li>
              </ul>
            </div>

            <a 
              href="/dedetizacao" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm"
            >
              Conhecer serviço de dedetização geral →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOContent;
