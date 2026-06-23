import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "../context/useLanguage";

const contactLinks = [
  { icon: <FaGithub size={28}/>, href: "https://github.com/mmrm-miranda", label: "GitHub" },
  { icon: <FaLinkedin size={28}/>, href: "https://www.linkedin.com/in/mmrm-miranda/", label: "LinkedIn" },
  { icon: <MdEmail size={28}/>, href: "mailto:mmrm.miranda@gmail.com", label: "Email" },
];

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full bg-[#FFF0F5] dark:bg-[#F0D9E4] py-20 px-[5%] flex justify-center transition-colors duration-500">
      <div className="max-w-[1400px] w-full relative">
        
        <div className="flex justify-center relative z-10 -mb-6">
          <div className="bg-white dark:bg-[#16131F] text-[#4A3F4B] dark:text-[#FAFAFA] text-base md:text-lg px-16 py-4 rounded-full font-bold tracking-[0.25em] uppercase border-[5px] border-[#C1A0AC] dark:border-[#F0D9E4] shadow-lg transition-colors duration-500">
            {t("contact.capsule")}
          </div>
        </div>

        <div className="bg-white dark:bg-[#16131F] rounded-[3rem] p-12 pt-20 md:p-20 md:pt-24 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 transition-colors duration-500">
          <div className="flex flex-col items-center text-center gap-16">
            
            <div className="border-b border-[#C1A0AC]/30 dark:border-[#4A3F4B]/50 pb-12 w-full transition-colors duration-500">
              <h3 className="text-[#4A3F4B] dark:text-[#FAFAFA] text-5xl lg:text-[4.5rem] font-light tracking-tight leading-tight transition-colors duration-500">
                {t("contact.heading")} <br/>
                <span className="font-black text-[#C1A0AC] dark:text-[#F0D9E4] uppercase tracking-tighter">{t("contact.cta")}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]">
              {contactLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex flex-col items-center justify-center gap-6 p-10 rounded-[2rem] bg-white/40 dark:bg-[#4A3F4B]/30 backdrop-blur-md border border-[#C1A0AC]/20 dark:border-[#C1A0AC]/10 overflow-hidden transition-all duration-500 hover:border-[#C1A0AC] hover:-translate-y-3 hover:shadow-2xl"
                >
                  <span className="relative z-10 text-[#C1A0AC] group-hover:scale-125 transition-transform duration-500">
                    {link.icon}
                  </span>
                  <span className="relative z-10 text-[#4A3F4B] dark:text-white font-black text-sm tracking-[0.3em] uppercase transition-colors duration-500">
                    {link.label}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#C1A0AC] group-hover:w-full transition-all duration-700 ease-out"></div>
                </a>
              ))}
            </div>

            <p className="text-[#806C79] dark:text-[#F0D9E4]/50 text-sm md:text-base font-medium tracking-widest uppercase opacity-80" dangerouslySetInnerHTML={{ __html: t("contact.available") }} />
          </div>
        </div>
      </div>
    </section>
  );
}
