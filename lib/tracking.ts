/**
 * =====================================================================
 * RASTREAMENTO DE CONVERSÕES E EVENTOS (GOOGLE ADS & GTM)
 * =====================================================================
 *
 * PARA DESENVOLVEDORES E SISTEMAS DE I.A.:
 * 
 * DECISÕES CRÍTICAS DE ARQUITETURA, UX E CRO:
 * 1. PRIORIDADE ABSOLUTA - ABERTURA IMEDIATA DO WHATSAPP:
 *    O clique no WhatsApp NUNCA deve ser interceptado por event.preventDefault()
 *    ou aguardar callbacks assíncronos do Google Ads/GTM.
 *    Navegadores móveis (Safari iOS, Chrome Mobile) bloqueiam severamente
 *    chamadas tardias de window.open() disparadas de dentro de callbacks ou timeouts.
 *    Portanto, a navegação ocorre de forma nativa e imediata via gesto do usuário.
 * 
 * 2. FONTE DE VERDADE DA CONVERSÃO GOOGLE ADS:
 *    A conversão oficial do Google Ads (AW-10811622315/ku3aCOnI5t8cEKuHsaMo - CliqueWhatsApp)
 *    é disparada DIRETAMENTE pelo código via window.gtag().
 *    O evento 'whatsapp_click' enviado ao dataLayer tem finalidade exclusivamente
 *    diagnóstica e de Google Analytics, NÃO devendo ser configurado no GTM para
 *    disparar novamente a mesma conversão do Google Ads (prevenção de duplicidade).
 * 
 * 3. PREVENÇÃO DE DOUBLE-FIRING (1 CLIQUE = NO MÁXIMO 1 CONVERSÃO):
 *    Usuários mobile frequentemente tocam duas vezes seguidas no botão.
 *    Um mecanismo de debounce estrito (1500ms) impede que uma conversão seja enviada
 *    duas vezes no mesmo gesto.
 * 
 * 4. RESILIÊNCIA TOTAL:
 *    A ausência de gtag, GTM ou interferência de adblockers NUNCA interrompe
 *    ou atrasa a experiência do usuário. O tracking roda em bloco try/catch paralelo.
 */

import type React from 'react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from './businessConfig';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Bloqueio de cliques repetidos imediatos (anti double-firing)
let lastTrackedTimestamp = 0;
const DEBOUNCE_THRESHOLD_MS = 1500;

export interface WhatsAppClickOptions {
  location: string;
  message?: string;
  event?: React.MouseEvent<HTMLElement>;
}

/**
 * Processa o rastreamento do clique no WhatsApp de forma não-bloqueante e paralela.
 * Garante que o usuário navegue imediatamente, enquanto o Google Ads e GTM recebem
 * os dados sem atrasar a abertura.
 */
export function handleTrackedWhatsAppClick({
  location,
  message,
  event,
}: WhatsAppClickOptions): void {
  // CRUCIAL: NÃO chamamos event.preventDefault() para links <a>!
  // O navegador segue o href nativamente para o WhatsApp de forma instantânea.
  
  const now = Date.now();
  const isDuplicateClick = (now - lastTrackedTimestamp) < DEBOUNCE_THRESHOLD_MS;

  // Se o clique foi em elemento que não é link nativo (ou se event não veio com default action),
  // garantimos abertura imediata sem esperar nada.
  if (event && event.currentTarget && event.currentTarget.tagName.toLowerCase() !== 'a') {
    const targetUrl = buildWhatsAppUrl(message);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }

  // Prevenção de double-firing: se o usuário tocou duas vezes seguidas, não re-dispara conversão
  if (isDuplicateClick) {
    return;
  }
  lastTrackedTimestamp = now;

  // Rastreamento síncrono e paralelo (executado imediatamente no clique sem travar a thread)
  try {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname || '/' : '/';

    // 1. dataLayer push para Google Analytics / Diagnóstico
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        cta_location: location,
        page_path: currentPath,
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Disparo direto da Conversão Google Ads (Fonte de Verdade)
    // NOTA: Não usamos event_callback para navegação; o tracking é "fire-and-forget"
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: BUSINESS_CONFIG.tracking.googleAdsConversionSendTo,
        value: 1.0,
        currency: 'BRL',
      });
    }
  } catch (trackingError) {
    // Falhas de tracking de terceiros são silenciosas e jamais afetam a conversão humana
    console.warn('[Tracking] Falha não-bloqueante ao registrar conversão:', trackingError);
  }
}
