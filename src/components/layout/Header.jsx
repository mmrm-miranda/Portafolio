import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Formación', href: '#courses' },
    { label: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/mmrm-miranda" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mmrm-miranda/" },
    { Icon: MdEmail, href: "mailto:mmrm.miranda@gmail.com" },
  ];

  return (
    <header className="fixed top-4 md:top-8 left-0 w-full z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between pointer-events-auto relative">
        
        {/* LOGO MMRM - Aseguramos que no se encoja */}
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

        {/* CONTENEDOR DE BOTONES - Espaciado optimizado para móvil */}
        <div className="flex items-center gap-2 md:gap-8">
          <div className="flex items-center gap-1.5 md:gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-theme-surface border border-theme-border overflow-hidden transition-all duration-300 hover:border-theme-accent hover:-translate-y-1 shadow-sm
                           after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:-translate-x-full hover:after:animate-shimmer"
              >
                <Icon className="w-3.5 h-3.5 md:w-[22px] md:h-[22px] relative z-10 text-theme-accent group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className={`relative w-[54px] h-[28px] md:w-[76px] md:h-[38px] rounded-full overflow-hidden transition-all duration-500 border-2 ${theme === 'dark' ? 'bg-[#2D2438] border-[#806C79]' : 'bg-[#FBCFE8] border-[#C1A0AC]'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-[20px] h-[20px] md:w-[28px] md:h-[28px] md:top-1 md:left-1 rounded-full flex items-center justify-center transition-transform duration-500 shadow-lg ${theme === 'dark' ? 'translate-x-[24px] md:translate-x-[38px] bg-[#806C79]' : 'translate-x-0 bg-white'}`}>
              
              {/* CARITAS IGUALES... */}
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
    </header>
  );
};

export default Header;