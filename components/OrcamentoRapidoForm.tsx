/**
 * =====================================================================
 * FORMULÁRIO INTERATIVO: ORÇAMENTO RÁPIDO (100% MOBILE-FIRST)
 * =====================================================================
 *
 * DECISÕES DE ARQUITETURA, UX E RESPONSIVIDADE MOBILE:
 * 
 * 1. ZERO TRUNCAMENTO & SEM SCROLL DUPLO:
 *    - Nomes e descrições das pragas ajustam naturalmente sem cortar texto.
 *    - Sem container interno com overflow conflitante.
 * 
 * 2. HEADER DEDICADO SEM SOBREPOSIÇÃO:
 *    - O botão de fechar (X) possui slot dedicado no topo flexível com drag handle
 *      para affordance clara de bottom sheet no mobile.
 * 
 * 3. TIPOGRAFIA E TOUCH TARGETS (48PX+):
 *    - Inputs com text-base (16px) obrigatório: previne zoom automático forçado do iOS Safari.
 *    - Botões e cards dimensionados para toque fácil com o polegar (thumb-friendly).
 * 
 * 4. INTEGRAÇÃO ROBUSTA COM MAKE & GOOGLE ADS:
 *    - POST JSON com timeout não-bloqueante para Make Webhook.
 *    - Conversão do Google Ads e dataLayer push.
 *    - Tela de sucesso com resumo e botão direto de WhatsApp com mensagem estruturada.
 */

import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Bug, 
  AlertTriangle, 
  Send, 
  Loader2, 
  X,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../lib/businessConfig';

export interface OrcamentoRapidoFormProps {
  isModal?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
  defaultCity?: string;
  sourceLocation?: string;
}

// Opções de pragas com nomes objetivos e sem texto cortado
const PEST_OPTIONS = [
  {
    id: 'cupins',
    label: 'Cupins (Madeira ou Solo)',
    description: 'Portas, móveis, forros e vigas com pó ou asas',
    icon: Bug,
    badge: 'Urgente',
  },
  {
    id: 'baratas',
    label: 'Baratas e Insetos',
    description: 'Ralos, cozinhas, frestas e caixas de gordura',
    icon: Bug,
    badge: 'Comum',
  },
  {
    id: 'escorpioes',
    label: 'Escorpiões',
    description: 'Áreas com entulhos, ralos, muros e frestas',
    icon: AlertTriangle,
    badge: 'Risco Alto',
  },
  {
    id: 'ratos',
    label: 'Ratos e Roedores',
    description: 'Telhados, forros, despensas e desratização',
    icon: ShieldAlert,
    badge: 'Saúde',
  },
  {
    id: 'formigas',
    label: 'Formigas Caseiras',
    description: 'Invasão em bancadas, paredes ou fiações',
    icon: Sparkles,
    badge: null,
  },
  {
    id: 'outras',
    label: 'Dedetização Geral',
    description: 'Aranhas, traças, pulgas e prevenção completa',
    icon: ShieldCheck,
    badge: 'Geral',
  },
];

// Cidades atendidas no Cariri
const CITIES = [
  'Juazeiro do Norte',
  'Crato',
  'Barbalha',
  'Missão Velha',
  'Brejo Santo',
  'Outra cidade da Região do Cariri',
];

