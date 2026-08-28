import React from 'react';
import { Award, Users, CheckCircle2, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_ICON, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const SobreNosPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  const TEAM_PHOTO = "https://i.ibb.co/rK54H95J/2.jpg";

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[14px] text-slate-500 mb-6">
          <button onClick={onNavigateHome} className="hover:text-blue-600 font-medium">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Sobre Nós</span>
        </nav>

        {/* Hero */}
        <div className="bg-[#0b1329] rounded-3xl p-6 sm:p-12 text-white mb-12 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-wider mb-5">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Líder Regional no Cariri Cearense</span>
          </div>

          <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold leading-tight mb-5">
            Sobre a Alpha Cupim Dedetização
          </h1>

          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed max-w-3xl mb-8">
            Nascemos com a missão de proteger lares, comércios e indústrias no Crajubar com tecnologia biológica avançada, atendimento humanizado e respeito absoluto à saúde das famílias e ao meio ambiente.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-blue-400">+2.500</div>
              <div className="text-[13px] text-slate-300">Imóveis Atendidos</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-amber-400">5.0 ★</div>
              <div className="text-[13px] text-slate-300">Google Avaliações</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-emerald-400">100%</div>
              <div className="text-[13px] text-slate-300">Garantia Formal</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-white">Crajubar</div>
              <div className="text-[13px] text-slate-300">Equipe Local</div>
            </div>
          </div>
        </div>

        {/* Story & Philosophy */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <span className="text-[13px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">Nossa História & Valores</span>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-slate-900 mb-4">
              Compromisso Técnico e Segurança em Primeiro Lugar
            </h2>
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-4">
              A Alpha Cupim consolidou-se como a dedetizadora mais recomendada da Região do Cariri (Juazeiro do Norte, Crato, Barbalha e Missão Velha) devido à seriedade de sua equipe e à transparência com cada cliente.
            </p>
            <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.65] mb-6">
              Todos os nossos produtos são rigorosamente autorizados pelo Ministério da Saúde e pela Anvisa, assegurando que crianças, gestantes, idosos e animais de estimação fiquem 100% protegidos durante e após a aplicação.
            </p>

            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Responsável técnico credenciado e licenças sanitárias ativas.</span>
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Emissão de laudo sanitário e certificado de execução no ato.</span>
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Técnicos próprios, uniformizados e com identificação formal.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img 
              src={TEAM_PHOTO} 
              alt="Equipe Alpha Cupim em atendimento no Cariri"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-5 bg-slate-900 text-white">
              <div className="flex items-center gap-2 text-amber-400 text-[13px] font-bold mb-1">
                <Star className="w-4 h-4 fill-current" />
                <span>Avaliação Máxima de Satisfação</span>
              </div>
              <p className="text-[14px] text-slate-300 leading-relaxed">
                Mais de 120 famílias e empresas do Cariri avaliaram nosso serviço com nota máxima no Google.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <h3 className="text-[20px] font-bold text-slate-900 mb-2">Quer conhecer nosso trabalho na prática?</h3>
          <p className="text-[15px] text-slate-600 mb-6 max-w-xl mx-auto">
            Agende uma visita técnica gratuita com nossa equipe de especialistas no Cariri.
          </p>
          <a
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-[15px] px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />
            <span>Falar com a Alpha Cupim no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
