/**
 * =====================================================================
 * CONSTANTES DE COMPATIBILIDADE E ATALHOS
 * =====================================================================
 *
 * PARA DESENVOLVEDORES E SISTEMAS DE I.A.:
 * Este arquivo reexporta as constantes centrais de `lib/businessConfig.ts`
 * e a função de rastreamento de `lib/tracking.ts`. Ele existe para manter
 * compatibilidade com componentes legados, garantindo que tudo aponte
 * para a mesma fonte central de verdade.
 */

import React from 'react';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from './businessConfig';
import { handleTrackedWhatsAppClick } from './tracking';

export { BUSINESS_CONFIG, buildWhatsAppUrl };
export { handleTrackedWhatsAppClick };

export const WHATSAPP_LINK = buildWhatsAppUrl();
export const WHATSAPP_ICON = BUSINESS_CONFIG.whatsapp.iconUrl;

/**
 * Handler legado para cliques no WhatsApp, encaminhado com segurança
 * para a engine central de rastreamento com localização genérica.
 */
export const handleWhatsAppClick = (e: React.MouseEvent<HTMLElement>) => {
  handleTrackedWhatsAppClick({
    location: 'legacy_cta',
    event: e,
  });
};
