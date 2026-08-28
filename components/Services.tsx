
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../lib/constants';

const Services: React.FC = () => {
  const list = [
    { 
      title: "Dedetização Geral e Escorpiões", 
      badge: "Mais Solicitado",
      desc: "Eliminação e controle preventivo de baratas, escorpiões, formigas e aranhas com produtos inodoros e ação residual prolongada.", 
      items: ["Aplicação sem cheiro", "Seguro para pets e crianças", "Garantia formal por escrito"]
    },
    { 
      title: "Descupinização Especializada", 
      badge: "Garantia de 1 Ano",
      desc: "Tratamento profundo contra cupim de madeira seca e cupim de solo/subterrâneo, protegendo móveis, telhados e estruturas.", 
      items: ["Barreira química protetora", "Preservação de estruturas", "Técnica sem sujeira"]
    },
    { 
      title: "Desratização e Roedores", 
      badge: "Alta Eficiência",
      desc: "Controle estratégico de roedores com porta-iscas blindados e monitoramento preventivo para residências e comércios.", 
      items: ["Iscas atrativas lacradas", "Mapeamento de tocas e acessos", "Monitoramento periódico"]
    },
    { 
      title: "Controle Comercial e Laudos", 
      badge: "Exigência Sanitária",
      desc: "Emissão de Laudo Técnico, Certificado de Execução e Cronograma para apresentação à Vigilância Sanitária e fiscalizações.", 
      items: ["Documentação oficial emitida", "Responsável técnico credenciado", "Adequação a normas RDC"]
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 px-5 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 block mb-2">Serviços Especializados</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-slate-900 leading-tight mb-4">
            Soluções Completas de Controle de Pragas no Cariri
          </h2>
          <p className="text-[16px] lg:text-[18px] text-slate-600 max-w-2xl mx-auto leading-[1.65]">
            Atendimento residencial, comercial e industrial em Juazeiro do Norte, Crato e Barbalha com visita técnica gratuita e sem compromisso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((s, i) => (
            <div 
              key={i}
              className="bg-slate-50 p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 text-[12px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                  {s.badge}
                </div>
                <h3 className="text-[19px] lg:text-[21px] font-bold text-slate-900 mb-3 leading-snug">{s.title}</h3>
                <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.6] mb-5">{s.desc}</p>
                
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-200/80">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] text-slate-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={WHATSAPP_LINK}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-green-600 text-slate-800 hover:text-white border border-slate-300 hover:border-green-600 font-bold text-[14px] py-3 px-4 rounded-xl shadow-xs transition-colors"
              >
                <span>Pedir Orçamento Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under services */}
        <div className="mt-10 p-6 bg-blue-50/80 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-[16px] font-bold text-slate-900">Precisa de atendimento urgente para sua casa ou comércio?</h4>
            <p className="text-[14px] text-slate-600">Nossa equipe volante no Crajubar pode realizar sua visita no mesmo dia.</p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[14px] px-5 py-3 rounded-xl shadow-sm whitespace-nowrap transition-colors"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-4 h-4" />
            <span>Falar com Técnico Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

