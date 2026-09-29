// Datos del portafolio: perfil, experiencia, proyectos, stack y formación.

export const perfil = {
  nombre: 'Estefanía Salcedo',
  alias: 'Tefa',
  rol: 'Desarrolladora Full Stack',
  titulo: 'Ingeniera civil convertida en desarrolladora Full Stack',
  ubicacion: 'Bogotá, Colombia',
  email: 'stefa.21@hotmail.com',
  github: 'https://github.com/TefaSalcedo',
  linkedin: 'https://www.linkedin.com/in/estefaniasalcedocamacho/',
  resumen:
    'Soy ingeniera civil y desarrolladora Full Stack. La ingeniería me enseñó a pensar en sistemas, analizar problemas y entender cómo se construyen las cosas; la programación me dio una nueva forma de hacerlo: convirtiendo ideas en productos digitales reales.',
  sobreMi: [
    'Soy curiosa, analítica y creativa. Me gusta entender el porqué de las cosas, conectar conocimientos de áreas distintas y construir soluciones que resuelvan problemas reales.',
    'No aprendo para acumular certificados: quiero habilidades que pueda aplicar en proyectos funcionales, con la autonomía de convertir una idea en una solución completa.',
    'Prefiero mostrar honestamente lo que sé hacer, lo que estoy aprendiendo y el tipo de problemas que me interesa resolver: software con impacto, especialmente donde la ingeniería, los datos y las necesidades cotidianas se encuentran.',
  ],
  comoTrabajo: [
    'Objetivos claros y proyectos divididos en etapas y funcionalidades.',
    'Investigo, comparo alternativas y entiendo la lógica detrás de cada decisión técnica.',
    'Autonomía para organizar mi trabajo y colaboración con comunicación clara.',
    'Aprendizaje continuo: documento, repaso y conecto conceptos nuevos con lo que ya conozco.',
  ],
};

export const experiencia = [
  {
    cargo: 'Full-stack Developer',
    empresa: 'GPS Control',
    periodo: 'Jul 2025 — Actualidad',
    ubicacion: 'Bogotá, Colombia',
    puntos: [
      'Arquitectura y despliegue de la plataforma corporativa con Next.js, cuidando escalabilidad, SEO, accesibilidad y rendimiento.',
      'Strapi CMS dockerizado desde cero para gestionar contenido dinámico de productos y servicios.',
      'Implementación de diseños UI/UX responsive y pixel-perfect con Tailwind CSS y SASS junto al equipo de diseño.',
      'Analítica con IA para monitoreo de flotas: LLMs y MCP para generar insights accionables en lenguaje natural.',
    ],
    tech: ['Next.js', 'Strapi', 'Docker', 'Tailwind CSS', 'SASS', 'LLMs', 'MCP'],
  },
  {
    cargo: 'Lead Developer, Data Scientist & Data Engineer',
    empresa: 'AgroPlan — Concurso MinTIC "Datos al Ecosistema"',
    periodo: 'May 2026 — Jul 2026',
    ubicacion: 'Remoto',
    puntos: [
      'Preparación e ingeniería de más del 90% de los datasets de los modelos predictivos: clima, suelo, cultivos y NASA POWER.',
      'Limpieza de datos, feature engineering, balanceo y tratamiento de outliers (winsorización).',
      'Backend con FastAPI integrando APIs externas y PostgreSQL; Docker para desarrollo y despliegue.',
      'Frontend con Next.js, TypeScript y Tailwind CSS.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Next.js', 'Data Engineering'],
  },
  {
    cargo: 'Freelance Full Stack Developer',
    empresa: 'Proyecto independiente',
    periodo: 'Feb 2025 — May 2025',
    ubicacion: 'Remoto',
    puntos: [
      'Diseño y desarrollo de un sitio web y portal de administración completo para un cliente.',
      'UI/UX mobile-first con Next.js, prototipos en Figma y despliegue continuo en Vercel.',
      'APIs REST, MongoDB y gestión de código con Git/GitHub.',
    ],
    tech: ['React', 'Next.js', 'FastAPI', 'MongoDB', 'Vercel', 'Figma'],
  },
  {
    cargo: 'Auxiliar de Proyectos Civiles',
    empresa: 'Estructuración Proyectos e Ingeniería de Costos SAS',
    periodo: 'May 2024 — Feb 2025',
    ubicacion: 'Bogotá, Colombia',
    puntos: [
      'Análisis de planos estructurales, auditorías de costos y seguimiento de cronogramas.',
      'Optimización de procesamiento de datos en Excel: reducción del ~80% del tiempo de proceso.',
      'Automatización de análisis y reportes con Office Scripts y procesos ETL de datos de construcción.',
    ],
    tech: ['Excel', 'Office Scripts', 'ETL', 'AutoCAD', 'MS Project'],
  },
];

