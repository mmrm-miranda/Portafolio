import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../context/useLanguage';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.courses'), href: '#courses' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/mmrm-miranda" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mmrm-miranda/" },
    { Icon: MdEmail, href: "mailto:mmrm.miranda@gmail.com" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 md:top-8 left-0 w-full z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between pointer-events-auto relative">
        
        <div className="flex-shrink-0 text-xl md:text-3xl font-black tracking-widest md:tracking-[0.25em] text-theme-primary drop-shadow-md transition-colors duration-500 whitespace-nowrap mr-4">
          RM
        </div>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 bg-theme-surface/80 rounded-full px-10 py-4 shadow-xl border border-theme-border backdrop-blur-md transition-all">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-bold text-theme-muted hover:text-theme-accent transition-all duration-300 hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-8">
          <div className="hidden md:flex items-center gap-1.5 md:gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-theme-surface/80 backdrop-blur-md border border-theme-border overflow-hidden transition-all duration-300 hover:border-theme-accent hover:-translate-y-1 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 md:w-[22px] md:h-[22px] relative z-10 text-theme-accent group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-theme-surface border border-theme-border shadow-sm text-theme-accent hover:border-theme-accent transition-all duration-300"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>

          <button 
            onClick={toggleLanguage}
            className={`relative w-[54px] h-[28px] md:w-[76px] md:h-[38px] rounded-full overflow-hidden transition-all duration-500 border-2 ${language === 'en' ? 'bg-[#2D2438] border-[#806C79]' : 'bg-[#FBCFE8] border-[#C1A0AC]'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-[20px] h-[20px] md:w-[28px] md:h-[28px] md:top-1 md:left-1 rounded-full flex items-center justify-center transition-transform duration-500 shadow-lg ${language === 'en' ? 'translate-x-[24px] md:translate-x-[38px] bg-[#806C79]' : 'translate-x-0 bg-white'}`}>
              <span className="text-[9px] md:text-xs font-black tracking-tight leading-none">{language === 'es' ? 'ES' : 'EN'}</span>
            </div>
          </button>

          <button 
            onClick={toggleTheme}
            className={`relative w-[54px] h-[28px] md:w-[76px] md:h-[38px] rounded-full overflow-hidden transition-all duration-500 border-2 ${theme === 'dark' ? 'bg-[#2D2438] border-[#806C79]' : 'bg-[#FBCFE8] border-[#C1A0AC]'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-[20px] h-[20px] md:w-[28px] md:h-[28px] md:top-1 md:left-1 rounded-full flex items-center justify-center transition-transform duration-500 shadow-lg ${theme === 'dark' ? 'translate-x-[24px] md:translate-x-[38px] bg-[#806C79]' : 'translate-x-0 bg-white'}`}>
              
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex gap-[3px] md:gap-[5px] mb-[1px]">
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-[#4A3F4B] rounded-full"></div>
                  <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-[#4A3F4B] rounded-full"></div>
                </div>
                <div className="w-[4px] h-[2px] md:w-[5px] md:h-[3px] border-b-[2px] border-[#4A3F4B] rounded-b-full"></div>
              </div>

              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex gap-[3px] md:gap-[5px] mb-[1px] md:mb-[2px]">
                  <div className="w-[4px] h-[1.5px] md:w-[5px] md:h-[2px] border-b-[2px] border-[#16131F] rounded-b-full"></div>
                  <div className="w-[4px] h-[1.5px] md:w-[5px] md:h-[2px] border-b-[2px] border-[#16131F] rounded-b-full"></div>
                </div>
                <div className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-[#16131F] rounded-full"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          <div 
            className="absolute top-20 left-4 right-4 bg-white dark:bg-[#16131F] rounded-3xl shadow-2xl border border-[#C1A0AC]/30 dark:border-[#C1A0AC]/20 p-8 flex flex-col gap-6 transition-colors duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={handleNavClick}
                  className="text-lg font-bold text-[#4A3F4B] dark:text-white hover:text-[#C1A0AC] dark:hover:text-[#F0D9E4] transition-all duration-300 py-2 border-b border-[#C1A0AC]/20 dark:border-[#4A3F4B]/30"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-4 pt-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4A3F4B]/5 dark:bg-[#4A3F4B]/20 border border-[#C1A0AC]/20 text-[#C1A0AC] hover:border-[#C1A0AC] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
