
import React from 'react';
import { MapPin, Instagram, Facebook, Phone, Mail, Award } from 'lucide-react';
import { WHATSAPP_LINK, handleWhatsAppClick } from '../lib/constants';

const Footer: React.FC = () => {
  const LOGO_URL = "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png";

  return (
    <footer className="bg-[#0b1329] text-white pt-16 pb-12 px-5 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center mb-5">
               <img 
                src={LOGO_URL} 
                alt="Alpha Cupim Dedetização" 
                className="h-10 w-auto brightness-0 invert opacity-95"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-6 max-w-sm">
              Empresa líder em dedetização e controle integrado de pragas em Juazeiro do Norte e toda a Região do Cariri.
            </p>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.instagram.com/alphacupimdedetizacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors border border-slate-700 text-slate-300 hover:text-white"
                aria-label="Instagram Alpha Cupim"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/alphacupim?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors border border-slate-700 text-slate-300 hover:text-white"
                aria-label="Facebook Alpha Cupim"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 px-3 py-1.5 rounded-lg text-blue-300 text-[13px] font-bold">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Avaliação 5 Estrelas no Google</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-[15px] mb-4 uppercase tracking-wider">Serviços Principais</h4>
            <ul className="space-y-2.5 text-[15px] text-slate-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Dedetização Geral em Juazeiro</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Descupinização e Cupins de Solo</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Controle de Escorpiões e Aranhas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Desratização com Porta-Iscas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Laudo Sanitário para Empresas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[15px] mb-4 uppercase tracking-wider">Cidades Atendidas</h4>
            <ul className="space-y-2.5 text-[15px] text-slate-400">
              <li>Juazeiro do Norte - CE</li>
              <li>Crato - CE</li>
              <li>Barbalha - CE</li>
              <li>Missão Velha - CE</li>
              <li>Jardim e Cariri Cearense</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-[15px] mb-4 uppercase tracking-wider">Fale Conosco</h4>
            <ul className="space-y-3 text-[15px] text-slate-400">
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  onClick={handleWhatsAppClick}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> 
                  <span className="font-semibold text-white">(88) 99901-0860</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400" /> 
                <span>alphacupim@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> 
                <span>Juazeiro do Norte, Crajubar - CE</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-400 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Alpha Cupim Dedetização. Todos os direitos reservados.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p>CNPJ: 42.552.183/0001-06</p>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[12px]">
            <span>Desenvolvido por Vitor Hortêncio</span>
            <a 
              href="https://vitorhortencio.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
              title="Vitor Hortêncio"
            >
              <img 
                src="https://i.ibb.co/B5QnqfTc/Logo-VH.png" 
                alt="Vitor Hortêncio" 
                className="h-3.5 object-contain opacity-75 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
