
import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WorkGallery from './components/WorkGallery.tsx';
import ClientCarousel from './components/ClientCarousel.tsx';
import TrustProof from './components/TrustProof.tsx';
import Services from './components/Services.tsx';
import Benefits from './components/Benefits.tsx';
import SEOContent from './components/SEOContent.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import CookieBanner from './components/CookieBanner.tsx';

import { DedetizacaoPage } from './components/pages/DedetizacaoPage.tsx';
import { DescupinizacaoPage } from './components/pages/DescupinizacaoPage.tsx';
import { SobreNosPage } from './components/pages/SobreNosPage.tsx';
import { ContatoPage } from './components/pages/ContatoPage.tsx';
import { AgendarVisitaPage } from './components/pages/AgendarVisitaPage.tsx';
import { WhatsAppPage } from './components/pages/WhatsAppPage.tsx';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      return pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      setCurrentPath(pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/dedetizacao':
      case '/servico-de-dedetizacao':
      case '/servicos/dedetizacao':
        return <DedetizacaoPage onNavigateHome={() => navigateTo('/')} />;
      
      case '/descupinizacao':
      case '/servico-de-descupinizacao':
      case '/servicos/descupinizacao':
        return <DescupinizacaoPage onNavigateHome={() => navigateTo('/')} />;

      case '/sobre-nos':
      case '/sobre':
      case '/empresa':
        return <SobreNosPage onNavigateHome={() => navigateTo('/')} />;

      case '/contato':
      case '/entre-em-contato':
      case '/fale-conosco':
        return <ContatoPage onNavigateHome={() => navigateTo('/')} />;

      case '/agendar-visita':
      case '/agendar':
      case '/visita-gratuita':
        return <AgendarVisitaPage onNavigateHome={() => navigateTo('/')} />;

      case '/falar-no-whatsapp':
      case '/whatsapp':
      case '/zap':
        return <WhatsAppPage onNavigateHome={() => navigateTo('/')} />;

      default:
        return (
          <>
            <section id="inicio" className="scroll-mt-32">
              <Hero />
            </section>
            
            <WorkGallery />
            <ClientCarousel />
            <TrustProof />
            
            <section id="servicos" className="scroll-mt-32">
              <Services />
            </section>
            
            <section id="beneficios" className="scroll-mt-32">
              <Benefits />
            </section>

            <SEOContent />
            
            <section id="como-funciona" className="scroll-mt-32">
              <HowItWorks />
            </section>
            
            <Testimonials />
            <FAQ />
            
            <section id="contato" className="scroll-mt-32">
              <CTA />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigateTo} currentPath={currentPath} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
      <CookieBanner />
      <Analytics />
    </div>
  );
};

export default App;
