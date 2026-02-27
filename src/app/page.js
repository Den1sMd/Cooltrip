"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    { id: 1, title: "Identité", desc: "Renseignez votre profil (départ, âge, nationalité) et votre destination." },
    { id: 2, title: "Résultats", desc: "Consultez la liste personnalisée des démarches selon votre voyage." },
    { id: 3, title: "Suivi", desc: "Marquez vos tâches complétées et suivez votre progression en temps réel." },
    { id: 4, title: "Planning", desc: "Planifiez et enregistrez tous vos futurs voyages au même endroit." },
    { id: 5, title: "Paramètres", desc: "Gérez vos notifications et vos informations personnelles." },
    { id: 6, title: "Prêt à partir", desc: "Tout sur ta destination en une seule app !" },
  ];

  return (
    <div className="bg-yellow-300 min-h-screen font-sans">


      

      <nav className="p-6">
        <header className="max-w-6xl mx-auto bg-white p-4 flex justify-between items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl border-4 border-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
  
  
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="relative">
      <img 
        className="w-40 h-20 object-contain transition-transform" 
        src="logo.png" 
        alt="Logo"
      />
    </div>
    
  </div>

  <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-yellow-300 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            <div className={`w-6 h-1 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-6 h-1 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-1 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
  </button>
  
  
  <div className="hidden md:flex gap-10 items-center">
    <nav className="flex gap-8">
  {['Accueil', 'A propos'].map((item) => (
    <a 
      key={item} 
      href={item === 'A propos' ? '#faq' : item === 'Accueil' ? '#' : '#'}
      className="relative inline-block text-black font-bold cursor-pointer text-lg transition-all duration-300 ease-out hover:text-blue-900 hover:rotate-6 hover:scale-110 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
    >
      {item}
    </a>
  ))}
</nav>

    <button className="cursor-pointer bg-blue-900 text-white px-8 py-3 rounded-xl font-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
      INSTALLER
    </button>
  </div>

  
</header>

<div className={`
          md:hidden fixed inset-x-6 top-28 bg-white border-4 border-black rounded-2xl p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] 
          flex flex-col gap-6 transition-all duration-300 origin-top z-10
          ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95 pointer-events-none'}
        `}>
          <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-black border-b-2 border-black pb-2">ACCUEIL</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-2xl font-black border-b-2 border-black pb-2">A PROPOS</a>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
            INSTALLER MAINTENANT
          </button>
        </div>

<div className={`absolute top-full left-0 right-0 mt-4 bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 md:hidden transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
            <a href="#" onClick={() => setIsOpen(false)} className="text-xl font-black hover:text-blue-900">ACCUEIL</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-xl font-black hover:text-blue-900">A PROPOS</a>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              INSTALLER
            </button>
          </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-20">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-black text-6xl md:text-8xl font-black leading-none drop-shadow-sm">
              Cool<span className="text-blue-900 italic">Trip</span>
            </h1>
            <p className="text-black/80 text-2xl font-medium max-w-lg leading-relaxed">
              Simplifie tes démarches administratives rapidement et efficacement pour <span className="text-blue-900 border-b-2 border-blue-900 font-black">VOYAGER</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start items-center">
            
            <button className="group cursor-pointer bg-white text-black border-4 border-black px-10 py-4 rounded-2xl font-black text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:scale-95">
              C'est parti ! ✈️
            </button>

           
            <button className="cursor-pointer bg-black text-white border-4 border-black px-8 py-3 rounded-2xl flex items-center gap-4 shadow-[6px_6px_0px_0px_rgba(30,58,138,1)] hover:shadow-[2px_2px_0px_0px_rgba(30,58,138,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:scale-95 group">
              
              <svg 
                className="w-8 h-8 fill-white transition-transform group-hover:scale-110" 
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Télécharger sur</span>
                <span className="text-xl font-black">App Store</span>
              </div>
            </button>
          </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-900 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border-4 border-black transition-transform hover:-rotate-1">
                <img 
                  className="rounded-[2rem] w-full max-w-[300px] h-[550px] object-cover" 
                  src="/phone.jpeg" 
                  alt="App Preview"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="mt-24 border-b-8 border-blue-900 rounded-full w-full"></div>

       
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 id="faq" className="text-4xl md:text-6xl font-black text-black inline-block relative">
              Comment ça marche ?
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-900/20 -z-10"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="bg-white border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(30,58,138,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] transition-all"
              >
                <div className="bg-yellow-300 border-2 border-black w-12 h-12 rounded-full flex items-center justify-center font-black text-xl mb-4">
                  {step.id}
                </div>
                <h3 className="text-2xl font-black mb-2 text-blue-900 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-black/70 font-bold leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>


        <div className="mt-20 flex justify-center">
          <div className="bg-white border-4 border-black p-6 rounded-3xl max-w-md relative rotate-1">
            <div className="absolute -top-4 -left-4 text-4xl">💡</div>
            <p className="italic font-bold text-center">
              "Rejoignez plus de 100 000 Utilisateurs a travers le monde !"
            </p>
          </div>
        </div>
      </main>

      
      <footer className="bg-blue-900 text-white p-10 text-center font-bold">
        <p>© 2026 CoolTrip - Prêt à voyager ?</p>
      </footer>
    </div>
  );
}