/**
 * =====================================================================
 * SEO CONTENT SECTION (CONTEÚDO SEMÂNTICO LOCAL E LINKS INTERNOS)
 * =====================================================================
 *
 * DECISÕES DE SEO E CRO:
 * 1. Redação natural orientada ao usuário, evitando repetição excessiva de palavras-chave.
 * 2. Links internos contextuais apontando para as rotas canônicas:
 *    - /descupinizacao
 *    - /dedetizacao
 * 3. Linguagem técnica precisa: substituído jargão absoluto como "elimina na raiz"
 *    por métodos de controle de colônias e barreiras químicas.
 */

import React from 'react';
import { ShieldAlert, Calendar, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

const SEOContent: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Guia Técnico de Prevenção
          </span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Controle de Pragas em Juazeiro do Norte e Região do Cariri
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-2xl mx-auto leading-[1.65]">
            Entenda como o clima regional influencia a proliferação de insetos e conheça as melhores práticas para manter seu imóvel protegido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          
          <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-3">
                Descupinização e Cupins no Clima do Cariri
              </h3>
              <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-5">
                As temperaturas elevadas e períodos de estiagem alternados com chuvas no Cariri favorecem a revoada e infestação de cupins de madeira seca e cupins de solo. A Alpha Cupim atua com tratamentos por injeção localizada e barreiras químicas protetoras.
              </p>
              <ul className="space-y-2.5 pt-3 border-t border-slate-200 mb-6">
                <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proteção de armários embutidos, forros, telhados e portas.</span>
                </li>
                <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia técnica formal com assistência em contrato.</span>
                </li>
              </ul>
            </div>

            <a 
              href="/descupinizacao" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-[14px]"
            >
              Conhecer serviço de descupinização →
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-3">
                Prevenção de Escorpiões e Baratas no Cariri
              </h3>
              <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-5">
                Escorpiões alimentam-se principalmente de baratas e buscam abrigo em ralos, caixas de gordura e frestas. O controle periódico reduz os focos alimentares e a circulação dessas pragas em residências, condomínios e empresas.
              </p>
              <ul className="space-y-2.5 pt-3 border-t border-slate-200 mb-6">
                <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Produtos saneantes com efeito residual prolongado.</span>
                </li>
                <li className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Laudo e ordem de serviço emitidos com responsabilidade técnica.</span>
                </li>
              </ul>
            </div>

            <a 
              href="/dedetizacao" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-[14px]"
            >
              Conhecer serviço de dedetização geral →
            </a>
          </div>

        </div>

        {/* Action card */}
        <div className="bg-[#0b1329] rounded-2xl p-6 sm:p-10 text-white border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-[20px] sm:text-[24px] font-bold mb-2">
                Suspeita de pragas no seu imóvel?
              </h3>
              <p className="text-[15px] lg:text-[16px] text-slate-300 leading-relaxed">
                Solicite uma inspeção técnica presencial sem custos com nossa equipe em Juazeiro do Norte e região.
              </p>
            </div>

            <a 
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.agendamento)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'seo_content_card', message: BUSINESS_CONFIG.whatsapp.messages.agendamento, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[15px] px-7 py-3.5 rounded-xl shadow-md shrink-0 whitespace-nowrap transition-colors"
              id="btn-seo-card-whatsapp"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
