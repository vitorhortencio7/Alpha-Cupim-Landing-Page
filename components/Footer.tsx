/**
 * =====================================================================
 * FOOTER (RODAPÉ OFICIAL E IDENTIFICAÇÃO JURÍDICA)
 * =====================================================================
 *
 * DECISÕES DE SEO E TRANSPARÊNCIA:
 * 1. Todos os links internos apontam para URLs canônicas.
 * 2. CNPJ, telefone, e-mail e localização centralizados via businessConfig.
 * 3. Links diretos para Google Perfil da Empresa e WhatsApp.
 */

import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';
import { handleTrackedWhatsAppClick } from '../lib/tracking';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && href.startsWith('/')) {
      e.preventDefault();
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070d1e] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Sobre e Identificação */}
          <div>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block mb-4"
            >
              <img 
                src={BUSINESS_CONFIG.assets.logo} 
                alt="Alpha Cupim - Dedetizadora em Juazeiro do Norte" 
                className="h-10 w-auto"
                width="130"
                height="40"
              />
            </a>
            <p className="text-[14px] text-slate-400 leading-relaxed mb-4">
              Empresa especializada em controle de pragas urbanas, descupinização e dedetização com produtos autorizados e garantia técnica formal no Cariri.
            </p>
            <div className="text-[13px] text-slate-500 font-medium">
              CNPJ: {BUSINESS_CONFIG.cnpj}
            </div>
          </div>

          {/* Coluna 2: Serviços (URLs Canônicas) */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-4">Serviços Especializados</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a 
                  href="/dedetizacao" 
                  onClick={(e) => handleLinkClick(e, '/dedetizacao')}
                  className="hover:text-white transition-colors"
                >
                  Dedetização em Juazeiro do Norte
                </a>
              </li>
              <li>
                <a 
                  href="/descupinizacao" 
                  onClick={(e) => handleLinkClick(e, '/descupinizacao')}
                  className="hover:text-white transition-colors"
                >
                  Descupinização Especializada
                </a>
              </li>
              <li>
                <a 
                  href="/dedetizacao" 
                  onClick={(e) => handleLinkClick(e, '/dedetizacao')}
                  className="hover:text-white transition-colors"
                >
                  Controle de Baratas e Escorpiões
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors"
                >
                  Desratização e Controle de Roedores
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors"
                >
                  Controle Comercial com Laudo Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Institucionais */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-4">Institucional</h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:text-white transition-colors"
                >
                  Página Inicial
                </a>
              </li>
              <li>
                <a 
                  href="/sobre-nos" 
                  onClick={(e) => handleLinkClick(e, '/sobre-nos')}
                  className="hover:text-white transition-colors"
                >
                  Sobre a Alpha Cupim
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors"
                >
                  Fale Conosco / Orçamento
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_CONFIG.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Perfil da Empresa no Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato e Região */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-4">Atendimento e Localização</h3>
            <div className="space-y-3 text-[14px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>{BUSINESS_CONFIG.location.city} - {BUSINESS_CONFIG.location.state} ({BUSINESS_CONFIG.location.region})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={BUSINESS_CONFIG.phone.telHref} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>{BUSINESS_CONFIG.openingHours.days}: {BUSINESS_CONFIG.openingHours.hours}</span>
              </div>
            </div>

            <div className="mt-5">
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.footer)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'footer', message: BUSINESS_CONFIG.whatsapp.messages.footer, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[13px] px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                id="btn-footer-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-slate-800 text-[13px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alpha Cupim - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Juazeiro do Norte, Crato, Barbalha e Região do Cariri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
