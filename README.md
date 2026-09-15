# Alpha Cupim - Controle de Pragas e Descupinização no Cariri

Documentação técnica oficial do site institucional e landing page de alta conversão da **Alpha Cupim**, especializada em dedetização, descupinização e controle integrado de pragas urbanas em Juazeiro do Norte, Crato, Barbalha e região do Cariri cearense.

---

## 1. Arquitetura do Projeto

- **Framework**: React 19 + TypeScript.
- **Build Tooling**: Vite com plugin nativo `@tailwindcss/vite` (Tailwind CSS v4).
- **Estilização**: Tailwind CSS com importação pura no build (`index.css`), eliminando completamente qualquer dependência do CDN de runtime em produção.
- **Roteamento SPA**: Router client-side declarativo em `App.tsx`, com suporte a pushState/popState, normalização de paths com trailing slashes e redirecionamentos client-side automáticos de aliases legados.
- **Ícones**: `lucide-react`.
- **Animações**: `motion` / `framer-motion`.

---

## 2. Estrutura de SEO e Pré-Renderização Estática

### Canonical por Página e Eliminação de Conflitos
Para evitar que rastreadores (Googlebot, Bingbot) recebam temporariamente o canonical da homepage ao inspecionar URLs internas (`/dedetizacao`, `/descupinizacao`, etc.), o projeto utiliza um script de **pré-renderização estática pós-build** (`scripts/prerender.js`):
1. O comando `npm run build` executa o `vite build` e, em seguida, dispara `node scripts/prerender.js`.
2. Para cada rota canônica indexável, é gerado um arquivo HTML dedicado dentro do `dist/` com `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph e Twitter Cards específicos.
3. No client-side, o componente `<SEO />` (`components/SEO.tsx`) gerencia a atualização dinâmica do `<head>` durante transições SPA sem recarregamento de página.

### Matriz de Rotas Canônicas e Indexação
| Rota | Arquivo Gerado | Canonical | Indexação | Schema.org |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `dist/index.html` | `https://alphacupim.com.br/` | index, follow | `LocalBusiness` + `FAQPage` |
| `/dedetizacao` | `dist/dedetizacao/index.html` | `https://alphacupim.com.br/dedetizacao` | index, follow | `LocalBusiness` |
| `/descupinizacao` | `dist/descupinizacao/index.html` | `https://alphacupim.com.br/descupinizacao` | index, follow | `LocalBusiness` |
| `/sobre-nos` | `dist/sobre-nos/index.html` | `https://alphacupim.com.br/sobre-nos` | index, follow | `LocalBusiness` |
| `/contato` | `dist/contato/index.html` | `https://alphacupim.com.br/contato` | index, follow | `LocalBusiness` |
| `/agendar-visita` | `dist/agendar-visita/index.html` | `https://alphacupim.com.br/agendar-visita` | noindex, follow | `LocalBusiness` |
| `/falar-no-whatsapp` | `dist/falar-no-whatsapp/index.html` | `https://alphacupim.com.br/falar-no-whatsapp` | noindex, follow | `LocalBusiness` |
| `/404` | `dist/404.html` | `https://alphacupim.com.br/` | noindex, nofollow | `LocalBusiness` |

### Dados Estruturados (Schema.org / JSON-LD)
- **Tipo Oficial**: Utiliza estritamente `@type: "LocalBusiness"`, sem schemas não padronizados.
- **FAQPage Condicional**: O markup de `FAQPage` está presente **exclusivamente** na Homepage, onde as perguntas e respostas estão realmente visíveis aos usuários humanos, cumprindo as diretrizes de Rich Results do Google Search Central.
- **Avaliações Transparentes**: Não são emitidos blocos fictícios ou manipulados de `aggregateRating`; as avaliações reais e o link direto para o Perfil da Empresa no Google Maps são fornecidos com transparência na interface.

---

## 3. Google Ads

- **ID da Conta**: `AW-10811622315`
- **Ação de Conversão Oficial**: `AW-10811622315/ku3aCOnI5t8cEKuHsaMo` (Nome da conversão: *CliqueWhatsApp*).
- **Fonte de Verdade**: O disparo da conversão é feito **diretamente via código** no arquivo `lib/tracking.ts`, através da chamada:
  ```javascript
  gtag('event', 'conversion', {
    send_to: 'AW-10811622315/ku3aCOnI5t8cEKuHsaMo',
    value: 1.0,
    currency: 'BRL',
  });
  ```
