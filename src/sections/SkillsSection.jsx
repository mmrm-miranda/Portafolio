import React from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] flex flex-col items-center transition-colors duration-500">
      
      {/* BLOQUE DE ANCHO COMPLETO */}
      <div className="w-full bg-white dark:bg-[#16131F] shadow-2xl py-20 border-y border-[#C1A0AC]/20 dark:border-[#C1A0AC]/10 transition-colors duration-500">
        
        <div className="max-w-[1500px] mx-auto px-[5%] flex flex-col gap-16">
          
          <div className="flex flex-col gap-2 md:mb-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-[#C1A0AC] rounded-full"></div>
              <h2 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-3xl md:text-4xl font-light tracking-wider uppercase transition-colors duration-500">
                Habilidades <span className="font-bold text-[#C1A0AC] dark:text-[#F0D9E4]">Técnicas</span>
              </h2>
            </div>
            <p className="text-[#806C79] text-xs md:text-sm tracking-[0.3em] uppercase ml-6 opacity-80">
              Stack Tecnológico y Especialidades
            </p>
          </div>

          {skillsCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-8 text-center md:text-left">
              
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <span className="text-[#C1A0AC] text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                  {category.title}
                </span>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#C1A0AC]/50 dark:from-[#4A3F4B]/50 to-transparent hidden md:block transition-colors duration-500"></div>
              </div>

              {/* GRID AJUSTADO: Más columnas y menos espacio entre ellas */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    whileHover={{ y: -5, scale: 1.05 }}

                    className="relative group bg-[#FAFAFA] dark:bg-[#4A3F4B]/15 rounded-2xl p-5 flex flex-col items-center gap-4 border border-[#C1A0AC]/10 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C1A0AC] dark:hover:border-[#C1A0AC]/30 shadow-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C1A0AC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* ICONOS MÁS PEQUEÑOS (w-12 h-12) */}
                    <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    
                    <span className="relative z-10 text-[9px] md:text-[10px] font-bold text-[#806C79] dark:text-white/50 group-hover:text-[#4A3F4B] dark:group-hover:text-[#F0D9E4] transition-all tracking-[0.1em] uppercase text-center leading-tight">
                      {skill.name}
                    </span>

                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C1A0AC] group-hover:w-full transition-all duration-500 ease-out"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;