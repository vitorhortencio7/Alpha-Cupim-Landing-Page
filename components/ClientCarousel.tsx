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
    <div className="bg-slate-50/80 py-8 sm:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-5">
          Empresas e Condomínios Parceiros no Cariri
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3.5 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className={`w-full flex items-center justify-center p-2.5 bg-white rounded-xl border border-slate-200/80 shadow-xs h-14 sm:h-16 ${
                idx === clients.length - 1 ? 'col-span-2 sm:col-span-1 max-w-[200px] sm:max-w-none' : ''
              }`}
            >
              <img 
                src={client.url} 
                alt={`Cliente Alpha Cupim: ${client.name}`} 
                className="max-h-7 sm:max-h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
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
