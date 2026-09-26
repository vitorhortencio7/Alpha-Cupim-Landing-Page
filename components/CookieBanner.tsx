/**
 * =====================================================================
 * COOKIE & PRIVACY BANNER (COM GOOGLE CONSENT MODE V2)
 * =====================================================================
 */

import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('alpha_cookie_consent');
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else if (consent === 'accepted') {
        applyConsent('granted');
      } else {
        applyConsent('denied');
      }
    } catch (e) {
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
      className="fixed bottom-20 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[400px] z-40 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xl transition-all duration-200 pb-safe"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
          <Cookie className="w-4 h-4" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Privacidade e Preferências</h2>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
              aria-label="Fechar aviso de cookies"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Utilizamos cookies para analisar o tráfego do site, melhorar o tempo de resposta e direcionar nosso atendimento no Cariri.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-xs py-2 px-3 rounded-xl shadow-xs transition-colors"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Aceitar Todos</span>
            </button>
            <button
              onClick={handleEssentialOnly}
              className="text-xs font-medium text-slate-500 hover:text-slate-800 py-2 px-2 rounded-xl transition-colors"
            >
              Essenciais
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CookieBanner;
