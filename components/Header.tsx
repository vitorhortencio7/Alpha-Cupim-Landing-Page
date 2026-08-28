
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LOGO_URL = "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Dúvidas', href: '#duvidas' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        if (isMenuOpen) {
          closeMenu();
        }
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-200 ${isScrolled ? 'py-3 bg-[#0b1329] shadow-md border-b border-slate-800/80' : 'py-4 bg-[#0b1329] border-b border-slate-800/40'}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <a href="#inicio" onClick={(e) => handleAnchorClick(e, '#inicio')} className="flex items-center gap-3" aria-label="Alpha Cupim Home">
              <img 
                src={LOGO_URL} 
                alt="Alpha Cupim Dedetização em Juazeiro do Norte e Cariri" 
                className="h-10 w-auto object-contain brightness-0 invert"
                loading="eager"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-[15px] font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <a 
              href="tel:88999010860" 
              className="hidden sm:inline-flex items-center gap-2 text-white/90 hover:text-white px-3.5 py-2 rounded-xl text-[14px] font-semibold transition-colors"
              aria-label="Ligar para Alpha Cupim"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>(88) 99901-0860</span>
            </a>

            <a 
              href={WHATSAPP_LINK}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-colors"
            >
              <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
              <span>Orçamento Grátis</span>
            </a>

            <button 
              className="lg:hidden p-2 rounded-xl text-white hover:bg-slate-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Alternar Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0e1726] border-t border-slate-800 px-5 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-[16px] font-semibold text-slate-200 py-2 border-b border-slate-800/80"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <a 
                href="tel:88999010860"
                className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                Ligar (88) 99901-0860
              </a>
              <a 
                href={WHATSAPP_LINK}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white py-3.5 px-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 shadow-md"
              >
                <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

