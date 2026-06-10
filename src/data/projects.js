import imgOnFire from '../assets/images/projects/onfire.png';
import drump from '../assets/images/projects/drump.png';
import musicia from '../assets/images/projects/musicia.png';
import deredo from '../assets/images/projects/deredo.png';

export const featuredProjects = [
  {
    id: 1,
    title: "OnFire!V1",
    description: "Sistema IoT para detección de incendios forestales usando ESP32 y usando API REST para obtener datos del clima y la mejor ruta para llegar al incendio.",
    techStack: ["Kotlin", "Firebase", "API REST", "IoT", "ESP32"],
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
    techStack: ["HTML", "JavaScript", "API REST", "IA"],
    softSkills: ["Innovación", "Creatividad", "Adaptabilidad"],
    image: musicia, 
    repo: "https://github.com/mmrm-miranda/HTML",
    demo: "https://musicia-psuh.onrender.com/"
  },
  {
    id: 4,
    title: "Deredo",
    description: "Aplicación movil de turismo, consumo local y venta local en Durango con una interfaz amable y fácil de usar, que permite a los usuarios descubrir lugares turísticos, restaurantes, tiendas y sentos turisticos neturales en Durango, fomentando el turismo y el consumo local.",
    techStack: ["Flutter", "Google Claude", "API REST", "IA", "Dart"],
    softSkills: ["Innovación", "Creatividad", "Adaptabilidad", "Trabajo en equipo", "Resolución de problemas"],
    image: deredo, 
    repo: "https://github.com/mmrm-miranda/DEREDOL",
    demo: "#"
  },

];