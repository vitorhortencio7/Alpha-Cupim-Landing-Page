/**
 * =====================================================================
 * FONTE CENTRAL DE DADOS COMERCIAIS E CONFIGURAÇÕES DA ALPHA CUPIM
 * =====================================================================
 *
 * PARA DESENVOLVEDORES E SISTEMAS DE I.A.:
 * Este arquivo é a ÚNICA fonte de verdade para informações comerciais,
 * contatos, garantias, áreas de atendimento e IDs de rastreamento do site.
 * 
 * NUNCA defina telefones, IDs de rastreamento, mensagens de WhatsApp ou
 * regras comerciais diretamente nos componentes. Altere apenas aqui.
 *
 * DECISÕES IMPORTANTES:
 * - O domínio canônico principal do projeto é SEMPRE https://alphacupim.com.br (sem www).
 * - A conversão primária do site é o contato via WhatsApp.
 * - Alegações comerciais devem ser sempre responsáveis e verificáveis.
 *   Não utilizar "100% eficaz", "nº 1 do Cariri" ou "técnicos certificados Anvisa".
 *   A Anvisa registra produtos e saneantes, não certifica pessoas físicas.
 */

export const BUSINESS_CONFIG = {
  // Dados de Identificação da Empresa
  name: "Alpha Cupim - Dedetização e Controle de Pragas",
  tradeName: "Alpha Cupim",
  shortName: "Alpha Cupim Cariri",
  cnpj: "42.552.183/0001-06",
  legalName: "Alpha Cupim Controle de Pragas Urbanas",

  // Domínio Canônico Oficial (sempre https, sem barra no final e sem www)
  canonicalDomain: "https://alphacupim.com.br",

  // Contatos Oficiais
  phone: {
    display: "(88) 99901-0860",
    raw: "88999010860",
    international: "+5588999010860",
    telHref: "tel:88999010860",
  },

  whatsapp: {
    number: "5588999010860",
    display: "(88) 99901-0860",
    // Mensagem base de orçamento
    defaultMessage: "Olá! Gostaria de solicitar um orçamento gratuito para controle de pragas.",
    // Mensagens segmentadas por contexto (CRO - Melhora a contextualização do atendimento)
    messages: {
      hero: "Olá! Vi o site da Alpha Cupim e gostaria de um orçamento gratuito para dedetização.",
      dedetizacao: "Olá! Gostaria de um orçamento para dedetização geral (baratas, formigas, escorpiões).",
      descupinizacao: "Olá! Gostaria de uma avaliação especializada para controle de cupins no meu imóvel.",
      agendamento: "Olá! Gostaria de agendar uma inspeção técnica gratuita no meu endereço.",
      floating: "Olá! Estou no site da Alpha Cupim e gostaria de tirar uma dúvida sobre controle de pragas.",
      header: "Olá! Gostaria de falar com a equipe da Alpha Cupim para solicitar um orçamento.",
      footer: "Olá! Gostaria de informações sobre os serviços de dedetização da Alpha Cupim.",
      cta_final: "Olá! Gostaria de solicitar minha visita técnica gratuita com a Alpha Cupim.",
    },
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  },

  email: "alphacupim@gmail.com",

  // Localização e Atendimento
  location: {
    city: "Juazeiro do Norte",
    state: "CE",
    stateFull: "Ceará",
    country: "BR",
    region: "Região do Cariri (Crajubar)",
    coordinates: {
      latitude: -7.2133,
      longitude: -39.3153,
    },
    // Cidades com atendimento presencial prioritário
    citiesServed: [
      "Juazeiro do Norte",
      "Crato",
      "Barbalha",
      "Missão Velha",
      "Jardim",
    ],
  },

  // Horário de Funcionamento
  openingHours: {
    days: "Segunda a Sábado",
    hours: "07:00 às 19:00",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "19:00",
    emergencySupport: "Plantão para emergências e atendimentos comerciais agendados.",
  },

  // Redes Sociais e Perfis Oficiais
  social: {
    googleBusiness: "https://share.google/nWFRW4Ub6A1Td8eME",
    instagram: "https://www.instagram.com/alphacupimdedetizacao/",
    facebook: "https://www.facebook.com/alphacupim?locale=pt_BR",
  },

  // Assets Visuais Oficiais
  assets: {
    logo: "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png",
    heroTechnician: "https://i.ibb.co/Q2r5Smp/9.jpg",
    teamPhoto: "https://i.ibb.co/kshG4frj/Imagem-do-Whats-App-de-2024-12-04-s-11-30-26-afd6ea56.png",
  },

  // Políticas e Diretrizes Comerciais (Sem alegações exageradas)
  policies: {
    freeInspection: "Visita técnica de avaliação e orçamento sem custos para Juazeiro do Norte, Crato e Barbalha.",
    warranty: "Garantia técnica por escrito conforme o serviço e praga contratada (com assistência inclusa no contrato).",
    safety: "Aplicação profissional com produtos regularizados na Anvisa e rápida liberação do ambiente seguindo as orientações técnicas.",
    sanitaryReport: "Emissão de Laudo Técnico e Certificado de Execução assinado por Responsável Técnico habilitado.",
  },

  // IDs e Tags de Rastreamento Oficiais (NÃO MODIFICAR SEM NECESSIDADE)
  tracking: {
    gtmId: "GTM-MCZBVKX",
    googleAdsId: "AW-10811622315",
    googleAdsConversionSendTo: "AW-10811622315/ku3aCOnI5t8cEKuHsaMo",
    googleSiteVerification: "sfB26IV422v9Gz9CvqqkEWtvB39UmJSOs3QReGJJ9uA",
  },
} as const;

/**
 * Monta o link do WhatsApp oficial com a mensagem pré-configurada
 */
export function buildWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || BUSINESS_CONFIG.whatsapp.defaultMessage);
  return `https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${text}`;
}
