import imgOnFire from '../assets/images/projects/onfire/onfire.png';
import drump from '../assets/images/projects/drump/drump.png';
import musicia from '../assets/images/projects/musicia/musicia.png';
import deredo from '../assets/images/projects/deredo/deredo.png';
import deredoChat from '../assets/images/projects/deredo/Chat.jpeg';
import deredoMapa from '../assets/images/projects/deredo/Mapa.jpeg';
import deredoPrincipal from '../assets/images/projects/deredo/Principal.jpeg';
import deredoRegistro from '../assets/images/projects/deredo/Registro.jpeg';

export const featuredProjects = [
  {
    id: 1,
    title: "OnFire!V1",
    description: "Sistema IoT para detección de incendios forestales usando ESP32 y usando API REST para obtener datos del clima y la mejor ruta para llegar al incendio.",
    problem: "Los incendios forestales suelen detectarse demasiado tarde, provocando daños masivos y poniendo en riesgo vidas humanas. Además, la falta de datos climáticos en tiempo real dificulta la contención.",
    solution: "Se desarrolló un sistema IoT autónomo con ESP32 que monitorea variables ambientales en tiempo real, alertando de forma temprana. Se integró una API REST para calcular la ruta más rápida y segura para los equipos de emergencia.",
    techStack: ["Kotlin", "Firebase", "API REST", "IoT", "ESP32"],
    softSkills: ["Resolución de Problemas", "Innovación", "Gestión de Proyectos", "Trabajo en Equipo", "Liderazgo"],
    images: [imgOnFire],
    repo: "https://github.com/mmrm-miranda/OnFire-Versi-n1",
    demo: "#"
  },
  {
    id: 2,
    title: "Drum Pad",
    description: "Aplicación web interactiva para crear ritmos y experimentar con sonidos percusivos. Permite componer secuencias rítmicas tocando samples en tiempo real.",
    problem: "Muchos creadores de música y aficionados carecen de herramientas accesibles e interactivas en línea para esbozar ritmos rápidos sin necesidad de instalar software complejo o pesado.",
    solution: "Se construyó una interfaz intuitiva que mapea teclas a samples percusivos, optimizando la latencia de audio para permitir una experiencia de creación rítmica fluida y en tiempo real directamente en la web.",
    techStack: ["Python", "Tkinter", "Pygame"],
    softSkills: ["Resolución de Problemas", "Creatividad", "Adaptabilidad"],
    images: [drump], 
    repo: "https://github.com/mmrm-miranda/PYTHON/tree/main/drump",
    demo: "#"
  },
  {
    id: 3,
    title: "MusicIA",
    description: "Plataforma que permite a los usuarios crear piezas musicales únicas y originales mediante IA y MIDI.",
    problem: "La composición musical desde cero puede ser intimidante y requiere un alto nivel de conocimientos de teoría musical, lo que limita a muchas personas creativas sin formación formal.",
    solution: "Se implementó un modelo de inteligencia artificial capaz de generar secuencias MIDI basándose en parámetros seleccionados por el usuario, democratizando la creación musical y sirviendo como herramienta de inspiración.",
    techStack: ["HTML", "JavaScript", "API REST", "IA"],
    softSkills: ["Innovación", "Creatividad", "Adaptabilidad"],
    images: [musicia], 
    repo: "https://github.com/mmrm-miranda/HTML",
    demo: "https://musicia-psuh.onrender.com/"
  },
  {
    id: 4,
    title: "Deredo",
    description: "Aplicación movil de turismo, consumo local y venta local en Durango con una interfaz amable y fácil de usar, que permite a los usuarios descubrir lugares turísticos, restaurantes, tiendas y centros turísticos naturales en Durango, fomentando el turismo y el consumo local.",
    problem: "Los turistas y locales de Durango a menudo desconocen los negocios locales y atractivos turísticos ocultos debido a la falta de una plataforma centralizada y fácil de usar para descubrirlos.",
    solution: "Se diseñó y desarrolló una aplicación móvil con Flutter que centraliza puntos de interés y negocios locales. Se utilizó IA para recomendar rutas personalizadas, fomentando directamente el turismo y la economía local.",
    techStack: ["Flutter", "Google Claude", "API REST", "IA", "Dart"],
    softSkills: ["Innovación", "Creatividad", "Adaptabilidad", "Trabajo en equipo", "Resolución de problemas"],
    badge: "🏆 Proyecto Ganador del Hackatón Hack Days Durango",
    images: [deredo, deredoPrincipal, deredoRegistro, deredoMapa, deredoChat], 
    repo: "https://github.com/mmrm-miranda/DEREDOL",
    demo: "https://devpost.com/software/deredo"
  },

];