- **Disparo Direto e Paralelo**: A conversão é enviada de forma assíncrona ("fire-and-forget"). Ela **não bloqueia** o clique do usuário e não depende de callbacks para abrir o WhatsApp.

---

## 4. WhatsApp e Resiliência (Zero Atraso)

- **Prioridade Absoluta ao Usuário**: O clique em botões do WhatsApp nunca é interceptado por `event.preventDefault()` em links `<a>`. O navegador abre o WhatsApp de forma nativa e imediata no toque do usuário.
- **Abertura Segura em Mobile**: Evita o bloqueio estrito de popups em navegadores como Safari (iOS) e Chrome (Android), que barram janelas abertas dentro de callbacks ou timeouts tardios.
- **Proteção Anti-Double-Firing**: Um mecanismo de debounce estrito (1500ms) em `lib/tracking.ts` impede que toques duplos acidentais em telas touchscreen registrem mais de 1 conversão por gesto.
- **Resiliência a Falhas**: Caso o script do Google Ads ou GTM falhe ou seja impedido por adblocker, a navegação para o WhatsApp prossegue instantaneamente, sem travar o visitante.

---

## 5. Google Tag Manager (GTM)

- **Contêiner Oficial**: `GTM-MCZBVKX`
- **Papel no Ecossistema**: Utilizado para eventos do Google Analytics, diagnósticos e métricas de navegação.
- **Prevenção de Double-Firing**: O evento `whatsapp_click` enviado ao `dataLayer` carrega parâmetros úteis (`cta_location`, `page_path`, `timestamp`), mas **NÃO DEVE** estar configurado dentro do GTM para disparar a conversão `AW-10811622315/ku3aCOnI5t8cEKuHsaMo` do Google Ads, pois essa conversão já é disparada diretamente pelo código.

---

## 6. Consent Mode v2 (Privacidade e LGPD)

- **Ordem de Execução Estrita**: No `<head>` de `index.html`, o script de Consent Mode Default é executado **antes** da injeção do GTM e do `gtag.js` do Google Ads.
- **Estado Padrão**:
  ```javascript
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
  ```
- **Banner de Consentimento (`components/CookieBanner.tsx`)**:
  - **Aceitar**: atualiza o consentimento para `'granted'` e salva `'accepted'` no `localStorage`.
  - **Apenas Essenciais**: mantém o consentimento em `'denied'` e salva `'denied'` no `localStorage`.
  - **Fechar/Dispensar**: tratado estritamente como **recusa** (`'denied'`), garantindo que fechar o aviso sem autorização formal nunca seja interpretado como consentimento.

---

## 7. Deploy, Vercel e Tratamento de 404

### Configuração `vercel.json`
- `"cleanUrls": true`: URLs limpas e sem `.html`.
- `"trailingSlash": false`: Normalização de barras finais em todas as rotas.
- **Redirecionamentos 301 Permanentes**:
  - `www.alphacupim.com.br` -> `https://alphacupim.com.br/` (canônica oficial sem www).
  - Aliases legados (`/servico-de-dedetizacao`, `/sobre`, `/zap`, `/agendar`, etc.) redirecionam via 301 para suas rotas canônicas definitivas.
- **Tratamento de 404 Real**:
  - Como todas as rotas legítimas possuem arquivos estáticos dedicados no `dist/`, qualquer rota inexistente acessada diretamente pelo navegador/crawler não encontra arquivo correspondente e é atendida pelo arquivo `dist/404.html` com **código de status HTTP 404 real**, eliminando riscos de soft-404.

---

## 8. Guia de Manutenção

### Onde Editar Dados da Empresa
Todas as informações de contato, horários, telefones, links e mensagens padrão do WhatsApp estão centralizadas em:
👉 `lib/businessConfig.ts`

**Nunca altere números de telefone ou links de WhatsApp diretamente nos componentes visuais.** Altere apenas no `businessConfig.ts` para que todas as páginas, rodapés, botões flutuantes e metadados JSON-LD sejam atualizados simultaneamente.

### Como Adicionar uma Nova Rota Canônica
1. Crie o componente da página em `components/pages/NovaPagina.tsx`.
2. Adicione a rota no mapeamento de `App.tsx` e no router switch-case.
3. Adicione a definição da rota no script `scripts/prerender.js` com seu `title`, `description`, `canonical` e `schemaGraph`.
4. Inclua a URL no arquivo `public/sitemap.xml`.
5. Execute `npm run build` para validar e gerar os arquivos estáticos pré-renderizados.
