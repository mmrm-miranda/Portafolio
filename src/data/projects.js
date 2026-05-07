import imgOnFire from '../assets/images/projects/OnFire.png'; 
import drump from '../assets/images/projects/drump.png';
import musicia from '../assets/images/projects/musicia.png';

export const featuredProjects = [
  {
    id: 1,
    title: "OnFire!V1",
    description: "Sistema IoT para detección de incendios forestales usando ESP32 y usando API rest para obtener datos del clima y la meojor ruta para llegar al incendio.",
    techStack: ["Kotlin", "Firebase", "API Rest", "IoT", "ESP 32"],
    softSkills: ["Resolución de Problemas", "Innovación", "Gestión de Proyectos", "Trabajo en Equipo", "Liderazgo"],
    image: imgOnFire,
    repo: "https://github.com/mmrm-miranda/OnFire-Versi-n1",
    demo: "#"
  },
  {
    id: 2,
    title: "Drum Pad",
    description: "Aplicación web interactiva para crear ritmos y experimentar con sonidos percusivos. Permite componer secuencias rítmicas tocando samples en tiempo real.",
    techStack: ["Python", "Tkinter", "Pygame"],
    softSkills: ["Resolución de Problemas", "Creatividad", "Adaptabilidad"],
    image: drump, 
    repo: "https://github.com/mmrm-miranda/PYTHON/tree/main/drump",
    demo: "#"
  },
  {
    id: 3,
    title: "MusicIA",
    description: "Plataforma que permite a los usuarios crear piezas musicales únicas y originales mediante IA y MIDI.",
    techStack: ["Html", "JavaScript", "API Rest", "IA"],
    softSkills: ["Innovación", "Creatividad", "Adaptabilidad"],
    image: musicia, 
    repo: "https://github.com/mmrm-miranda/HTML",
    demo: "https://musicia-psuh.onrender.com/"
  }

];