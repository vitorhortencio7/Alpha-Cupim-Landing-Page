import React from 'react';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
export const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

export const handleWhatsAppClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion(WHATSAPP_LINK);
  } else {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  }
};
