/**
 * =====================================================================
 * COMPONENTE CENTRALIZADO DE SEO, CANONICAL E METADADOS DINÂMICOS
 * =====================================================================
 *
 * PARA DESENVOLVEDORES E SISTEMAS DE I.A.:
 * 
 * DECISÕES DE SEO TÉCNICO:
 * 1. Cada rota desta SPA React atualiza dinamicamente:
 *    - <title>
 *    - <meta name="description">
 *    - <link rel="canonical"> (sempre apontando para sua própria URL canônica)
 *    - <meta name="robots"> (páginas transacionais usam "noindex, follow")
 *    - Tags Open Graph (og:title, og:description, og:url, og:image, etc.)
 *    - Tags Twitter Card
 * 2. REGRA DO CANONICAL:
 *    Nunca aponte todas as rotas para a homepage! Cada página de serviço
 *    representa uma intenção de busca diferente (ex: /dedetizacao vs /descupinizacao).
 *    O canonical deve ser absoluto, com HTTPS e sem barra final (exceto raiz).
 * 3. PÁGINAS TRANSACIONAIS (NOINDEX):
 *    Rotas como /agendar-visita e /falar-no-whatsapp possuem função puramente
 *    utilitária de conversão/redirecionamento e não devem disputar indexação
 *    orgânica com as páginas principais de serviço.
 */

import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string; // Ex: "/", "/dedetizacao", "/descupinizacao"
  noIndex?: boolean;
  ogType?: string;
  image?: string;
  schemaJson?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  noIndex = false,
  ogType = 'website',
  image = BUSINESS_CONFIG.assets.logo,
  schemaJson,
}) => {
  useEffect(() => {
    // 1. Atualiza o <title>
    document.title = title;

    // Função utilitária para buscar ou criar tags no <head>
    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    updateOrCreateMeta('description', description);

    // 3. Robots (Permite indexação nas páginas principais, noindex nas puramente transacionais)
    const robotsContent = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    updateOrCreateMeta('robots', robotsContent);

    // 4. URL Canônica Única
    const cleanPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '');
    const canonicalUrl = `${BUSINESS_CONFIG.canonicalDomain}${cleanPath === '/' ? '/' : cleanPath}`;

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Open Graph
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:url', canonicalUrl, true);
    updateOrCreateMeta('og:type', ogType, true);
    updateOrCreateMeta('og:image', image, true);
    updateOrCreateMeta('og:site_name', BUSINESS_CONFIG.shortName, true);
    updateOrCreateMeta('og:locale', 'pt_BR', true);

    // 6. Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', image);

    // 7. JSON-LD dinâmico por página (se fornecido)
    const dynamicSchemaId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(dynamicSchemaId) as HTMLScriptElement | null;
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = dynamicSchemaId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, noIndex, ogType, image, schemaJson]);

  return null;
};

export default SEO;