export const experienciaPrevia = [
  { cargo: 'Ejecutiva de ventas chat (part-time)', empresa: 'HangerTech', periodo: '2023' },
  { cargo: 'Agente de call center virtual — soporte a vendedores de Mercado Libre', empresa: 'Webhelp OneLink', periodo: '2020–2021' },
  { cargo: 'Auxiliar operativa', empresa: 'Cine Colombia', periodo: '2018' },
  { cargo: 'Auxiliar logística de eventos', empresa: 'Parking International', periodo: '2018' },
];

export const educacion = [
  {
    titulo: 'Ingeniería Civil',
    institucion: 'Escuela Colombiana de Ingeniería Julio Garavito',
    periodo: '2016 — 2023',
    ubicacion: 'Bogotá, Colombia',
  },
];

export const certificados = [
  { nombre: 'Curso de Next.js 14', emisor: 'Platzi', fecha: 'Ago 2025' },
  { nombre: 'Fundamentos de Arquitectura de Software', emisor: 'Platzi', fecha: 'Mar 2025' },
  { nombre: 'Creación de Páginas Web con v0', emisor: 'Platzi', fecha: '2026' },
  { nombre: 'Python Intermedio: Entornos Virtuales y PEP8', emisor: 'Platzi', fecha: '2025' },
  { nombre: 'JavaScript y React', emisor: 'Platzi', fecha: '2024' },
  { nombre: 'APIs, desarrollo backend y bases de datos', emisor: 'Platzi', fecha: '2025' },
];

export const stack = [
  {
    grupo: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS', 'SASS'],
  },
  {
    grupo: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'SQLAlchemy', 'Alembic', 'Strapi'],
  },
  {
    grupo: 'Bases de datos',
    items: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    grupo: 'Móvil',
    items: ['Flutter', 'Dart', 'Riverpod'],
  },
  {
    grupo: 'Infraestructura y datos',
    items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'ETL', 'WSL2'],
  },
  {
    grupo: 'IA y herramientas',
    items: ['LLMs', 'MCP', 'Figma', 'Notion', 'Excel Automation', 'Vitest', 'Playwright', 'Ruff'],
  },
];

// Proyectos destacados: productos reales en construcción.
export const proyectosDestacados = [
  {
    nombre: 'ISOMORF',
    tagline: 'Ingeniería civil + software',
    descripcion:
      'Plataforma digital de trabajo para proyectos de ingeniería: equipos, roles e invitaciones, materiales y elementos estructurales, documentos versionados y editor 2D con capas. Conecta mi formación civil con el desarrollo de software.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Playwright'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/TefaSalcedo/isomorf-frontend' },
      { label: 'Backend', url: 'https://github.com/TefaSalcedo/isomorf-backend' },
    ],
    estado: 'En desarrollo — por fases',
  },
  {
    nombre: 'EquaHome',
    tagline: 'Hogares equilibrados',
    descripcion:
      'App móvil para repartir las tareas del hogar según tiempo, esfuerzo y preferencias de cada persona — no solo el mismo número de actividades. Incluye planificación diaria, fotos de seguimiento y un asistente con IA.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'FastAPI', 'PostgreSQL'],
    repos: [{ label: 'Monorepo', url: 'https://github.com/TefaSalcedo/EquaHome' }],
    estado: 'En desarrollo',
  },
  {
    nombre: 'AgroPlan Colombia',
    tagline: 'Datos + clima + agricultura',
    descripcion:
      'Proyecto del Concurso Datos al Ecosistema 2026 (MinTIC): análisis de datos públicos de clima, suelo y cultivos para apoyar la planificación agrícola frente a sequías y cambios de temperatura.',
    tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'ML'],
    repos: [
      { label: 'Backend', url: 'https://github.com/TefaSalcedo/146-agroplan-colombia-backend' },
      { label: 'Frontend', url: 'https://github.com/TefaSalcedo/146-agroplan-colombia-frontend' },
      { label: 'ML / Datos', url: 'https://github.com/TefaSalcedo/146-agroplan-colombia-ml' },
    ],
    estado: 'Concurso 2026',
  },
  {
    nombre: 'Miscelautos Pin Piririn Pin Pin',
    tagline: 'Negocio familiar digitalizado',
    descripcion:
      'Sitio web con catálogo jerárquico de repuestos automotrices para un negocio familiar de Bogotá con trayectoria desde 1993. Búsqueda, filtros accesibles, modo claro/oscuro y datos estructurados para SEO.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    repos: [
      { label: 'Web', url: 'https://github.com/TefaSalcedo/v0-miscelautos-pin-piririn-pin-pin-website-2026' },
      { label: 'Catálogo', url: 'https://github.com/TefaSalcedo/pin-center-colombia' },
    ],
    estado: 'En producción',
  },
  {
    nombre: 'AI Telematics Report Interpreter',
    tagline: 'IA aplicada a flotas',
    descripcion:
      'Prototipo PoC que interpreta reportes de telemetría vehicular con IA y los adapta según el perfil del usuario que los consulta.',
    tech: ['Python', 'FastAPI', 'React', 'Docker', 'LLMs'],
    repos: [{ label: 'Repositorio', url: 'https://github.com/TefaSalcedo/ai-telematics-report-interpreter' }],
    estado: 'PoC',
  },
  {
    nombre: 'DevFlow',
    tagline: 'Gestión interna de tickets',
    descripcion:
      'Plataforma interna de gestión de tareas y tickets con tableros por equipo, asignaciones cruzadas y visibilidad por roles — construida con desarrollo dirigido por IA y validación con MCP.',
    tech: ['TypeScript', 'MCP', 'AI-driven development'],
    repos: [{ label: 'Repositorio', url: 'https://github.com/TefaSalcedo/DevFlow-Internal-Ticket-Capacity-Management-System' }],
    estado: 'En desarrollo',
  },
  {
    nombre: 'RainRoute',
    tagline: 'Rutas + alertas de lluvia',
    descripcion:
      'API y web para gestionar rutas y recibir alertas climáticas en tiempo real: autenticación JWT, PostgreSQL y Docker en el backend, interfaz en Next.js y Tailwind.',
    tech: ['FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'JWT'],
    repos: [
      { label: 'Backend', url: 'https://github.com/TefaSalcedo/rainroute-back' },
      { label: 'Web', url: 'https://github.com/TefaSalcedo/rainroute-web' },
    ],
    estado: 'En desarrollo',
  },
  {
    nombre: 'Flutter Auth + Maps MVP',
    tagline: 'Demo full stack móvil',
    descripcion:
      'Aplicación full stack con cliente móvil en Flutter y backend FastAPI: autenticación JWT, sesiones seguras y mapas interactivos, con PostgreSQL en Docker.',
    tech: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Docker'],
    repos: [{ label: 'Repositorio', url: 'https://github.com/TefaSalcedo/flutter-fastapi-auth-maps--Demo-MVP' }],
    estado: 'Demo MVP',
  },
];

