/**
 * =====================================================================
 * COOKIE & PRIVACY BANNER (COM GOOGLE CONSENT MODE V2)
 * =====================================================================
 *
 * DECISÕES DE COMPLIANCE E UX:
 * 1. Não bloqueia a tela do usuário e permite navegação imediata.
 * 2. Atualiza o Google Consent Mode (analytics_storage, ad_storage)
 *    de acordo com a escolha do usuário via window.gtag.
 * 3. Linguagem clara e transparente sem falsas promessas de "100% LGPD".
 */

import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('alpha_cookie_consent');
      if (!consent) {
        // Se ainda não decidiu, o Consent Mode já está default 'denied' pelo head do index.html.
        // Mostra o banner suavemente após 1s.
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else if (consent === 'accepted') {
        applyConsent('granted');
      } else {
        // Qualquer outro estado ('denied', 'essentials_only', 'dismissed') mantém explicitamente negado
        applyConsent('denied');
      }
    } catch (e) {
      // Falha ao acessar localStorage (ex: modo anônimo ultra restrito)
      applyConsent('denied');
    }
  }, []);

  const applyConsent = (status: 'granted' | 'denied') => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }
  };

  const handleAccept = () => {
    try {
      localStorage.setItem('alpha_cookie_consent', 'accepted');
    } catch (e) {}
    applyConsent('granted');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('alpha_cookie_consent', 'denied');
    } catch (e) {}
    applyConsent('denied');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // Decisão importante: fechar/dispensar sem aceitar é interpretado estritamente como recusa (denied)
    try {
      localStorage.setItem('alpha_cookie_consent', 'denied');
    } catch (e) {}
    applyConsent('denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-24 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[420px] z-40 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
          <Cookie className="w-5 h-5" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Privacidade e Preferências</h2>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              aria-label="Fechar aviso de cookies"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-[13px] text-slate-600 leading-relaxed mb-3.5">
            Utilizamos cookies para analisar o tráfego do site, melhorar o tempo de resposta e direcionar nosso atendimento no Cariri.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-700 active:bg-slate-950 text-white font-semibold text-[13px] py-2 px-3.5 rounded-xl shadow-xs transition-colors"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Aceitar Todos</span>
            </button>
            <button
              onClick={handleEssentialOnly}
              className="text-[12px] font-medium text-slate-500 hover:text-slate-800 py-2 px-2.5 rounded-xl transition-colors"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;
