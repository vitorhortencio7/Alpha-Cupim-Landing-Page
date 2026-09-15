/**
 * =====================================================================
 * PRERENDER / STATIC HTML GENERATOR FOR ALPHA CUPIM (VITE + REACT)
 * =====================================================================
 *
 * PARA DESENVOLVEDORES E SISTEMAS DE I.A.:
 * 
 * POR QUE ESTE SCRIPT EXISTE (DECISÃO DE SEO CRÍTICA):
 * Em aplicações SPA puras com Vite, o arquivo base index.html continha um <link rel="canonical">
 * fixo apontando para https://alphacupim.com.br/.
 * Ao acessar rotas internas como /dedetizacao ou /descupinizacao, o servidor retornava o HTML
 * com canonical da Home até o JavaScript carregar e sobrescrever as tags no DOM.
 * Isso gerava sinais conflitantes para rastreadores (Googlebot, Bingbot, scrapers de redes sociais).
 * 
 * O QUE ESTE SCRIPT FAZ:
 * 1. É executado imediatamente após o 'vite build'.
 * 2. Lê o template dist/index.html (já com hashes de scripts e Tailwind compilados).
 * 3. Injeta cirurgicamente no <head> de cada página indexável:
 *    - <title> específico
 *    - <link rel="canonical"> exato da rota
 *    - <meta name="description"> exclusiva
 *    - Open Graph (og:title, og:description, og:url)
 *    - Twitter Cards (twitter:title, twitter:description)
 *    - Robots ('index, follow' nas páginas principais; 'noindex, follow' nas transacionais)
 *    - JSON-LD específico:
 *      * Home: LocalBusiness + FAQPage (FAQ visível apenas na Home)
 *      * Dedetizacao / Descupinizacao / Sobre / Contato: LocalBusiness sem FAQPage
 * 4. Salva os arquivos nas pastas correspondentes (ex: dist/dedetizacao/index.html, dist/404.html).
 * 5. Garante que servidores estáticos (Vercel, Cloud Run, Apache, Nginx) devolvam status HTTP
 *    e metadados 100% corretos desde o primeiro byte recebido pelo crawler.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_TEMPLATE_PATH)) {
  console.error('[Prerender Error] dist/index.html não encontrado. Execute o vite build primeiro.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_TEMPLATE_PATH, 'utf-8');

// Schema Base LocalBusiness oficial (Schema.org)
const baseLocalBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://alphacupim.com.br/#business",
  "name": "Alpha Cupim - Dedetização e Controle de Pragas",
  "alternateName": "Alpha Cupim Cariri",
  "url": "https://alphacupim.com.br/",
  "description": "Empresa especializada em controle de pragas urbanas, descupinização especializada, desratização e dedetização residencial e comercial em Juazeiro do Norte e região do Cariri cearense.",
  "image": "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png",
  "logo": "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png",
  "telephone": "+55-88-99901-0860",
  "email": "alphacupim@gmail.com",
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Pix, Credit Card, Debit Card, Cash",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Juazeiro do Norte",
    "addressRegion": "CE",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.2133,
    "longitude": -39.3153
  },
  "areaServed": [
    { "@type": "City", "name": "Juazeiro do Norte" },
    { "@type": "City", "name": "Crato" },
    { "@type": "City", "name": "Barbalha" },
    { "@type": "City", "name": "Missão Velha" },
    { "@type": "AdministrativeArea", "name": "Região do Cariri" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Dedetização e Controle de Pragas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dedetização em Juazeiro do Norte",
          "description": "Controle profissional de baratas, formigas, escorpiões e aranhas com produtos regularizados e garantia técnica formal."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Descupinização Especializada",
          "description": "Tratamento localizado e barreiras químicas preventivas e corretivas contra cupins de madeira seca e cupins de solo."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desratização e Controle de Roedores",
          "description": "Mapeamento estratégico e controle seguro de roedores com porta-iscas lacrados para residências e empresas."
        }
      }
    ]
  }
};

// FAQ Schema exclusivo da Homepage (onde as perguntas são realmente exibidas aos usuários)
const faqSchema = {
  "@type": "FAQPage",
  "@id": "https://alphacupim.com.br/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Preciso sair de casa durante a dedetização em Juazeiro do Norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para aplicações com pulverização em frestas e ralos, recomenda-se em média de 2 a 4 horas de afastamento, principalmente para gestantes, crianças e animais. Para aplicações em gel contra baratas e formigas, não é necessário sair do imóvel."
      }
    },
    {
      "@type": "Question",
      "name": "Os produtos utilizados são seguros para a família e animais de estimação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A Alpha Cupim utiliza exclusivamente produtos regularizados junto à Anvisa e Ministério da Saúde, manipulados por profissionais capacitados e com orientações claras para cada tipo de ambiente."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a garantia do serviço de dedetização?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A garantia técnica é emitida formalmente por escrito de acordo com a praga tratada, o tipo de imóvel e o método empregado, assegurando assistência técnica durante o período contratado."
      }
    },
    {
      "@type": "Question",
      "name": "A visita técnica para orçamento tem algum custo no Cariri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A visita técnica de avaliação e a elaboração do orçamento não têm custo para Juazeiro do Norte, Crato e Barbalha."
      }
    }
  ]
};

// Definição das rotas e metadados oficiais
const routes = [
  {
    path: '/',
    outputPath: 'index.html',
    title: 'Dedetizadora em Juazeiro do Norte | Alpha Cupim',
    description: 'Dedetização em Juazeiro do Norte e região do Cariri. Controle de cupins, baratas, ratos e outras pragas. Solicite seu orçamento com a Alpha Cupim.',
    canonical: 'https://alphacupim.com.br/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schemaGraph: [baseLocalBusinessSchema, faqSchema], // Home possui FAQ
  },
  {
    path: '/dedetizacao',
    outputPath: 'dedetizacao/index.html',
    aliasPath: 'dedetizacao.html',
    title: 'Dedetização em Juazeiro do Norte | Alpha Cupim',
    description: 'Controle profissional de baratas, formigas, ratos, escorpiões e outras pragas em Juazeiro do Norte e região do Cariri.',
    canonical: 'https://alphacupim.com.br/dedetizacao',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schemaGraph: [baseLocalBusinessSchema], // Sem FAQ indiscriminado
  },
  {
    path: '/descupinizacao',
    outputPath: 'descupinizacao/index.html',
    aliasPath: 'descupinizacao.html',
    title: 'Descupinização em Juazeiro do Norte | Alpha Cupim',
    description: 'Tratamento profissional contra cupins em Juazeiro do Norte e região do Cariri. Solicite uma avaliação com a Alpha Cupim.',
    canonical: 'https://alphacupim.com.br/descupinizacao',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schemaGraph: [baseLocalBusinessSchema],
  },
  {
    path: '/sobre-nos',
    outputPath: 'sobre-nos/index.html',
    aliasPath: 'sobre-nos.html',
    title: 'Sobre a Alpha Cupim | Controle de Pragas no Cariri',
    description: 'Conheça a história, valores e equipe técnica especializada da Alpha Cupim Dedetização em Juazeiro do Norte e região do Cariri.',
    canonical: 'https://alphacupim.com.br/sobre-nos',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schemaGraph: [baseLocalBusinessSchema],
  },
  {
    path: '/contato',
    outputPath: 'contato/index.html',
    aliasPath: 'contato.html',
    title: 'Contato | Alpha Cupim Dedetizadora',
    description: 'Fale com a Alpha Cupim Dedetização em Juazeiro do Norte e região do Cariri. Atendimento via WhatsApp, telefone e orçamento gratuito.',
    canonical: 'https://alphacupim.com.br/contato',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schemaGraph: [baseLocalBusinessSchema],
  },
  {
    path: '/agendar-visita',
    outputPath: 'agendar-visita/index.html',
    aliasPath: 'agendar-visita.html',
    title: 'Agendar Visita Gratuita | Alpha Cupim Dedetizadora',
    description: 'Agende uma inspeção técnica sem custos no seu imóvel em Juazeiro do Norte, Crato ou Barbalha com a Alpha Cupim.',
    canonical: 'https://alphacupim.com.br/agendar-visita',
    robots: 'noindex, follow',
    schemaGraph: [baseLocalBusinessSchema],
  },
  {
    path: '/falar-no-whatsapp',
    outputPath: 'falar-no-whatsapp/index.html',
    aliasPath: 'falar-no-whatsapp.html',
    title: 'Falar no WhatsApp | Alpha Cupim Dedetizadora',
    description: 'Conecte-se diretamente com a equipe técnica da Alpha Cupim pelo WhatsApp para orçamentos e agendamentos no Cariri.',
    canonical: 'https://alphacupim.com.br/falar-no-whatsapp',
    robots: 'noindex, follow',
    schemaGraph: [baseLocalBusinessSchema],
  },
  {
    path: '/404',
    outputPath: '404.html',
    title: 'Página Não Encontrada | Alpha Cupim',
    description: 'A página solicitada não foi encontrada. Conheça nossos serviços de dedetização e descupinização em Juazeiro do Norte e Cariri.',
    canonical: 'https://alphacupim.com.br/',
    robots: 'noindex, nofollow',
    schemaGraph: [baseLocalBusinessSchema],
  },
];

/**
 * Injeta metadados específicos substituindo tags existentes no HTML
 */
