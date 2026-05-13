import React from 'react';
import fotoPerfil from '../assets/images/foto-perfil.jpg'; 

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] pt-8 pb-16 px-[3%] flex justify-center transition-colors duration-500">
      
      <div className="max-w-[1500px] w-full relative">
        
        {/* LA CÁPSULA */}
        <div className="flex ml-8 md:ml-16 relative z-10 -mb-6">
          <div className="bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-[#FAFAFA] text-sm md:text-base px-12 py-3 rounded-full font-bold tracking-[0.2em] uppercase border-[5px] border-[#C1A0AC] dark:border-[#F0D9E4] shadow-md transition-colors duration-500">
            Sobre mi
          </div>
        </div>

        {/* LA TARJETA PRINCIPAL */}
        <div className="bg-white dark:bg-[#16131F] rounded-[2.5rem] p-10 pt-16 md:p-16 md:pt-20 shadow-2xl border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 transition-colors duration-500">
           
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start justify-center">
              
              {/* Foto y Ubicación */}
              <div className="flex flex-col items-center gap-6 shrink-0 lg:mt-4">
                  <div className="w-64 h-64 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-[5px] border-[#C1A0AC] dark:border-[#4A3F4B] bg-[#4A3F4B]/10 dark:bg-[#4A3F4B]/30 shadow-inner transition-colors duration-500">
                    <img src={fotoPerfil} alt="Miriam" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="text-center mt-2">
                      <p className="text-[#C1A0AC] text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5">Mi residencia</p>
                      <p className="text-[#806C79] text-sm tracking-widest font-light">
                        Guadalupe Victoria<br/>Durango, México
                      </p>
                  </div>
              </div>

              {/* Información */}
              <div className="flex flex-col gap-12 w-full text-center lg:text-left justify-center lg:mt-6">
                 
                 <div className="border-b border-[#C1A0AC]/30 dark:border-[#4A3F4B]/50 pb-8 transition-colors duration-500">
                    <h3 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-4xl lg:text-[3.5rem] font-light tracking-wide leading-tight mb-4 transition-colors duration-500">
                      Miriam Miranda <br className="hidden lg:block"/>Rodríguez Morales
                    </h3>
                    <p className="text-[#e0bcc9] dark:text-[#F0D9E4] text-lg lg:text-2xl tracking-wide font-medium transition-colors duration-500">
                      Ingeniería Informática | Inteligencia de Mercados & Data Science
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                       <p className="text-[#C1A0AC] text-xs uppercase tracking-[0.2em] font-bold mb-4 flex items-center justify-center lg:justify-start gap-2">
                         <span className="w-4 h-[1px] bg-[#C1A0AC]"></span> Educación
                       </p>
                       <p className="text-[#917d93] dark:text-[#FAFAFA] text-xl font-light leading-relaxed tracking-wide transition-colors duration-500">
                          <strong className="font-medium text-[#4A3F4B] dark:text-white">Instituto Tecnológico Superior de la región de los llanos</strong><br/>
                          <span className="text-[#806C79] text-lg"> 2022-2027</span>
                       </p>
                    </div>

                    <div>
                       <p className="text-[#C1A0AC] text-xs uppercase tracking-[0.2em] font-bold mb-4 flex items-center justify-center lg:justify-start gap-2">
                         <span className="w-4 h-[1px] bg-[#C1A0AC]"></span> Competencia Lingüística
                       </p>
                       <ul className="text-[#4A3F4B] dark:text-[#FAFAFA] text-xl font-light tracking-wide space-y-2 transition-colors duration-500">
                          <li>Español <span className="text-[#806C79] text-base ml-1">(Nativo)</span></li>
                          <li>Inglés <span className="text-[#806C79] text-base ml-1">(Nivel B1)</span></li>
                          <li>Coreano <span className="text-[#806C79] text-base ml-1">(Básico)</span></li>
                       </ul>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;