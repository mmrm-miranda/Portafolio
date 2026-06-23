import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';
import { coursesData } from '../data/courses';

const CoursesSection = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

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
    <section id="courses" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] py-20 px-[2%] flex justify-center transition-colors duration-500">
      
      <div className="max-w-[1600px] w-full relative">

        <div className="flex ml-10 md:ml-20 relative z-10 -mb-6">
          <div className="bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-[#FAFAFA] text-base md:text-lg px-14 py-3.5 rounded-full font-bold tracking-[0.2em] uppercase border-[5px] border-[#C1A0AC] dark:border-[#F0D9E4] shadow-md transition-colors duration-500">
            {t("courses.capsule")}
          </div>
        </div>

        <div className="bg-white dark:bg-[#16131F] rounded-[3rem] py-16 shadow-2xl border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 transition-colors duration-500">
          
          <div className="max-w-[1500px] mx-auto px-[5%] flex flex-col gap-16">
            
            <div className="flex flex-col gap-2 md:mb-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-8 bg-[#C1A0AC] rounded-full"></div>
                <h2 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-3xl md:text-4xl font-light tracking-wider uppercase transition-colors duration-500" dangerouslySetInnerHTML={{ __html: t("courses.title") }} />
              </div>
              <p className="text-[#806C79] text-[10px] md:text-xs tracking-[0.3em] uppercase ml-6 opacity-80">
                {t("courses.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coursesData.map((course, index) => {
                const translated = translateCourse(course);
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="relative group bg-[#FAFAFA] dark:bg-[#4A3F4B]/15 rounded-[1.8rem] p-7 flex flex-col gap-5 border border-[#C1A0AC]/20 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C1A0AC] dark:hover:border-[#C1A0AC]/30 shadow-sm dark:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C1A0AC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{course.icon}</span>
                      <span className="text-[#806C79] dark:text-[#F0D9E4] text-[9px] font-bold tracking-[0.2em] uppercase bg-white dark:bg-[#16131F] px-3 py-1 rounded-full border border-[#C1A0AC]/30 dark:border-white/10 transition-colors duration-500">
                        {translated.institution}
                      </span>
                    </div>
                    
                    <div className="relative z-10 flex flex-col gap-2 grow">
                      <h3 className="text-[#4A3F4B] dark:text-white text-lg font-bold leading-tight transition-colors duration-500">
                        {translated.title}
                      </h3>
                      <p className="text-[#806C79] dark:text-white/60 text-xs font-light leading-relaxed transition-colors duration-500 line-clamp-3">
                        {translated.description}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                      {course.certificate ? (
                        <button 
                          onClick={() => setSelectedCert(course.certificate)}
                          className="relative z-10 self-start px-4 py-1.5 bg-transparent text-[#C1A0AC] dark:text-[#C1A0AC] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#C1A0AC]/50 hover:bg-[#C1A0AC] hover:text-white transition-colors shadow-sm"
                        >
                          Ver Certificado
                        </button>
                      ) : (
                        <div className="h-[26px]"></div> /* Placeholder to keep alignment when no certificate */
                      )}

                      <div className="relative z-10 pt-4 border-t border-[#C1A0AC]/20 dark:border-white/10 flex justify-between items-center text-[9px] tracking-widest uppercase font-medium text-[#806C79] dark:text-white/40 transition-colors duration-500">
                        <span className="flex items-center gap-1">
                          {translated.duration}
                        </span>
                        <span>{translated.date}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#C1A0AC] group-hover:w-full transition-all duration-500 ease-out"></div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#16131F] p-3 md:p-4 rounded-[2rem] shadow-2xl border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-5 -right-5 w-12 h-12 bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#C1A0AC] dark:hover:bg-[#C1A0AC] hover:text-white transition-colors border border-gray-200 dark:border-gray-800 text-xl font-bold"
              >
                ✕
              </button>
              <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-[1.5rem] bg-gray-100 dark:bg-[#16131F] flex items-center justify-center relative">
                {/* Overlay to absolutely block clicking on the iframe */}
                <div className="absolute inset-0 z-10 bg-transparent"></div>
                <iframe src={`${selectedCert}#toolbar=0&navpanes=0&scrollbar=0`} title="Certificado" className="w-full h-full border-none pointer-events-none" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CoursesSection;