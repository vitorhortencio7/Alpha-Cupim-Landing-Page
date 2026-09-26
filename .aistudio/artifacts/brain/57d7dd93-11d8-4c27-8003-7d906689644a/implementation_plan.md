# Orçamento Rápido Interativo (Lead Ativo WhatsApp & Make Automation)

Criação de uma experiência fluida e interativa de solicitação de orçamento em 2 passos, disponível tanto como rota dedicada para tráfego pago (`/orcamento-rapido`) quanto como modal instantâneo a partir da Hero e CTAs estratégicos, enviando os dados estruturados para o Webhook do Make e conectando o cliente à equipe de vendas no WhatsApp.

## Decisões Confirmadas e Alinhamentos

> [!IMPORTANT]
> **Decisões confirmadas na etapa de clarificação:**
> - **Integração de Dados**: Envio dos dados via POST para o Webhook do Make (configurável em `lib/businessConfig.ts` e `.env`) com tratamento resiliente contra falhas, disparando em paralelo a conversão do Google Ads / GTM e a mensagem estruturada no WhatsApp.
> - **Modo de Acesso Híbrido**: Rota dedicada `/orcamento-rapido` (com HTML pré-renderizado, SEO, sitemap e tags prontas para campanhas de Google Ads / Meta Ads) + Modal interativo instantâneo nos botões da página inicial.
> - **Experiência de Conclusão**: Tela de sucesso animada ("Estamos preparando sua estimativa gratuita"), com botão direto para "Adiantar no WhatsApp com a equipe" já preenchendo a conversa com nome, cidade e pragas selecionadas.

---

## 1. Visão Geral e Conceito do Produto

- **O que faz**: Oferece um fluxo interativo e conversivo para que o cliente solicite orçamento em menos de 45 segundos, eliminando o atrito de formulários frios e direcionando um lead qualificado e quente para os atendentes.
- **Público-alvo**: Moradores e empresas de Juazeiro do Norte, Crato, Barbalha e Cariri que estão com problemas de infestação (cupins, baratas, escorpiões, roedores, etc.) e buscam orçamento rápido e sem burocracia.
- **Proposta de Valor**: O cliente sente acolhimento imediato, seleciona visualmente suas necessidades sem complicação e a equipe comercial já recebe no WhatsApp e no CRM (via Make) o contexto completo da venda.

---

## 2. Experiência do Usuário e Design Visual

### Fluxo de Etapas (Step-by-Step)

```
┌────────────────────────────────────────────────────────────────────────┐
│ PASSO 1: DADOS INICIAIS (Acolhimento & Contato)                       │
│                                                                        │
│ • Saudação personalizada: "Em poucos segundos você terá seu orçamento" │
│ • Nome: Campo com foco suave e placeholder conversacional              │
│ • Cidade: Select com Juazeiro do Norte (padrão), Crato, Barbalha, etc. │
│ • WhatsApp: Input com máscara automática (88) 9XXXX-XXXX               │
│ • Botão: "Selecionar Pragas →" (validação instantânea)                 │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Animação de deslize suave
┌───────────────────────────────────▼────────────────────────────────────┐
│ PASSO 2: SELEÇÃO VISUAL DE PRAGAS (Diagnóstico Rápido)                │
│                                                                        │
│ • Título: "Quais pragas você precisa eliminar?"                        │
│ • Grade de Cards Clicáveis com Ícones e Badge visual de seleção:       │
│   [ Cupins ]  [ Baratas ]  [ Escorpiões ]  [ Ratos/Roedores ]          │
│   [ Formigas ] [ Mosquitos/Dengue ] [ Percevejos ] [ Outro/Geral ]     │
│ • Possibilidade de selecionar múltiplas pragas com contador visual     │
│ • Botão Principal: "Receber Meu Orçamento Gratuito ⚡"                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Disparo Make + Ads + Loading
┌───────────────────────────────────▼────────────────────────────────────┐
│ PASSO 3: SUCESSO & ATENDIMENTO ATIVO (Conversão Fechada)               │
│                                                                        │
│ • Ícone comemorativo animado (Check pulsante em tom esmeralda)         │
│ • Mensagem de autoridade: "Perfeito, [Nome]! Já recebemos seus dados" │
│ • Aviso: "Nossa equipe técnica no Cariri já está montando sua proposta"│
│ • Ação Principal: Botão verde vibrante do WhatsApp:                   │
│   "Falar agora no WhatsApp com a equipe"                              │
│ • Link secundário: "Voltar para o site"                                │
└────────────────────────────────────────────────────────────────────────┘
```

### Identidade Visual & Design System

- **Tema e Cores**: 
  - Fundo Canvas escuro `#0b1329` em total harmonia com o restante do site.
  - Cartões de seleção de praga com superfícies `#131f3d` e bordas sutis `border-slate-800`, transicionando para borda esmeralda brilhante (`border-emerald-500` e fundo `bg-emerald-950/30`) quando selecionados.
  - Botões de ação em esmeralda/verde WhatsApp com feedback tátil no toque.