// Repositorios de aprendizaje: ejercicios, retos y experimentos.
export const proyectosAprendizaje = [
  { nombre: 'FrontendChallenges', descripcion: 'Retos de devchallenges.io completados.', url: 'https://github.com/TefaSalcedo/FrontendChallenges', tech: 'HTML/CSS' },
  { nombre: 'TimerStudy', descripcion: 'Temporizador de estudio desplegado en GitHub Pages.', url: 'https://github.com/TefaSalcedo/TimerStudy', tech: 'JavaScript' },
  { nombre: 'finance-tracker', descripcion: 'Rastreador de finanzas personales.', url: 'https://github.com/TefaSalcedo/finance-tracker', tech: 'JavaScript' },
  { nombre: 'Project-gifs-react', descripcion: 'Buscador de GIFs con React.', url: 'https://github.com/TefaSalcedo/Project-gifs-react', tech: 'React' },
  { nombre: 'frontend-landingpage', descripcion: 'Landing con GSAP, Spline y Strapi.', url: 'https://github.com/TefaSalcedo/frontend-landingpage', tech: 'JavaScript' },
  { nombre: 'next-landing', descripcion: 'Landing page con Next.js.', url: 'https://github.com/TefaSalcedo/next-landing', tech: 'Next.js' },
  { nombre: 'Talleres React', descripcion: 'Contador, To-Do y ejercicios de componentes.', url: 'https://github.com/TefaSalcedo/taller-react-To-Do', tech: 'React' },
  { nombre: 'TareasJavaScript', descripcion: 'Ejercicios de fundamentos de JS.', url: 'https://github.com/TefaSalcedo/TareasJavaScript', tech: 'JavaScript' },
  { nombre: 'motion (backend + frontend)', descripcion: 'Exploración de animaciones y full stack.', url: 'https://github.com/TefaSalcedo/motion-backend', tech: 'Python + JS' },
  { nombre: 'libro-desarrollo-web', descripcion: 'Notas y código del estudio de desarrollo web.', url: 'https://github.com/TefaSalcedo/libro-desarrollo-web', tech: 'Python' },
  { nombre: 'Strapi-first-step', descripcion: 'Primeros pasos con Strapi CMS.', url: 'https://github.com/TefaSalcedo/Strapi-first-step', tech: 'Strapi' },
  { nombre: 'email-MJML', descripcion: 'Plantillas de email con MJML.', url: 'https://github.com/TefaSalcedo/email-MJML', tech: 'MJML' },
  { nombre: 'cv_ejemplo', descripcion: 'Práctica de CSS Flexbox.', url: 'https://github.com/TefaSalcedo/cv_ejemplo', tech: 'HTML/CSS' },
];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Competencia profesional completa' },
];

export const intereses = [
  'Teatro y actuación', 'Baile', 'Voleibol', 'Tenis de mesa', 'Ajedrez',
  'Ciclismo', 'Senderismo', 'Finanzas', 'Emprendimiento', 'Creación de contenido',
];
