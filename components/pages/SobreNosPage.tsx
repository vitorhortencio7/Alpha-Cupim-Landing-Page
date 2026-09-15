/**
 * =====================================================================
 * PÁGINA: SOBRE A ALPHA CUPIM (/sobre-nos)
 * =====================================================================
 *
 * DECISÕES DE SEO E COMPLIANCE:
 * 1. Title: "Sobre a Alpha Cupim | Controle de Pragas no Cariri"
 * 2. Canonical: https://alphacupim.com.br/sobre-nos
 * 3. H1: "Sobre a Alpha Cupim Dedetização"
 * 4. Foco na equipe técnica, valores de segurança sanitária e pontualidade
 *    sem superlativos ou números fictícios.
 */

import React from 'react';
import { Award, Users, CheckCircle2, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { SEO } from '../SEO';
import { BUSINESS_CONFIG } from '../../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../../lib/tracking';

interface PageProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const SobreNosPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <>
      <SEO
        title="Sobre a Alpha Cupim | Controle de Pragas no Cariri"
        description="Conheça a história, valores e equipe técnica especializada da Alpha Cupim Dedetização em Juazeiro do Norte e região do Cariri."
        canonicalPath="/sobre-nos"
      />

      <div className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-5">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6" aria-label="Navegação Estrutural">
            <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Sobre Nós</span>
          </nav>

          {/* Hero */}
          <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Controle Especializado de Pragas Urbanas</span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
              Sobre a Alpha Cupim Dedetização
            </h1>

            <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
              Atuamos na proteção de residências, condomínios, estabelecimentos comerciais e indústrias no Cariri cearense com metodologia técnica, produtos autorizados pela Anvisa e foco em segurança sanitária.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              <div>
                <div className="text-[20px] sm:text-[24px] font-bold text-blue-400">Regional</div>
                <div className="text-[13px] text-slate-300">Base em Juazeiro do Norte</div>
              </div>
              <div>
                <div className="text-[20px] sm:text-[24px] font-bold text-amber-400">Verificado</div>
                <div className="text-[13px] text-slate-300">Perfil Google Empresas</div>
              </div>
              <div>
                <div className="text-[20px] sm:text-[24px] font-bold text-emerald-400">Contratual</div>
                <div className="text-[13px] text-slate-300">Garantia por Escrito</div>
              </div>
              <div>
                <div className="text-[20px] sm:text-[24px] font-bold text-white">Crajubar</div>
                <div className="text-[13px] text-slate-300">Orçamento Sem Custos</div>
              </div>
            </div>
          </div>

          {/* História & Valores */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Nossa Proposta de Valor</span>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-slate-900 mb-4">
                Compromisso Técnico e Transparência
              </h2>
              <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-4">
                A Alpha Cupim se destaca na região do Cariri pelo atendimento pontual e pela clareza nas orientações prestadas a cada cliente. Entendemos que o controle de pragas exige rigor técnico, diagnóstico correto da espécie e respeito às pessoas e animais que habitam o imóvel.
              </p>
              <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-6">
                Trabalhamos exclusivamente com produtos saneantes de fabricantes reconhecidos e aprovados pela Anvisa, assegurando rápida liberação do ambiente seguindo as orientações passadas por nossos técnicos.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Emissão de Ordem de Serviço e Certificado de Execução.</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Equipe própria, uniformizada e com equipamentos de proteção.</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Visita técnica gratuita para avaliação em Juazeiro do Norte, Crato e Barbalha.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img 
                src={BUSINESS_CONFIG.assets.heroTechnician} 
                alt="Equipe técnica da Alpha Cupim em atendimento no Cariri"
                className="w-full h-80 object-cover"
                loading="lazy"
                decoding="async"
                width="500"
                height="320"
              />
              <div className="p-5 bg-slate-900 text-white">
                <div className="flex items-center gap-2 text-amber-400 text-[13px] font-bold mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Atendimento Humanizado e Responsável</span>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  Consulte as opiniões reais de quem já contratou a Alpha Cupim no nosso Perfil da Empresa no Google.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <h3 className="text-[20px] font-bold text-slate-900 mb-2">Deseja solicitar uma avaliação no seu imóvel?</h3>
            <p className="text-[15px] text-slate-600 mb-6 max-w-xl mx-auto">
              Nossos especialistas estão à disposição no WhatsApp para agendar sua inspeção gratuita no Cariri.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.header)}`}
              onClick={(e) => handleTrackedWhatsAppClick({ location: 'page_sobre_nos_bottom', message: BUSINESS_CONFIG.whatsapp.messages.header, event: e })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-8 py-4 rounded-xl shadow-md transition-colors"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-5 h-5" width="20" height="20" />
              <span>Falar com a Alpha Cupim no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default SobreNosPage;