export const OrcamentoRapidoForm: React.FC<OrcamentoRapidoFormProps> = ({
  isModal = false,
  onClose,
  onSuccess,
  defaultCity = 'Juazeiro do Norte',
  sourceLocation = 'orcamento_rapido',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Campos
  const [name, setName] = useState('');
  const [city, setCity] = useState(defaultCity);
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedPests, setSelectedPests] = useState<string[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Estados
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Máscara de WhatsApp BR: (88) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: '' }));
    }
  };

  // Toggle de pragas
  const togglePest = (id: string) => {
    setSelectedPests((prev) => {
      if (prev.includes(id)) {
        return prev.filter((p) => p !== id);
      } else {
        return [...prev, id];
      }
    });
    if (errors.pests) {
      setErrors((prev) => ({ ...prev, pests: '' }));
    }
    if (errors.submit) {
      setErrors((prev) => ({ ...prev, submit: '' }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Por favor, informe seu nome para continuarmos.';
    }

    const rawPhone = whatsapp.replace(/\D/g, '');
    if (!rawPhone || rawPhone.length < 10) {
      newErrors.whatsapp = 'Informe seu WhatsApp com DDD (Ex: 88 9...)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (selectedPests.length === 0) {
      newErrors.pests = 'Selecione pelo menos uma praga para o orçamento.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: '' }));

    const pestLabels = selectedPests
      .map((id) => PEST_OPTIONS.find((p) => p.id === id)?.label || id)
      .join(', ');

    const payload = {
      timestamp: new Date().toISOString(),
      origem: 'formulario_orcamento_rapido',
      local_disparo: sourceLocation,
      nome: name.trim(),
      cidade: city,
      whatsapp: whatsapp.replace(/\D/g, ''),
      whatsapp_formatado: whatsapp,
      pragas_selecionadas: pestLabels,
      pragas_ids: selectedPests,
      observacoes: additionalNotes.trim(),
      url_origem: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer || 'direto' : '',
    };

    try {
      const webhookUrl = BUSINESS_CONFIG.integrations.makeWebhookUrl;
      if (!webhookUrl || !webhookUrl.startsWith('http')) {
        throw new Error('Webhook URL não configurada');
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      let response: Response;
      try {
        response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      // 1. dataLayer push para Analytics / diagnóstico (somente após sucesso HTTP 2xx)
      try {
        if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: 'lead_form_submitted',
            form_name: 'orcamento_rapido',
            user_city: city,
            pests_count: selectedPests.length,
            timestamp: new Date().toISOString(),
          });
        }
      } catch (dlErr) {
        console.warn('[Analytics] dataLayer push error:', dlErr);
      }

      // 2. Disparo direto da nova Conversão Google Ads (Fonte de Verdade)
      try {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: BUSINESS_CONFIG.tracking.googleAdsLeadFormConversionSendTo,
            value: 1.0,
            currency: 'BRL',
          });
        }
      } catch (gtagErr) {
        console.warn('[Google Ads] Lead form conversion error:', gtagErr);
      }

      setIsSubmitting(false);
      setStep(3);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.warn('[Make Integration] Falha no envio do lead:', err);
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        submit: 'Não conseguimos enviar sua solicitação agora. Confira sua conexão e tente novamente.',
      }));
    }
  };

  // Mensagem customizada para WhatsApp
  const getWhatsAppQuickLink = () => {
    const pestNames = selectedPests
      .map((id) => PEST_OPTIONS.find((p) => p.id === id)?.label || id)
      .join(', ');

    const msg = `Olá! Meu nome é ${name.trim()}, sou de ${city}. Solicitei orçamento rápido no site da Alpha Cupim para controle de: ${pestNames}.${additionalNotes ? ` Obs: ${additionalNotes}.` : ''} Gostaria de adiantar meu atendimento!`;

    return `https://api.whatsapp.com/send?phone=${BUSINESS_CONFIG.whatsapp.number}&text=${encodeURIComponent(msg)}`;
  };

  // Nome sanitizado para saudação
  const displayFirstName = name.trim().split(' ')[0].slice(0, 16);

  return (
    <div className={`relative bg-[#0c1427] border border-slate-800 text-white shadow-2xl ${
      isModal 
        ? 'w-full rounded-t-3xl sm:rounded-3xl pb-safe' 
        : 'w-full rounded-2xl sm:rounded-3xl'
    }`}>
      
      {/* Affordance de Bottom Sheet no Mobile (quando em modal) */}
      {isModal && (
        <div className="w-10 h-1 bg-slate-700/80 rounded-full mx-auto my-2.5 block sm:hidden" />
      )}

      {/* Barra de Progresso Superior com Gradiente da Marca */}
      <div className="h-1.5 w-full bg-slate-800/80 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-green-500 transition-all duration-300 ease-out"
          style={{ width: step === 1 ? '35%' : step === 2 ? '75%' : '100%' }}
        />
      </div>

      {/* HEADER INTEGRADO DEDICADO (SEM SOBREPOSIÇÃO) */}
      <div className="flex items-center justify-between px-4 sm:px-6 pt-3 pb-2 border-b border-slate-800/60 min-h-[48px]">
        {/* Esquerda: Botão Voltar ou Badge */}
        <div>
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-xs font-semibold py-1 px-2.5 rounded-lg bg-slate-800/80 active:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
              <span>Voltar</span>
            </button>
          ) : step === 1 ? (
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Orçamento Grátis</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Concluído</span>
            </div>
          )}
        </div>

        {/* Centro: Indicador de Etapa */}
        {step < 3 && (
          <div className="text-[10px] font-bold tracking-wider text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
            {step === 1 ? 'ETAPA 1 DE 2' : 'ETAPA 2 DE 2'}
          </div>
        )}

        {/* Direita: Botão Fechar X (quando em modal) */}
        <div>
          {isModal && onClose ? (
            <button
              onClick={onClose}
              type="button"
              className="w-8 h-8 text-slate-400 hover:text-white bg-slate-800/70 hover:bg-slate-700 active:bg-slate-750 rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Fechar formulário"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="w-8" />
          )}
        </div>
      </div>

      {/* ================================================================= */}
      {/* ETAPA 1: DADOS INICIAIS                                           */}
      {/* ================================================================= */}
      {step === 1 && (
        <form onSubmit={handleNextStep} className="p-4 sm:p-6">
          <div className="mb-4 text-left">
            <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-1">
              Receba seu orçamento em 1 minuto
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sem compromisso. Atendimento pontual para residências e comércios no Cariri.
            </p>
          </div>

          <div className="space-y-3.5 mb-5">
            {/* Campo: Nome */}
            <div>
              <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-200 mb-1">
                Seu nome ou empresa <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="Ex: Carlos Silva"
                  className={`w-full h-12 bg-slate-950/80 border ${
                    errors.name ? 'border-rose-500' : 'border-slate-700 focus:border-blue-500'
                  } rounded-xl pl-10 pr-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`}
                  autoComplete="name"
                />
              </div>
              {errors.name && (
                <p className="text-rose-400 text-xs mt-1 font-medium">{errors.name}</p>
              )}
            </div>

            {/* Campo: Cidade */}
            <div>
              <label htmlFor="lead-city" className="block text-xs font-semibold text-slate-200 mb-1">
                Cidade no Cariri <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="lead-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-12 bg-slate-950/80 border border-slate-700 rounded-xl pl-10 pr-8 text-base text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 appearance-none transition-all cursor-pointer"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c} className="bg-slate-900 text-white">
                      {c}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Campo: WhatsApp */}
            <div>
              <label htmlFor="lead-whatsapp" className="block text-xs font-semibold text-slate-200 mb-1">
                WhatsApp com DDD <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <img
                  src={BUSINESS_CONFIG.whatsapp.iconUrl}
                  alt="WhatsApp"
                  className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none"
                  width="16"
                  height="16"
                />
                <input
                  id="lead-whatsapp"
                  type="tel"
                  value={whatsapp}
                  onChange={handlePhoneChange}
                  placeholder="(88) 99999-9999"
                  className={`w-full h-12 bg-slate-950/80 border ${
                    errors.whatsapp ? 'border-rose-500' : 'border-slate-700 focus:border-blue-500'
                  } rounded-xl pl-10 pr-3.5 text-base text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all`}
                  autoComplete="tel"
                />
              </div>
              {errors.whatsapp && (
                <p className="text-rose-400 text-xs mt-1 font-medium">{errors.whatsapp}</p>
              )}
              <p className="text-slate-400 text-[11px] mt-1">
                Enviaremos os valores técnicos diretamente para este número.
              </p>
            </div>
          </div>

          {/* Botão de Avanço: Thumb-Friendly */}
          <button
            type="submit"
            className="w-full h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-900/40 transition-all cursor-pointer"
          >
            <span>Selecionar Pragas</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Selo Mobile */}
          <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Atendimento seguro • Sem spam • Equipe própria</span>
          </div>
        </form>
      )}

      {/* ================================================================= */}
      {/* ETAPA 2: SELEÇÃO DE PRAGAS (100% RESPONSIVA, SEM SCROLL DUPLO)   */}
      {/* ================================================================= */}
      {step === 2 && (
        <form onSubmit={handleSubmitFinal} className="p-4 sm:p-6">
          <div className="mb-3.5 text-left">
            <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-0.5">
              Quais pragas você quer combater{displayFirstName ? `, ${displayFirstName}` : ''}?
            </h3>
            <p className="text-xs text-slate-300 leading-snug">
              Toque para marcar uma ou mais opções:
            </p>
          </div>

          {/* Grid de Pragas: Sem truncate, sem scroll interno forçado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
            {PEST_OPTIONS.map((pest) => {
              const isSelected = selectedPests.includes(pest.id);
              const PestIcon = pest.icon;
              return (
                <div
                  key={pest.id}
                  onClick={() => togglePest(pest.id)}
                  role="checkbox"
                  aria-checked={isSelected}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-2.5 select-none active:scale-[0.99] ${
                    isSelected
                      ? 'bg-blue-950/80 border-blue-400 shadow-md ring-1 ring-blue-400/60'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 active:bg-slate-800/50'
                  }`}
                >
                  {/* Ícone */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <PestIcon className="w-4 h-4" />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {pest.label}
                      </span>
                      {pest.badge && (
                        <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-200 border border-blue-700/60">
                          {pest.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-tight">
                      {pest.description}
                    </p>
                  </div>

                  {/* Checkbox Touch */}
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected
                        ? 'bg-emerald-500 border-emerald-400 text-white'
                        : 'border-slate-600 bg-slate-900/80'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {errors.pests && (
            <p className="text-rose-400 text-xs mb-2.5 font-semibold">{errors.pests}</p>
          )}

          {/* Campo de Detalhe Opcional */}
          <div className="mb-3.5">
            <label htmlFor="lead-notes" className="block text-xs font-medium text-slate-300 mb-1">
              Observações (opcional):
            </label>
            <input
              id="lead-notes"
              type="text"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Ex: residência, comércio, urgência..."
              className="w-full h-11 bg-slate-950/80 border border-slate-700 rounded-xl px-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Mensagem amigável de erro quando o webhook falha */}
          {errors.submit && (
            <div className="p-3 mb-3.5 bg-rose-950/70 border border-rose-500/50 rounded-xl text-rose-300 text-xs text-center leading-relaxed">
              {errors.submit}
            </div>
          )}

          {/* Botão de Envio de Alta Conversão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 sm:h-13 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 active:scale-[0.99] text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-green-950/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Calculando seu orçamento...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Receber meu orçamento</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* ================================================================= */}
      {/* ETAPA 3: SUCESSO & WHATSAPP IMEDIATO (100% OTIMIZADO PARA MOBILE)  */}
      {/* ================================================================= */}
      {step === 3 && (
        <div className="p-4 sm:p-6 text-center animate-fadeIn">
          {/* Ícone de Sucesso */}
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-1.5">
            Perfeito{displayFirstName ? `, ${displayFirstName}` : ''}! 🎉
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed mb-3.5">
            Nossa equipe técnica da <strong className="text-white font-semibold">Alpha Cupim</strong> já recebeu seus dados para <span className="text-emerald-400 font-semibold">{city}</span> e está preparando a melhor proposta.
          </p>

          {/* Resumo do Lead Compacto */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-left max-w-sm mx-auto mb-3.5 text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Cidade:</span>
              <span className="text-white font-semibold">{city}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">WhatsApp:</span>
              <span className="text-white font-semibold">{whatsapp}</span>
            </div>
            <div className="flex justify-between items-start pt-1 border-t border-slate-800/80">
              <span className="text-slate-400">Pragas:</span>
              <span className="text-emerald-400 font-medium text-right max-w-[190px] leading-tight">
                {selectedPests.map((id) => PEST_OPTIONS.find((p) => p.id === id)?.label || id).join(', ')}
              </span>
            </div>
          </div>

          {/* Botão de WhatsApp Imediato */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3.5 mb-3.5 max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-1.5 text-emerald-300 font-bold text-xs mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Quer ser atendido agora mesmo?</span>
            </div>
            <p className="text-[11px] text-slate-300 mb-2.5">
              Abra a conversa no WhatsApp com os dados já prontos para envio:
            </p>
            <a
              href={getWhatsAppQuickLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:scale-[0.99] text-white font-black text-sm rounded-xl shadow-lg transition-all"
            >
              <img src={BUSINESS_CONFIG.whatsapp.iconUrl} alt="WhatsApp" className="w-4 h-4" width="16" height="16" />
              <span>Adiantar no WhatsApp</span>
            </a>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              type="button"
              className="text-slate-400 hover:text-white text-xs font-semibold py-2 px-3 transition-colors"
            >
              Fechar e voltar ao site
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default OrcamentoRapidoForm;
