/**
 * =====================================================================
 * APP ROOT & ROUTER (SPA CANÔNICA COM REDIRECIONAMENTOS DE ALIASES)
 * =====================================================================
 *
 * DECISÕES DE ARQUITETURA E SEO:
 * 1. URLs Canônicas Estritas:
 *    - / -> Homepage
 *    - /dedetizacao -> Dedetização
 *    - /descupinizacao -> Descupinização
 *    - /sobre-nos -> Sobre a empresa
 *    - /contato -> Fale conosco
 *    - /agendar-visita -> Agendamento (noindex)
 *    - /falar-no-whatsapp -> WhatsApp (noindex)
 * 2. Aliases Legados:
 *    Se o usuário carregar um alias antigo (ex: /sobre, /servico-de-dedetizacao, /zap),
 *    o router executa window.history.replaceState para a rota canônica oficial,
 *    eliminando conteúdo duplicado e consolidando o sinal de SEO.
 * 3. Integração com SEO.tsx na raiz e em todas as rotas secundárias.
 */

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
import { SEO } from './components/SEO.tsx';

import { DedetizacaoPage } from './components/pages/DedetizacaoPage.tsx';
import { DescupinizacaoPage } from './components/pages/DescupinizacaoPage.tsx';
import { SobreNosPage } from './components/pages/SobreNosPage.tsx';
import { ContatoPage } from './components/pages/ContatoPage.tsx';
import { AgendarVisitaPage } from './components/pages/AgendarVisitaPage.tsx';
import { WhatsAppPage } from './components/pages/WhatsAppPage.tsx';
import { NotFoundPage } from './components/pages/NotFoundPage.tsx';

// Mapeamento oficial de aliases para rotas canônicas
const ROUTE_ALIASES: Record<string, string> = {
  '/servico-de-dedetizacao': '/dedetizacao',
  '/servicos/dedetizacao': '/dedetizacao',
  '/servico-de-descupinizacao': '/descupinizacao',
  '/servicos/descupinizacao': '/descupinizacao',
  '/sobre': '/sobre-nos',
  '/empresa': '/sobre-nos',
  '/entre-em-contato': '/contato',
  '/fale-conosco': '/contato',
  '/agendar': '/agendar-visita',
  '/visita-gratuita': '/agendar-visita',
  '/whatsapp': '/falar-no-whatsapp',
  '/zap': '/falar-no-whatsapp',
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      // Se for alias, redireciona client-side para o canônico imediatamente
      if (ROUTE_ALIASES[rawPath]) {
        const canonical = ROUTE_ALIASES[rawPath];
        window.history.replaceState({}, '', canonical);
        return canonical;
      }
      return rawPath;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (ROUTE_ALIASES[rawPath]) {
        const canonical = ROUTE_ALIASES[rawPath];
        window.history.replaceState({}, '', canonical);
        setCurrentPath(canonical);
      } else {
        setCurrentPath(rawPath);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    let cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
    if (ROUTE_ALIASES[cleanPath]) {
      cleanPath = ROUTE_ALIASES[cleanPath];
    }
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/dedetizacao':
        return (
          <DedetizacaoPage 
            onNavigateHome={() => navigateTo('/')} 
            onNavigate={navigateTo} 
          />
        );
      
      case '/descupinizacao':
        return (
          <DescupinizacaoPage 
            onNavigateHome={() => navigateTo('/')} 
            onNavigate={navigateTo} 
          />
        );

      case '/sobre-nos':
        return <SobreNosPage onNavigateHome={() => navigateTo('/')} />;

      case '/contato':
        return <ContatoPage onNavigateHome={() => navigateTo('/')} />;

      case '/agendar-visita':
        return <AgendarVisitaPage onNavigateHome={() => navigateTo('/')} />;

      case '/falar-no-whatsapp':
        return <WhatsAppPage onNavigateHome={() => navigateTo('/')} />;

      case '/':
      case '':
        return (
          <>
            <SEO
              title="Dedetizadora em Juazeiro do Norte | Alpha Cupim"
              description="Dedetização em Juazeiro do Norte e região do Cariri. Controle de cupins, baratas, ratos e outras pragas. Solicite seu orçamento com a Alpha Cupim."
              canonicalPath="/"
            />

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

      default:
        return <NotFoundPage onNavigateHome={() => navigateTo('/')} />;
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
