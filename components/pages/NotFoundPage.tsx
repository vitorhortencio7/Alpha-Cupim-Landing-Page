import React from 'react';
import { FileQuestion, ArrowLeft, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK, handleWhatsAppClick } from '../../lib/constants';

interface PageProps {
  onNavigateHome: () => void;
}

export const NotFoundPage: React.FC<PageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-5 text-center">
        
        <div className="w-24 h-24 bg-slate-100 text-slate-400 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-200">
          <FileQuestion className="w-12 h-12" />
        </div>

        <h1 className="text-[32px] sm:text-[40px] font-extrabold text-slate-900 leading-tight mb-4">
          Página não encontrada
        </h1>

        <p className="text-[16px] sm:text-[18px] text-slate-600 leading-relaxed mb-10">
          A página que você tentou acessar não existe ou foi movida. Mas não se preocupe, nossa equipe está online para ajudar você agora mesmo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[15px] px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para o Início</span>
          </button>

          <a
            href={WHATSAPP_LINK}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold text-[15px] px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
