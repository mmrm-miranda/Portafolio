import { motion } from "framer-motion";
import { useGreeting } from "../hooks/useGreeting";
import { useLanguage } from "../context/useLanguage";
import fotoHero from "../assets/images/foto-hero.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
  },
};

const imageVariants = {
  hidden: { y: 150, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function HeroSection() {
  const { greeting } = useGreeting();
  const { t } = useLanguage();

  return (
    <section id="hero" className="w-full flex flex-col relative bg-[#FFF0F5] dark:bg-[#F0D9E4] transition-colors duration-500">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-[100svh] min-h-[650px] bg-white dark:bg-[#16131F] overflow-hidden flex flex-col justify-between transition-colors duration-500"
      >
        
        {/* TEXTO DE FONDO - Escala suave para móvil */}
        <div className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none z-0 pt-[25vh] md:pt-0">
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(5.5rem,20vw,38rem)] font-black text-[#F0D9E4]/60 dark:text-[#F0D9E4]/10 whitespace-nowrap tracking-tighter select-none leading-none transition-colors duration-500"
          >
            MIRIAM
          </motion.h1>
        </div>

        {/* TEXTOS SUPERIORES - Distribuidos en esquinas para móvil y desktop */}
        <div className="absolute inset-0 w-full max-w-[1400px] mx-auto pointer-events-none z-10 px-4 md:px-6">
          
          <motion.h2 variants={itemVariants} className="absolute top-[22%] md:top-[18%] left-4 md:left-10 text-[#C1A0AC] dark:text-[#F0D9E4] text-2xl sm:text-4xl md:text-7xl font-bold tracking-tight pointer-events-auto transition-colors duration-500">
            {greeting || t("hero.greeting.evening")}
          </motion.h2>
          
          <motion.h2 variants={itemVariants} className="absolute top-[22%] md:top-[18%] right-4 md:right-10 text-[#C1A0AC] dark:text-[#F0D9E4] text-2xl sm:text-4xl md:text-7xl font-bold tracking-tight pointer-events-auto transition-colors duration-500">
            {t("hero.yosoy")}
          </motion.h2>

          {/* TEXTOS INFERIORES - Distribuidos en esquinas */}
          <motion.h2 variants={itemVariants} className="absolute bottom-[20%] md:bottom-[10%] left-4 md:left-10 text-[#4A3F4B] dark:text-[#F0D9E4] text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter pointer-events-auto drop-shadow-md transition-colors duration-500">
            Miranda
          </motion.h2>
          
          <motion.h2 variants={itemVariants} className="absolute bottom-[20%] md:bottom-[10%] right-4 md:right-10 text-[#4A3F4B] dark:text-[#F0D9E4] text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-right pointer-events-auto drop-shadow-md transition-colors duration-500">
            Rodríguez<br /> Morales
          </motion.h2>

        </div>

        {/* FOTO - Ajuste de altura para no tapar los textos inferiores */}
        <div className="absolute top-[52%] -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0 left-0 w-full h-[50svh] md:h-[80%] flex justify-center items-end pointer-events-none z-0 md:z-20">
          <motion.img
            variants={imageVariants}
            src={fotoHero}
            alt="Miriam Rodríguez"
            className="h-full w-auto object-contain object-center pointer-events-auto drop-shadow-2xl"
          />
        </div>

      </motion.div>

      {/* RESTO DEL COMPONENTE (Franja y Bio) IGUAL... */}
      <div className="w-full h-[50px] bg-[#C1A0AC] dark:bg-[#806C79] relative z-30 flex items-center overflow-hidden border-b-2 border-white dark:border-[#16131F] transition-colors duration-500">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center"
        >
          <span className="text-white dark:text-[#16131F] text-base font-bold opacity-90 transition-colors duration-500">
            {Array(10).fill(t("hero.marquee").replace(/✦\s*$/, '').trim()).join(" ✦ ")} ✦ {/* Remueve diamante final si existe y une con diamantes */}
          </span>
          <span className="text-white dark:text-[#16131F] text-base font-bold opacity-90 transition-colors duration-500 ml-1">
            {Array(10).fill(t("hero.marquee").replace(/✦\s*$/, '').trim()).join(" ✦ ")} ✦ 
          </span>
        </motion.div>
      </div>

      {/* SECCIÓN BIO */}
      <div className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] pb-20 relative z-20 transition-colors duration-500">
        <div className="w-full bg-white dark:bg-[#16131F] rounded-b-[3rem] px-[8%] py-20 md:py-28 shadow-2xl transition-colors duration-500">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between">
            <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-16 h-[3px] bg-[#C1A0AC]"></div>
                <p className="text-[#C1A0AC] text-sm tracking-[0.3em] uppercase font-bold">{t("hero.bio.label")}</p>
              </div>
              <p className="text-[#4A3F4B] dark:text-white text-2xl md:text-4xl font-light leading-snug transition-colors duration-500" dangerouslySetInnerHTML={{ __html: t("hero.bio.text") }} />
              <p className="text-[#e2c8d9] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {t("hero.bio.sub")}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-6 items-center lg:items-start border-t lg:border-t-0 lg:border-l border-[#806C79]/30 pt-10 lg:pt-0 lg:pl-16 w-full lg:w-auto">
                <a 
                  href="/cv_Miriam.pdf" 
                  download="CV_Miriam_Rodriguez.pdf"
                  className="group flex items-center justify-center gap-4 px-10 py-5 bg-[#C1A0AC] text-white dark:text-[#16131F] rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:bg-[#806C79] dark:hover:bg-[#F0D9E4] transition-all duration-300 shadow-xl hover:-translate-y-2"
                >
                <div className="relative w-6 h-5 flex justify-center">
                    <div className="absolute top-0 left-0 w-2.5 h-1.5 bg-white dark:bg-[#16131F] opacity-80 rounded-tl-sm rounded-tr-sm"></div>
                    <div className="absolute bottom-0 w-full h-4 bg-white dark:bg-[#16131F] opacity-80 rounded-sm"></div>
                    <div className="absolute bottom-[2px] w-4 h-[17px] bg-[#F0D9E4] dark:bg-white rounded-sm shadow-sm transition-transform duration-300 ease-in-out group-hover:-translate-y-3 z-10 flex flex-col justify-end pb-1.5 px-[3px]">
                        <div className="w-full h-[1px] bg-gray-400 dark:bg-gray-300 mb-[2px]"></div>
                        <div className="w-3/4 h-[1px] bg-gray-400 dark:bg-gray-300 mb-[2px]"></div>
                    </div>
                    <div className="absolute bottom-0 w-full h-2.5 bg-[#FAFAFA] dark:bg-[#16131F] rounded-sm z-20 shadow-[0_-1px_2px_rgba(0,0,0,0.3)]"></div>
                </div>
                <span>{t("hero.cv")}</span>
                </a>
              
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C1A0AC] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C1A0AC] dark:bg-[#F0D9E4]"></span>
                </span>
                <p className="text-[#806C79] text-xs tracking-widest uppercase font-bold">{t("hero.available")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}