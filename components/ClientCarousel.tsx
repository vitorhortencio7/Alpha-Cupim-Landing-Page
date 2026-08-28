
import React from 'react';

const ClientCarousel: React.FC = () => {
  const clients = [
    { name: "Medlar", url: "https://i.ibb.co/TBrZHhGw/MEDLAR.png" },
    { name: "Prediletto", url: "https://i.ibb.co/HT9bbgyL/logo-prediletto.png" },
    { name: "Kalifon", url: "https://i.ibb.co/yF47GSTp/Logo-Kalifon.png" },
    { name: "Agapantos", url: "https://i.ibb.co/yBWTVtSG/Logo-Agapantos.png" },
    { name: "Hotel Verdes Vales", url: "https://i.ibb.co/SDT8H7Z8/HOTEL-VERDES-VALES.png" },
    { name: "Prohospital", url: "https://i.ibb.co/NdMLLGgM/Logo-Phohospital.png" },
    { name: "Voa Nordeste", url: "https://i.ibb.co/RkzxJpR1/Consorcio-Voa-Nordeste.png" }
  ];

  return (
    <div className="bg-slate-50/80 py-10 lg:py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-[13px] font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
          Empresas e Condomínios Parceiros no Cariri
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="w-full flex items-center justify-center p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs h-16"
            >
              <img 
                src={client.url} 
                alt={`Cliente Alpha Cupim: ${client.name}`} 
                className="max-h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;

