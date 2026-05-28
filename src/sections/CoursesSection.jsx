import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';

const CoursesSection = () => {
  const { t } = useLanguage();

  const translateCourse = (course) => {
    const idMap = {
      1: "courses.1",
      2: "courses.2",
      3: "courses.3",
      4: "courses.4",
      5: "courses.5",
    };
    const prefix = idMap[course.id] || "";
    if (!prefix) return course;
    return {
      ...course,
      title: t(`${prefix}.title`),
      description: t(`${prefix}.desc`),
      institution: t(`${prefix}.institution`),
      date: t(`${prefix}.date`),
      duration: t(`${prefix}.duration`),
    };
  };

  return (
    <section id="courses" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] flex flex-col items-center transition-colors duration-500">
      
      {/* BLOQUE DE ANCHO COMPLETO ESTILO SKILLS */}
      <div className="w-full bg-white dark:bg-[#16131F] shadow-2xl py-20 border-y border-[#C1A0AC]/20 dark:border-[#C1A0AC]/10 transition-colors duration-500">
        
        <div className="max-w-[1500px] mx-auto px-[5%] flex flex-col gap-16">
          
          {/* ENCABEZADO CON PILL VERTICAL */}
          <div className="flex flex-col gap-2 md:mb-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-[#C1A0AC] rounded-full"></div>
              <h2 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-3xl md:text-4xl font-light tracking-wider uppercase transition-colors duration-500" dangerouslySetInnerHTML={{ __html: t("courses.title") }} />
            </div>
            <p className="text-[#806C79] text-[10px] md:text-xs tracking-[0.3em] uppercase ml-6 opacity-80">
              {t("courses.subtitle")}
            </p>
          </div>

          {/* GRID DE TARJETAS  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursesData.map((course, index) => {
              const translated = translateCourse(course);
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative group bg-[#FAFAFA] dark:bg-[#4A3F4B]/15 rounded-[1.8rem] p-7 flex flex-col gap-5 border border-[#C1A0AC]/20 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C1A0AC] dark:hover:border-[#C1A0AC]/30 shadow-sm dark:shadow-lg"
                >
                  {/* Gradiente de fondo al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C1A0AC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{course.icon}</span>
                    <span className="text-[#806C79] dark:text-[#F0D9E4] text-[9px] font-bold tracking-[0.2em] uppercase bg-white dark:bg-[#16131F] px-3 py-1 rounded-full border border-[#C1A0AC]/30 dark:border-white/10 transition-colors duration-500">
                      {translated.institution}
                    </span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-[#4A3F4B] dark:text-white text-lg font-bold leading-tight transition-colors duration-500">
                      {translated.title}
                    </h3>
                    <p className="text-[#806C79] dark:text-white/60 text-xs font-light leading-relaxed transition-colors duration-500 line-clamp-3">
                      {translated.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto pt-4 border-t border-[#C1A0AC]/20 dark:border-white/10 flex justify-between items-center text-[9px] tracking-widest uppercase font-medium text-[#806C79] dark:text-white/40 transition-colors duration-500">
                    <span className="flex items-center gap-1">
                      {translated.duration}
                    </span>
                    <span>{translated.date}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#C1A0AC] group-hover:w-full transition-all duration-500 ease-out"></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesSection;