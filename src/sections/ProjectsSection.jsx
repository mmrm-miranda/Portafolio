import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import { useLanguage } from '../context/useLanguage';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { featuredProjects } from '../data/projects';

function ProjectsSection() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const translateProject = (project) => {
    const idMap = {
      1: "projects.1",
      2: "projects.2",
      3: "projects.3",
      4: "projects.4",
    };
    const prefix = idMap[project.id];
    if (!prefix) return project;
    const pKey = `${prefix}.problem`;
    const sKey = `${prefix}.solution`;
    const bKey = `${prefix}.badge`;
    const problemTrans = t(pKey);
    const solutionTrans = t(sKey);
    const badgeTrans = t(bKey);

    return {
      ...project,
      title: t(`${prefix}.title`),
      description: t(`${prefix}.desc`),
      problem: problemTrans === pKey ? project.problem : problemTrans,
      solution: solutionTrans === sKey ? project.solution : solutionTrans,
      badge: badgeTrans === bKey ? project.badge : badgeTrans,
      softSkills: project.softSkills.map((_, i) => t(`${prefix}.skill${i + 1}`)),
    };
  };

  return (
    <section id="projects" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] py-20 px-[2%] flex justify-center transition-colors duration-500">
      
      <div className="max-w-[1600px] w-full relative">

        <div className="flex ml-10 md:ml-20 relative z-10 -mb-6">
          <div className="bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-[#FAFAFA] text-base md:text-lg px-14 py-3.5 rounded-full font-bold tracking-[0.2em] uppercase border-[5px] border-[#C1A0AC] dark:border-[#F0D9E4] shadow-md transition-colors duration-500">
            {t("projects.capsule")}
          </div>
        </div>


        <div className="bg-white dark:bg-[#16131F] rounded-[3rem] pt-12 pb-6 shadow-2xl border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 transition-colors duration-500">
          
          <div className="flex flex-col items-center mb-6 text-center px-[5%]">
            <p className="text-[#806C79] text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="w-full">
            <Swiper
              modules={[Pagination, Navigation, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              navigation={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              style={{
                '--swiper-navigation-color': '#C1A0AC',
                '--swiper-pagination-color': '#C1A0AC',
                '--swiper-navigation-size': '24px',
              }}
              className="w-full pt-4 pb-8 px-2 sm:px-12"
            >
              {[...featuredProjects, ...featuredProjects].map((project, index) => {
                const translated = translateProject(project);
                return (
                  <SwiperSlide key={`${project.id}-${index}`} className="max-w-[300px] sm:max-w-[450px] lg:max-w-[700px] xl:max-w-[750px] pb-8 h-auto">
                    {({ isActive }) => (
                      <div className={`w-full group bg-white/40 dark:bg-[#16131F]/40 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 dark:border-white/10 flex flex-col lg:flex-row h-full max-h-[600px] lg:max-h-[460px] transition-all duration-500 hover:border-[#C1A0AC]/60 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`}>
                        
                        {/* Imagenes */}
                        <div className="w-full lg:w-[45%] h-[200px] sm:h-[220px] lg:h-auto lg:min-h-full overflow-hidden bg-black/10 dark:bg-[#16131F] shrink-0 border-b lg:border-b-0 lg:border-r border-white/50 dark:border-white/10 relative transition-colors duration-500 flex items-center justify-center">
                          <div className="absolute inset-0 bg-[#C1A0AC]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                          {(project.images && project.images.length > 0) ? (
                            <Swiper
                              nested={true}
                              pagination={{ clickable: true, dynamicBullets: true }}
                              modules={[Pagination, Autoplay]}
                              autoplay={{ delay: 3000, disableOnInteraction: false }}
                              loop={project.images.length > 1}
                              className="w-full h-full"
                            >
                              {project.images.map((img, i) => (
                                <SwiperSlide key={i} className="w-full h-full bg-[#E5D4DB]/10 dark:bg-[#16131F]">
                                  <img 
                                    src={img} 
                                    alt={`${project.title} screenshot ${i+1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          ) : project.image ? (
                            <img src={project.image} alt={translated.title} className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#806C79]">{t("projects.noimage")}</div>
                          )}
                        </div>
                        
                        {/* Contenido */}
                        <div className="p-3 md:p-5 flex flex-col gap-2 relative w-full lg:w-[55%] h-full justify-between">
                          
                          <div>
                            {translated.badge && (
                              <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFDF00]/20 dark:from-[#D4AF37]/10 dark:to-[#FFDF00]/10 border border-[#D4AF37]/50 text-[#D4AF37] dark:text-[#F3E5AB] text-[8px] md:text-[9px] font-bold tracking-widest uppercase rounded-full mb-2 backdrop-blur-sm shadow-sm">
                                {translated.badge}
                              </div>
                            )}
                            <h3 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-xl md:text-2xl font-black tracking-wide mb-1 transition-colors duration-500 group-hover:text-[#C1A0AC] dark:group-hover:text-[#F0D9E4]">
                              {translated.title}
                            </h3>
                            <p className="text-[#806C79] dark:text-white/80 text-[10px] md:text-xs font-light leading-snug line-clamp-2">
                              {translated.description}
                            </p>
                          </div>

                        {/* Problematica y Solucion Compacta */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white/50 dark:bg-black/20 rounded-xl p-2.5 border border-white/40 dark:border-white/5">
                          <div>
                            <h4 className="text-[#C1A0AC] text-[9px] tracking-widest uppercase font-bold mb-0.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-[#C1A0AC]"></span>
                              Problemática
                            </h4>
                            <p className="text-[#806C79] dark:text-white/70 text-[9px] md:text-[10px] leading-tight line-clamp-2">
                              {translated.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[#C1A0AC] text-[9px] tracking-widest uppercase font-bold mb-0.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-[#C1A0AC]"></span>
                              Solución
                            </h4>
                            <p className="text-[#806C79] dark:text-white/70 text-[9px] md:text-[10px] leading-tight line-clamp-2">
                              {translated.solution}
                            </p>
                          </div>
                        </div>

                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="self-start text-[10px] font-bold uppercase tracking-widest text-[#C1A0AC] hover:text-[#806C79] dark:hover:text-white transition-colors duration-300 flex items-center gap-1 mt-1"
                        >
                          + Leer Más
                        </button>

                        <div className="flex flex-col gap-3 mt-1">
                          {/* Stack Técnico */}
                          <div>
                            <p className="text-[#C1A0AC] text-[9px] tracking-[0.2em] uppercase font-bold mb-1.5">{t("projects.stack")}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack?.map((tech, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] px-3 py-1 rounded-full border border-white/60 dark:border-white/10 text-[#4A3F4B] dark:text-[#F0D9E4] tracking-widest uppercase bg-white/80 dark:bg-[#16131F]/80 transition-colors duration-500 shadow-sm font-medium backdrop-blur-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Habilidades Blandas */}
                          <div>
                            <p className="text-[#C1A0AC] text-[9px] tracking-[0.2em] uppercase font-bold mb-1.5">{t("projects.softskills")}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {translated.softSkills?.map((skill, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-md text-[#806C79] dark:text-white/60 uppercase tracking-wider bg-[#C1A0AC]/10 dark:bg-white/5 transition-colors duration-500 font-medium">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grow"></div>
                        
                        <div className="mt-2 pt-2 border-t border-[#C1A0AC]/30 dark:border-white/10 transition-colors duration-500 flex gap-3 shrink-0">
                          {project.repo && project.repo !== "#" && (
                            <a href={project.repo} target="_blank" rel="noreferrer" title={t("projects.repo")} className="flex items-center gap-1.5 px-4 py-2 bg-[#4A3F4B] dark:bg-white text-white dark:text-[#16131F] rounded-full hover:bg-[#C1A0AC] dark:hover:bg-[#C1A0AC] hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1 font-bold tracking-wider text-[9px] md:text-[10px]">
                              <FaGithub className="text-sm md:text-base" /> Repositorio
                            </a>
                          )}
                          {project.demo && project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noreferrer" title={t("projects.demo")} className="flex items-center gap-1.5 px-4 py-2 bg-white/80 dark:bg-[#16131F]/80 text-[#16131F] dark:text-white rounded-full hover:bg-[#C1A0AC] dark:hover:bg-[#C1A0AC] hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1 border border-white/50 dark:border-white/10 font-bold tracking-wider text-[9px] md:text-[10px] backdrop-blur-sm">
                              <FaExternalLinkAlt className="text-sm md:text-base" /> Demo
                            </a>
                          )}
                        </div>

                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#16131F] rounded-3xl shadow-2xl border border-[#C1A0AC]/30 dark:border-white/10 flex flex-col custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-[#4A3F4B] dark:text-white hover:bg-[#C1A0AC] hover:text-white transition-colors border border-black/10 dark:border-white/10"
              >
                ✕
              </button>
              
              <div className="flex flex-col lg:flex-row w-full h-full">
                {/* Modal Image Area */}
                <div className="w-full lg:w-[45%] bg-black/5 dark:bg-black/40 flex items-center justify-center min-h-[250px] lg:min-h-[400px] border-b lg:border-b-0 lg:border-r border-[#C1A0AC]/20 dark:border-white/10 relative overflow-hidden">
                  {(selectedProject.images && selectedProject.images.length > 0) ? (
                    <Swiper
                      pagination={{ clickable: true, dynamicBullets: true }}
                      modules={[Pagination, Autoplay]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={selectedProject.images.length > 1}
                      className="w-full h-full absolute inset-0"
                    >
                      {selectedProject.images.map((img, i) => (
                        <SwiperSlide key={i} className="w-full h-full bg-[#E5D4DB]/10 dark:bg-[#16131F]">
                          <img 
                            src={img} 
                            alt={`${translateProject(selectedProject).title} screenshot ${i+1}`}
                            className="w-full h-full object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : selectedProject.image ? (
                    <img src={selectedProject.image} alt={translateProject(selectedProject).title} className="w-full h-full object-contain absolute inset-0 p-4" />
                  ) : null}
                </div>

                {/* Modal Content Area */}
                <div className="w-full lg:w-[55%] p-6 md:p-8 flex flex-col gap-6">
                  <div>
                    <h3 className="text-[#4A3F4B] dark:text-white text-2xl md:text-3xl font-black mb-3">{translateProject(selectedProject).title}</h3>
                    <p className="text-[#806C79] dark:text-white/80 text-sm leading-relaxed">
                      {translateProject(selectedProject).description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#E5D4DB]/20 dark:bg-black/30 p-4 rounded-2xl border border-[#C1A0AC]/10 dark:border-white/5">
                      <h4 className="text-[#C1A0AC] text-xs tracking-widest uppercase font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1A0AC]"></span> Problemática
                      </h4>
                      <p className="text-[#806C79] dark:text-white/70 text-sm leading-relaxed">
                        {translateProject(selectedProject).problem}
                      </p>
                    </div>
                    
                    <div className="bg-[#E5D4DB]/20 dark:bg-black/30 p-4 rounded-2xl border border-[#C1A0AC]/10 dark:border-white/5">
                      <h4 className="text-[#C1A0AC] text-xs tracking-widest uppercase font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1A0AC]"></span> Solución
                      </h4>
                      <p className="text-[#806C79] dark:text-white/70 text-sm leading-relaxed">
                        {translateProject(selectedProject).solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[#C1A0AC] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">{t("projects.stack")}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack?.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-[#4A3F4B] dark:text-white bg-white/50 dark:bg-black/20 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[#C1A0AC] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">{t("projects.softskills")}</p>
                      <div className="flex flex-wrap gap-2">
                        {translateProject(selectedProject).softSkills?.map((skill, i) => (
                          <span key={i} className="text-[11px] px-2.5 py-1 rounded-md text-[#806C79] dark:text-white/60 bg-[#C1A0AC]/10 dark:bg-white/5 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 pt-4 border-t border-[#C1A0AC]/20 dark:border-white/10 flex flex-wrap gap-4">
                    {selectedProject.repo && selectedProject.repo !== "#" && (
                      <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-[#4A3F4B] dark:bg-white text-white dark:text-[#16131F] rounded-full hover:bg-[#C1A0AC] dark:hover:bg-[#C1A0AC] hover:text-white transition-all duration-300 font-bold tracking-wider text-xs shadow-md">
                        <FaGithub className="text-base" /> Repositorio
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-white rounded-full hover:bg-[#C1A0AC] dark:hover:bg-[#C1A0AC] hover:text-white transition-all duration-300 border border-[#C1A0AC]/30 dark:border-white/20 font-bold tracking-wider text-xs shadow-md">
                        <FaExternalLinkAlt className="text-base" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;