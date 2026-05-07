import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Cursos', href: '#courses' },
    { label: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/mmrm-miranda" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mmrm-miranda/" },
    { Icon: MdEmail, href: "mailto:mmrm.miranda@gmail.com" },
  ];

  return (
    <header className="fixed top-8 left-0 w-full z-50 px-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between pointer-events-auto relative">
        <div className="text-3xl font-black tracking-[0.25em] text-theme-primary drop-shadow-md transition-colors duration-500">
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

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-theme-surface border border-theme-border overflow-hidden transition-all duration-300 hover:border-theme-accent hover:-translate-y-1 shadow-sm
                           after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:-translate-x-full hover:after:animate-shimmer"
              >
                <Icon size={22} className="relative z-10 text-theme-accent group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className={`relative w-[76px] h-[38px] rounded-full overflow-hidden transition-all duration-500 border-2 ${theme === 'dark' ? 'bg-[#2D2438] border-[#806C79]' : 'bg-[#FBCFE8] border-[#C1A0AC]'}`}
          >
            <div className={`absolute top-1 left-1 w-[28px] h-[28px] rounded-full flex items-center justify-center transition-transform duration-500 shadow-lg ${theme === 'dark' ? 'translate-x-[38px] bg-[#806C79]' : 'translate-x-0 bg-white'}`}>
              
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex gap-[5px] mb-[1px]">
                  <div className="w-[3px] h-[3px] bg-[#4A3F4B] rounded-full"></div>
                  <div className="w-[3px] h-[3px] bg-[#4A3F4B] rounded-full"></div>
                </div>
                <div className="w-[5px] h-[3px] border-b-[2px] border-[#4A3F4B] rounded-b-full"></div>
              </div>

              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex gap-[5px] mb-[2px]">
                  <div className="w-[5px] h-[2px] border-b-[2px] border-[#16131F] rounded-b-full"></div>
                  <div className="w-[5px] h-[2px] border-b-[2px] border-[#16131F] rounded-b-full"></div>
                </div>
                <div className="w-[3px] h-[3px] bg-[#16131F] rounded-full"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;