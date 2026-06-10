import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { featuredProjects } from '../data/projects';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const infiniteProjects = [...featuredProjects, ...featuredProjects];

  const translateProject = (project) => {
    const idMap = {
      1: "projects.1",
      2: "projects.2",
      3: "projects.3",
    };
    const prefix = idMap[project.id];
    if (!prefix) return project;
    return {
      ...project,
      title: t(`${prefix}.title`),
      description: t(`${prefix}.desc`),
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


        <div className="bg-white dark:bg-[#16131F] rounded-[3rem] py-16 shadow-2xl border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 transition-colors duration-500">
          
          <div className="flex flex-col items-center mb-10 text-center px-[5%]">
            <p className="text-[#806C79] text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
              {t("projects.subtitle")}
            </p>
          </div>

          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            style={{
              '--swiper-navigation-color': '#C1A0AC',
              '--swiper-pagination-color': '#C1A0AC',
            }}
            className="w-full py-10 px-4 md:px-12"
          >
            {infiniteProjects.map((project, index) => {
              const translated = translateProject(project);
              return (
                <SwiperSlide key={`${project.id}-${index}`} className="max-w-[350px] md:max-w-[450px]">
                  {({ isActive }) => (
                    <div 
                      className={`
                        bg-[#FAFAFA] dark:bg-[#4A3F4B]/20 backdrop-blur-md rounded-[2rem] overflow-hidden transition-all duration-500 shadow-2xl border flex flex-col h-full
                        ${isActive 
                          ? 'scale-100 opacity-100 border-[#C1A0AC]/50 shadow-[0_10px_30px_rgba(193,160,172,0.15)]' 
                          : 'scale-90 opacity-40 border-[#C1A0AC]/20 dark:border-white/5'}
                      `}
                    >
                      {/* Imagen */}
                      <div className="w-full h-48 md:h-52 overflow-hidden bg-white dark:bg-[#16131F] shrink-0 border-b border-[#C1A0AC]/30 dark:border-[#4A3F4B]/50 transition-colors duration-500">
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#806C79]">{t("projects.noimage")}</div>
                        )}
                      </div>
                      
                      {/* Contenido */}
                      <div className="p-6 md:p-8 flex flex-col grow gap-4">
                        
                        <div>
                          <h3 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-xl md:text-2xl font-semibold tracking-wide mb-2 transition-colors duration-500">
                            {translated.title}
                          </h3>
                          <p className="text-[#806C79] text-sm font-light leading-relaxed line-clamp-3">
                            {translated.description}
                          </p>
                        </div>

                        {/* Stack Técnico */}
                        <div className="mt-2">
                          <p className="text-[#C1A0AC] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">{t("projects.stack")}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((tech, i) => (
                              <span key={i} className="text-[10px] px-3 py-1 rounded-full border border-[#C1A0AC]/30 text-[#4A3F4B] dark:text-[#F0D9E4] tracking-widest uppercase bg-white dark:bg-[#16131F]/50 transition-colors duration-500">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Habilidades Blandas */}
                        <div className="mt-1">
                          <p className="text-[#C1A0AC] text-[10px] tracking-[0.2em] uppercase font-bold mb-2">{t("projects.softskills")}</p>
                          <div className="flex flex-wrap gap-2">
                            {translated.softSkills?.map((skill, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 rounded text-[#806C79] uppercase tracking-wider bg-[#C1A0AC]/10 dark:bg-[#4A3F4B]/30 transition-colors duration-500">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grow"></div>

                        <div className="flex gap-4 mt-4 pt-4 border-t border-[#C1A0AC]/30 dark:border-[#4A3F4B]/40 transition-colors duration-500">
                          {project.repo && project.repo !== "#" && (
                            <a href={project.repo} target="_blank" rel="noreferrer" title={t("projects.repo")} className="p-3 bg-white dark:bg-[#16131F] rounded-full text-[#C1A0AC] hover:text-[#4A3F4B] dark:hover:text-[#FAFAFA] hover:bg-[#C1A0AC]/20 transition-all duration-300 shadow-sm dark:shadow-none">
                              <FaGithub className="text-xl" />
                            </a>
                          )}
                          {project.demo && project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noreferrer" title={t("projects.demo")} className="p-3 bg-white dark:bg-[#16131F] rounded-full text-[#C1A0AC] hover:text-[#4A3F4B] dark:hover:text-[#FAFAFA] hover:bg-[#C1A0AC]/20 transition-all duration-300 shadow-sm dark:shadow-none">
                              <FaExternalLinkAlt className="text-xl" />
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
    </section>
  );
};

export default ProjectsSection;