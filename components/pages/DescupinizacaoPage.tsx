/**
 * =====================================================================
 * PÁGINA: DESCUPINIZAÇÃO EM JUAZEIRO DO NORTE (/descupinizacao)
 * =====================================================================
 *
 * DECISÕES DE SEO E TÉCNICAS:
 * 1. Title: "Descupinização em Juazeiro do Norte | Alpha Cupim"
 * 2. Canonical próprio: https://alphacupim.com.br/descupinizacao
 * 3. H1 Exato: "Descupinização em Juazeiro do Norte"
 * 4. Métodos reais: injeção pressurizada, pulverização orientada, barreira química.
 * 5. Sem alegações absolutas ("proteção definitiva" ou "nunca mais terá cupim").
 *    Garantia técnica contratual clara com acompanhamento e assistência técnica.
 */

import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Home, AlertTriangle, Hammer } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const DescupinizacaoPage: React.FC<PageProps> = ({ onNavigateHome, onNavigate }) => {
  return (
    <>
      <SEO
        title="Descupinização em Juazeiro do Norte | Alpha Cupim"
        description="Tratamento profissional contra cupins em Juazeiro do Norte e região do Cariri. Solicite uma avaliação com a Alpha Cupim."
        canonicalPath="/descupinizacao"
      />

      <div className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-5">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Descupinização</span>
          </nav>

          {/* Hero Section */}
          <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Especialidade Alpha Cupim no Cariri</span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
              Descupinização em Juazeiro do Norte
            </h1>

            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
              Tratamento profissional contra <strong className="text-white">cupim de madeira seca, cupim de solo (subterrâneo) e brocas</strong>. Preservação técnica de móveis planejados, portas, telhados, forros e estruturas com garantia contratual no Cariri.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.descupinizacao)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_descupinizacao_hero', message: BUSINESS_CONFIG.whatsapp.messages.descupinizacao, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[16px] px-8 py-4 rounded-xl shadow-md transition-colors"
                id="btn-descupinizacao-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
                <span>Agendar Inspeção Técnica Grátis</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phone.telHref}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-4 rounded-xl border border-slate-700 transition-colors"
                aria-label={`Ligar para ${BUSINESS_CONFIG.phone.display}`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Ligar: {BUSINESS_CONFIG.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Tipos de Cupins e Pragas da Madeira */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-800 mb-4 font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <h2 className="text-[20px] font-bold text-slate-900 mb-2">Cupim de Madeira Seca</h2>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                  Habita o interior de armários embutidos, batentes e forros. O sinal mais evidente são grânulos pequenos expelidos na madeira.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[13px] font-semibold text-amber-800">
                Tratamento: Injeção localizada e calda cupinicida
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-4 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-[20px] font-bold text-slate-900 mb-2">Cupim Subterrâneo (Solo)</h2>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                  Constrói túneis de terra em alvenarias, rodapés e conduítes, atacando fundações e elementos de apoio.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[13px] font-semibold text-blue-800">
                Tratamento: Barreira química perimetral e perfuração
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800 mb-4 font-bold">
                  <Hammer className="w-5 h-5" />
                </div>
                <h2 className="text-[20px] font-bold text-slate-900 mb-2">Brocas de Madeira</h2>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                  Besouros xilófagos que depositam ovos na madeira, deixando um pó fino semelhante a talco e galerias internas.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[13px] font-semibold text-emerald-800">
                Tratamento: Pulverização profunda e selamento
              </div>
            </div>
          </div>

          {/* Métodos de Tratamento e Preservação */}
          <div className="bg-slate-50 p-7 lg:p-8 rounded-2xl border border-slate-200 mb-12">
            <h2 className="text-[22px] font-bold text-slate-900 mb-4">
              Métodos Técnicos de Aplicação
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-[15px] text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Injeção Pressurizada:</strong> Injeção direta nas galerias ativas sem comprometer a estética ou acabamento do móvel.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Barreira Química no Solo:</strong> Criação de camada protetora contra cupins subterrâneos em pisos e paredes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pulverização Curativa e Preventiva:</strong> Cobertura de vigamentos, caibros e ripas em coberturas e telhados.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Garantia Técnica Contratual:</strong> Emissão de termo de garantia com suporte técnico programado no Cariri.</span>
              </div>
            </div>
          </div>

          {/* Alerta de Segurança */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-12 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[17px] font-bold text-amber-900 mb-1">Evite inseticidas aerossóis comuns</h3>
              <p className="text-[15px] text-amber-800 leading-relaxed">
                Produtos de prateleira apenas irritam e dispersam os cupins para outras partes da madeira, sem atingir a rainha ou o núcleo da colônia. Solicite uma avaliação presencial gratuita com nossos especialistas em Juazeiro do Norte, Crato ou Barbalha.
              </p>
            </div>
          </div>

          {/* Link interno complementar */}
          <div className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-[17px] font-bold text-slate-900">Precisa também de dedetização geral contra baratas ou escorpiões?</h3>
              <p className="text-[14px] text-slate-600">Conheça nosso plano completo de dedetização residencial e comercial.</p>
            </div>
            <a
              href="/dedetizacao"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/dedetizacao');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-[14px] whitespace-nowrap"
            >
              <span>Ver Dedetização Geral</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Call to action */}
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[20px] font-bold text-slate-900 mb-1">Proteja Seus Móveis e Telhado com a Alpha Cupim</h3>
              <p className="text-[15px] text-slate-600">Inspeção técnica e orçamento sem custo no Cariri.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.descupinizacao)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_descupinizacao_bottom', message: BUSINESS_CONFIG.whatsapp.messages.descupinizacao, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-6 py-3.5 rounded-xl shadow-sm whitespace-nowrap transition-colors"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default DescupinizacaoPage;
