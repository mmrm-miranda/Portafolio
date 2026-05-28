import { LanguageProvider } from "./context/LanguageContext";
import { useTheme } from "./hooks/useTheme";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CoursesSection from "./sections/CoursesSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/layout/Footer";

import Header from './components/layout/Header';
import HeroSection from './sections/HeroSection';

function App() {
  return (
    <LanguageProvider>
      <main className="bg-theme-base min-h-screen transition-colors duration-500 font-body">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CoursesSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;