- **Tipografia e Ritmo**:
  - Títulos elegantes com bom contraste visual.
  - Microcopys de apoio explicando que a avaliação técnica é 100% gratuita e sem compromisso.
- **Tratamento Mobile-First**:
  - Touch targets com altura mínima de 48px.
  - Teclado numérico/tel otimizado para o WhatsApp (`inputMode="tel"`).
  - Prevenção de rolagem desnecessária no modal.

---

## 3. Decisões Técnicas e Integrações

### A. Integração com o Make (Webhook Automation)
- Configuração centralizada em `lib/businessConfig.ts` (`makeWebhookUrl` lendo opcionalmente de variável de ambiente ou URL padrão configurada).
- Envio via `fetch(url, { method: 'POST', body: JSON.stringify(leadPayload) })`.
- **Estratégia de Resiliência**: O envio para o Make é executado com timeout e `try/catch`. Se o webhook do Make demorar ou falhar, o fluxo **NUNCA** trava o usuário: a tela de sucesso é exibida e o WhatsApp abre normalmente com os mesmos dados estruturados.

### B. Formatação da Mensagem Estruturada no WhatsApp
O link gerado pelo botão da tela de sucesso monta uma mensagem limpa e profissional:
```text
Olá, equipe Alpha Cupim! Meu nome é [Nome].
Moro em [Cidade] e solicitei um orçamento rápido no site.
Estou enfrentando problemas com: [Cupins, Baratas].
Gostaria de receber a estimativa e saber a disponibilidade de atendimento.
```

### C. Rota Dedicada `/orcamento-rapido` para Tráfego Pago & SEO
- Inclusão no Router em `App.tsx` para responder em `/orcamento-rapido`.
- Adição da rota no gerador de pré-renderização estática (`scripts/prerender.js`) gerando `dist/orcamento-rapido/index.html` com:
  - `<title>Orçamento Rápido de Dedetização | Alpha Cupim Cariri</title>`
  - `<link rel="canonical" href="https://alphacupim.com.br/orcamento-rapido" />`
  - Descrição persuasiva focada em conversão direta para anúncios.
- Inclusão no `public/sitemap.xml` para indexação limpa e rastreabilidade pelas campanhas.

### D. Substituição do CTA na Hero
- O botão principal da Hero ("Solicitar Orçamento Grátis") passa a disparar a abertura do fluxo interativo (via modal ou navegação instantânea para `/orcamento-rapido`), garantindo que 100% dos cliques no topo da landing page entrem no novo funil de alta conversão.

---

## 4. Diagrama de Arquitetura e Fluxo de Dados

```
┌────────────────────────────────────────────────────────┐
│             Usuário Clica no Botão da Hero             │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
    [Visita /orcamento-rapido]      [Modal na Home]
            │                               │
            └───────────────┬───────────────┘
                            │
            ┌───────────────▼───────────────┐
            │   QuickQuoteWizard (2 Passos)  │
            │  1. Nome, Cidade, WhatsApp    │
            │  2. Seleção de Pragas         │
            └───────────────┬───────────────┘
                            │
                    Submissão do Lead
                            │
            ┌───────────────┼───────────────────────────────┐
            │               │                               │
    ┌───────▼───────┐ ┌─────▼──────────┐ ┌──────────────────▼──────────┐
    │  POST Webhook │ │ Google Ads/GTM │ │   Tela de Sucesso + CTA     │
    │  Make / CRM   │ │  Conversão     │ │   WhatsApp Pré-formatado    │
    └───────────────┘ └────────────────┘ └─────────────────────────────┘
```

---

## 5. Plano de Execução

1. **Configuração Comercial (`lib/businessConfig.ts`)**:
   - Adicionar chave de configuração para Webhook do Make (`makeWebhookUrl`) e template de mensagem de WhatsApp específico para Orçamento Rápido.
2. **Componente do Fluxo Interativo (`components/QuickQuoteWizard.tsx`)**:
   - Construir o assistente conversacional em 2 etapas com cards de pragas ilustrados, validação de telefone com máscara e tela de confirmação.
   - Suporte para execução como modal ou como componente de página cheia.
3. **Página Dedicada (`components/pages/OrcamentoRapidoPage.tsx`)**:
   - Página limpa, rápida e focada em conversão de anúncios, integrando `SEO.tsx` e o `QuickQuoteWizard`.
4. **Atualização da Hero e Navegação (`Hero.tsx`, `Header.tsx`, `App.tsx`)**:
   - Conectar o botão da Hero para abrir o assistente interativo.
   - Adicionar a nova guia "Orçamento Rápido" na navegação do Header para fácil acesso.
   - Atualizar o router em `App.tsx`.
5. **SEO, Sitemap e Prerender (`scripts/prerender.js`, `public/sitemap.xml`)**:
   - Registrar `/orcamento-rapido` no script de build estático e no mapa do site.
6. **Verificação e Teste de Build**:
   - Executar `npm run build` e validar compilação, prerender estático e integridade do TypeScript.