function injectPageMetadata(html, route) {
  let modified = html;

  // 1. <title>
  modified = modified.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  modified = modified.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${route.title}" />`);

  // 2. <meta name="description">
  modified = modified.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);

  // 3. <link rel="canonical">
  modified = modified.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${route.canonical}" />`);

  // 4. <meta name="robots">
  modified = modified.replace(/<meta name="robots" content=".*?" \/>/i, `<meta name="robots" content="${route.robots}" />`);

  // 5. Open Graph
  modified = modified.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  modified = modified.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  modified = modified.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${route.canonical}" />`);

  // 6. Twitter Card
  modified = modified.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
  modified = modified.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);

  // 7. Injeta Schema JSON-LD limpo e específico para a rota
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": route.schemaGraph,
  };
  const schemaReplacement = `<script type="application/ld+json">\n    ${JSON.stringify(structuredData, null, 2).replace(/\n/g, '\n    ')}\n    </script>`;
  
  modified = modified.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaReplacement);

  return modified;
}

console.log('🚀 Iniciando pré-renderização estática de metadados para rotas...');

for (const route of routes) {
  const finalHtml = injectPageMetadata(baseHtml, route);
  const targetFile = path.join(DIST_DIR, route.outputPath);
  const targetDir = path.dirname(targetFile);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetFile, finalHtml, 'utf-8');
  console.log(` ✅ Gerado: dist/${route.outputPath} (canonical: ${route.canonical})`);

  if (route.aliasPath) {
    const aliasFile = path.join(DIST_DIR, route.aliasPath);
    fs.writeFileSync(aliasFile, finalHtml, 'utf-8');
  }
}

console.log('🎉 Pré-renderização estática concluída com sucesso!');
