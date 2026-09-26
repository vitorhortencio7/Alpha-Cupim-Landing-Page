/**
 * =====================================================================
 * FOOTER (RODAPÉ OFICIAL E IDENTIFICAÇÃO JURÍDICA)
 * =====================================================================
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
    <footer className="bg-[#070d1e] text-slate-400 pt-12 pb-8 sm:pt-16 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Coluna 1: Sobre e Identificação */}
          <div>
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block mb-3"
            >
              <img 
                src={BUSINESS_CONFIG.assets.logo} 
                alt="Alpha Cupim - Dedetizadora em Juazeiro do Norte" 
                className="h-9 w-auto"
                width="130"
                height="40"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
              Empresa especializada em controle de pragas urbanas, descupinização e dedetização com produtos autorizados e garantia técnica formal no Cariri.
            </p>
            <div className="text-xs text-slate-500 font-medium">
              CNPJ: {BUSINESS_CONFIG.cnpj}
            </div>
          </div>

          {/* Coluna 2: Serviços (URLs Canônicas) */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-3">Serviços Especializados</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="/dedetizacao" 
                  onClick={(e) => handleLinkClick(e, '/dedetizacao')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Dedetização em Juazeiro do Norte
                </a>
              </li>
              <li>
                <a 
                  href="/descupinizacao" 
                  onClick={(e) => handleLinkClick(e, '/descupinizacao')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Descupinização Especializada
                </a>
              </li>
              <li>
                <a 
                  href="/dedetizacao" 
                  onClick={(e) => handleLinkClick(e, '/dedetizacao')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Controle de Baratas e Escorpiões
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Desratização e Controle de Roedores
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Controle Comercial com Laudo Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Institucionais */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-3">Institucional</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Página Inicial
                </a>
              </li>
              <li>
                <a 
                  href="/sobre-nos" 
                  onClick={(e) => handleLinkClick(e, '/sobre-nos')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Sobre a Alpha Cupim
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  onClick={(e) => handleLinkClick(e, '/contato')}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Fale Conosco / Orçamento
                </a>
              </li>
              <li>
                <a 
                  href={BUSINESS_CONFIG.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-0.5"
                >
                  <span>Perfil da Empresa no Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato e Região */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-3">Atendimento no Cariri</h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.location.city} - {BUSINESS_CONFIG.location.state} ({BUSINESS_CONFIG.location.region})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={BUSINESS_CONFIG.phone.telHref} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.openingHours.days}: {BUSINESS_CONFIG.openingHours.hours}</span>
              </div>
            </div>

            <div className="mt-4">
              <a 
                href={`https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.messages.footer)}`}
                onClick={(e) => handleTrackedWhatsAppClick({ location: 'footer', message: BUSINESS_CONFIG.whatsapp.messages.footer, event: e })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                id="btn-footer-whatsapp"
              >
                <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Inferior */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Alpha Cupim - Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Juazeiro do Norte, Crato, Barbalha e Região do Cariri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
