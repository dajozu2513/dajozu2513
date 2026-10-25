// Site copy in English and Spanish. PORTFOLIO_SPEC.md is the only source of content:
// do not add facts here that are not in the spec. Each later step adds its section's data.
//
// Entries marked "REVIEW" are translations of spec text that only exists in one language.
// They add no new facts, but Joel should confirm the wording.

export const LANGUAGES = ['en', 'es'];
export const DEFAULT_LANGUAGE = 'en';

export const content = {
  en: {
    meta: {
      title: 'David Joel Soto Zuniga · Full-Stack Developer',
      description:
        'Full-Stack Developer · Information Systems Engineering. Automating business processes through software, data, and AI.',
    },
    ui: {
      brandLabel: 'Professional portfolio',
      skipLink: 'Skip to content',
      navLabel: 'Sections',
      languageLabel: 'Language',
      heroLabel: 'Introduction',
      canvasLabel: 'Interactive 3D robot that follows the cursor',
      skillsLabel: 'Skills',
      stackLabel: 'Stack',
      repoLink: 'Repository',
      demoLink: 'Live demo',
      newTab: 'opens in a new tab',
      credentialLabel: 'Credential ID',
      verifyLink: 'Verify credential',
      menuOpen: 'Menu',
      menuClose: 'Close',
    },
    hero: {
      name: 'David Joel Soto Zuniga',
      title: 'Full-Stack Developer · Information Systems Engineering',
      tagline: 'Automating business processes through software, data, and AI.',
      scrollCue: 'Scroll to About',
    },
    sections: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      certifications: 'Certifications',
      beyond: 'Beyond code',
      contact: 'Contact',
    },
    about: {
      summary:
        'Full-stack developer and Information Systems Engineering student who automates business processes through software, data, and AI, with a focus on web development and agile project management. Scrum Master experienced in leading cross-functional teams, with strong analytical, problem-solving, negotiation, and communication skills. Communicates fluently in English and thrives in multicultural environments.',
      facts: [
        { label: 'Location', values: ['Heredia, Costa Rica'] },
        // REVIEW: spec gives "Open to work: presencial, híbrido o remoto".
        { label: 'Availability', values: ['Open to work: on-site, hybrid, or remote'] },
        // REVIEW: spec gives "Español: nativo. Inglés: avanzado (C1)."
        { label: 'Languages', values: ['Spanish: native', 'English: advanced (C1)'] },
      ],
    },
    experience: [
      {
        role: 'Collections Agent',
        org: 'Bill Gosling Outsourcing',
        period: 'Sep 2026 – Oct 2026',
        // REVIEW: spec gives "Tiempo completo, presencial".
        type: 'Full-time, on-site',
        location: 'Belén, Heredia',
        highlights: [
          'Communicated daily in English with customers of a U.S.-based lending client, negotiating payment arrangements.',
          "Resolved account issues by assessing each customer's situation and proposing viable payment plans.",
          'Trained in negotiation, payment plans, and collections software for a 120-calls-per-day target.',
        ],
        skills: ['Negotiation', 'Customer Service', 'Collections', 'Regulatory Compliance'],
      },
      {
        role: 'Full-Stack Developer & Scrum Master',
        org: 'Ministerio de Salud de Costa Rica',
        period: 'Feb 2025 – Jun 2026',
        // REVIEW: spec gives "Contrato de formación".
        type: 'Apprenticeship',
        location: 'Heredia',
        highlights: [
          'Co-developed a Ministry-wide web application (React, C# .NET, Oracle) that automated a business process spread across documents, spreadsheets, and email into one traceable workflow for thousands of proposals.',
          'Led a 10-person cross-functional team as Scrum Master, delivering 36-48 user stories over 6 Agile sprints.',
          'Communicated with technical and non-technical stakeholders to turn business needs into a prioritized backlog.',
        ],
        skills: [
          'Programming Languages',
          'Application Development',
          'Web Development',
          'Project Management',
          'Databases',
          'Technical Support',
        ],
      },
      {
        role: 'NetOps & DevOps Intern',
        org: 'Neustar, Inc.',
        period: 'Oct 2021 – Dec 2021',
        // REVIEW: spec gives "Pasantía".
        type: 'Internship',
        location: 'Heredia',
        highlights: [
          'Processed 20-40 DNS record changes daily for international clients in a multicultural, English-only IT team.',
          'Troubleshot client configuration tickets and contributed to DevOps automation initiatives.',
        ],
        skills: ['DNS Management', 'Process Automation', 'DevOps', 'NetOps', 'Technical Support'],
      },
    ],
    // Links from the spec's Projects table. Order as the table, except Black & White moved to
    // second place at Joel's request. Descriptions are the English project texts from the spec
    // (GitHub READMEs). Only Black & White has a live demo. `highlight` marks the two projects
    // Joel wants emphasised equally (VialReport and Black & White).
    projects: [
      {
        name: 'VialReport - Road Incident Reporting',
        highlight: true,
        // REVIEW: spec gives "Curso Plataformas Móviles, UNA 2026".
        context: 'Mobile Platforms course, UNA 2026',
        description:
          'Android app for citizen reporting of road incidents (potholes, damaged traffic lights, flooding), with a REST backend and AI-based photo validation. Citizens report issues, administrators manage report status, and work crews handle resolution.',
        highlights: [
          'Android: Kotlin 2.0, Jetpack Compose, Jetpack Navigation, Hilt, Retrofit + OkHttp, OSMDroid, Coil.',
          'Backend: Ktor (Kotlin/JVM), MongoDB Atlas, JWT (Auth0 java-jwt), Google Gemini 1.5 Flash, deployed on Render with Docker.',
          'REST API with 16 endpoints (auth, reports, photos, map, admin stats, notifications) and a Postman collection.',
        ],
        stack: ['Kotlin', 'Jetpack Compose', 'Ktor', 'MongoDB Atlas', 'Gemini', 'Docker'],
        repo: 'https://github.com/dajozu2513/VialReport-Road-Incident-Reporting',
      },
      {
        name: 'Black & White by Joel Soto',
        highlight: true,
        // REVIEW: spec gives "Emprendimiento personal".
        context: 'Personal business',
        description:
          'Static bilingual showcase site for a brand of exclusive, handmade jewelry and design accessories. Vanilla HTML, CSS and JavaScript, no frameworks or build tools.',
        highlights: [
          'Three.js 3D steel chain running behind the home page, with photo fallback when WebGL is unavailable.',
          'ES/EN toggle with a custom i18n dictionary, language persisted across pages.',
          'Sections: intro splash, pillars, 9-product collection in a 3x3 grid with detail modal and WhatsApp CTA, three bilingual editorial articles with cross-fade page transitions.',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
        repo: 'https://github.com/dajozu2513/Black-White-Personal-Store',
        demo: 'https://blackandwhite-js.onrender.com',
      },
      {
        name: 'CatCradle - Generative Art',
        context: 'Personal',
        description:
          'Real-time generative art web app driven by hand tracking. MediaPipe detects 21 landmarks per hand; p5.js renders at 60 fps. No backend or build step.',
        stack: ['JavaScript', 'MediaPipe', 'p5.js'],
        repo: 'https://github.com/dajozu2513/CatCradle-Generative-Art',
      },
      {
        name: 'Medical Appointment System',
        // REVIEW: spec gives "Curso Programación 4, UNA".
        context: 'Programming 4 course, UNA',
        description:
          'Full-stack app for managing medical appointments: patients book, doctors manage availability, administrators oversee the system.',
        stack: ['React 19', 'Spring Boot 3.5', 'MySQL 8'],
        repo: 'https://github.com/dajozu2513/Appointments-Booking-System',
      },
      {
        name: 'POS - Point of Sale',
        // REVIEW: spec gives "Curso Programación 3, UNA".
        context: 'Programming 3 course, UNA',
        description:
          'Desktop point-of-sale system in Java Swing with XML persistence. Manages customers, cashiers, products, categories and invoicing with automatic invoice numbering.',
        stack: ['Java 21', 'Swing', 'JAXB', 'JFreeChart', 'Maven'],
        repo: 'https://github.com/dajozu2513/POS-Point-of-Sale',
      },
      {
        name: 'Semaphore - Concurrent Dining Philosophers',
        // REVIEW: spec gives "Curso Sistemas Operativos, UNA".
        context: 'Operating Systems course, UNA',
        description:
          'Concurrent simulation of the Dining Philosophers problem in C++17, with three anti-deadlock strategies implemented via the Strategy pattern.',
        stack: ['C++17', 'std::thread', 'mutex', 'condition_variable'],
        repo: 'https://github.com/dajozu2513/Traffic-Light-Traffic-Simulation',
      },
    ],
    // REVIEW: category names and the non-technology items are translated from the
    // Spanish skills table in the spec. Technology names are unchanged.
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'React Router', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Three.js', 'p5.js'],
      },
      {
        category: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA/Hibernate', 'Python', 'C#/.NET', 'Kotlin', 'Ktor', 'C++', 'REST APIs', 'JWT'],
      },
      { category: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Retrofit', 'OSMDroid'] },
      { category: 'Desktop', items: ['Java Swing', 'JAXB', 'JFreeChart'] },
      {
        category: 'Data',
        items: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB (Atlas)', 'SQL', 'Data modeling', 'Query optimization'],
      },
      {
        category: 'AI and automation',
        items: ['Claude API', 'Claude Code', 'Google Gemini API (image validation in production)', 'Google MediaPipe', 'Process automation'],
      },
      {
        category: 'QA and testing',
        items: ['Functional, unit, and inspection-based testing', 'Test automation', 'Heurio', 'Katalon'],
      },
      {
        category: 'Security',
        items: ['JWT', 'Role-based access control', 'Information security fundamentals (ISO/IEC 27000, risk management)'],
      },
      {
        category: 'DevOps and infrastructure',
        items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'Render', 'GitHub Pages', 'Maven', 'DNS', 'NetOps'],
      },
      { category: 'Mainframe', items: ['IBM Mainframe', 'z/OS', 'JCL'] },
      { category: 'Fundamentals', items: ['OOP', 'MVC', 'Strategy pattern', 'Concurrency and multithreading'] },
      { category: 'Methodologies', items: ['Scrum (certified Scrum Master)', 'Project management'] },
      {
        category: 'Interpersonal',
        items: [
          'Negotiation',
          'Customer service',
          'Regulatory compliance',
          'Bilingual communication',
          'Coordination between technical and non-technical teams',
        ],
      },
    ],
    // Degree names are the English names given in the spec. REVIEW: periods and statuses.
    education: [
      {
        institution: 'Universidad Nacional de Costa Rica (UNA)',
        degrees: [
          { name: "Bachelor's Degree, Information Systems Engineering", period: 'Feb 2022 – May 2027', status: 'In progress' },
          { name: "Associate's Degree, Application Programming", period: 'Feb 2022 – May 2026' },
          // REVIEW: spec gives "Licenciatura: planeada, fechas por definir" with no English name.
          { name: 'Licenciatura', status: 'Planned, dates to be defined' },
        ],
      },
      {
        institution: 'Colegio Técnico Profesional Mercedes Norte',
        degrees: [{ name: 'Technical Degree, Software Development', period: 'Jan 2019 – Dec 2021' }],
      },
    ],
    // Issuer, date and credential ID from the spec. IBM Z Xplore has no credential ID;
    // its Credly verification link was provided by Joel.
    certifications: [
      {
        name: 'IBM Z Xplore - Concepts',
        issuer: 'IBM',
        date: 'Jun 2026',
        url: 'https://www.credly.com/badges/6db570cd-0be0-4389-9ab3-b21bf3e44c60/linked_in_profile',
      },
      { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Apr 2026', id: 'pwhbtgzpkt4k' },
      { name: 'Claude 101', issuer: 'Anthropic', date: 'Apr 2026', id: 'imwfy7mvmo8x' },
      { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: 'Mar 2026', id: '1151993' },
      { name: 'Scrum with AI Certified (SAC)', issuer: 'SCRUMstudy', date: 'Mar 2026', id: '1152540' },
      { name: 'Digital Marketing Fundamentals (SCDM-F)', issuer: 'SCRUMstudy', date: 'Mar 2026', id: '1153530' },
    ],
    // REVIEW: translated from the Spanish "Idiomas y actividades" part of the spec.
    beyond: {
      activitiesTitle: 'Leadership and activities',
      interestsTitle: 'Interests',
      activities: [
        {
          name: 'Gatos de la UNA',
          role: 'Volunteer',
          period: '2022 – present',
          description: 'Animal rescue, adoptions, food drives, and fundraising marketing.',
        },
        {
          name: 'Freelance English tutor',
          period: '2022 – present',
          description: 'High school students, university classmates, and adults.',
        },
        {
          name: 'UNA cheerleading team',
          period: '2022 – 2024',
          description: 'Teamwork, discipline, and coordination under high pressure.',
        },
      ],
      interests: [
        'TV series, movies, and animation',
        'Video games',
        'Music',
        'Illustrated books',
        'Psychology, especially suggestion and influence',
        'Cats',
      ],
    },
    // Public contact per the spec: email, LinkedIn and GitHub only. The phone is never published.
    contact: {
      channels: [
        { label: 'Email', text: 'dajozu2513@gmail.com', href: 'mailto:dajozu2513@gmail.com' },
        {
          label: 'LinkedIn',
          text: 'david-joel-soto-zuniga-0560141b5',
          href: 'https://www.linkedin.com/in/david-joel-soto-zuniga-0560141b5',
          external: true,
        },
        { label: 'GitHub', text: 'dajozu2513', href: 'https://github.com/dajozu2513', external: true },
      ],
      cv: {
        label: 'Download CV (PDF, English)',
        // Set to 'cv/David_Joel_Soto_Zuniga_CV_EN.pdf' once a version without the phone number
        // is in public/cv/. While null, no download button is shown.
        file: null,
      },
    },
    footer: {
      name: 'David Joel Soto Zuniga',
      copyright: '© 2026 • All rights reserved',
    },
    robot: {
      loading: 'Loading scene...',
      startError: 'Your browser could not start the 3D viewer.',
      loadError: 'The 3D scene could not be loaded. Please check your connection and refresh the page.',
    },
  },

  es: {
    meta: {
      title: 'David Joel Soto Zuniga · Desarrollador Full-Stack',
      description:
        'Desarrollador Full-Stack · Ingeniería en Sistemas de Información. Automatizo procesos de negocio con software, datos e IA.',
    },
    ui: {
      brandLabel: 'Portafolio profesional',
      skipLink: 'Saltar al contenido',
      navLabel: 'Secciones',
      languageLabel: 'Idioma',
      heroLabel: 'Introducción',
      canvasLabel: 'Robot 3D interactivo que sigue el cursor',
      skillsLabel: 'Aptitudes',
      stackLabel: 'Tecnologías',
      repoLink: 'Repositorio',
      demoLink: 'Demo en vivo',
      newTab: 'se abre en una pestaña nueva',
      credentialLabel: 'ID de credencial',
      verifyLink: 'Verificar credencial',
      menuOpen: 'Menú',
      menuClose: 'Cerrar',
    },
    hero: {
      name: 'David Joel Soto Zuniga',
      title: 'Desarrollador Full-Stack · Ingeniería en Sistemas de Información',
      tagline: 'Automatizo procesos de negocio con software, datos e IA.',
      scrollCue: 'Bajar a Sobre mí',
    },
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      certifications: 'Certificaciones',
      beyond: 'Más allá del código',
      contact: 'Contacto',
    },
    about: {
      summary:
        'Desarrollador full-stack y estudiante de Ingeniería en Sistemas de Información que automatiza procesos de negocio mediante software, datos e IA, con enfoque en desarrollo web y gestión ágil de proyectos. Scrum Master con experiencia liderando equipos multifuncionales, con sólidas habilidades analíticas, de resolución de problemas, negociación y comunicación. Me comunico con fluidez en inglés y me desenvuelvo con facilidad en entornos multiculturales.',
      facts: [
        { label: 'Ubicación', values: ['Heredia, Costa Rica'] },
        { label: 'Disponibilidad', values: ['Disponible para trabajar: presencial, híbrido o remoto'] },
        { label: 'Idiomas', values: ['Español: nativo', 'Inglés: avanzado (C1)'] },
      ],
    },
    experience: [
      {
        // REVIEW: role, highlights and skills translated from the English spec text.
        role: 'Agente de cobros',
        org: 'Bill Gosling Outsourcing',
        period: 'sep 2026 – oct 2026',
        type: 'Tiempo completo, presencial',
        location: 'Belén, Heredia',
        highlights: [
          'Me comuniqué a diario en inglés con clientes de una empresa de préstamos de Estados Unidos, negociando acuerdos de pago.',
          'Resolví problemas de cuentas evaluando la situación de cada cliente y proponiendo planes de pago viables.',
          'Recibí formación en negociación, planes de pago y software de cobranza para una meta de 120 llamadas diarias.',
        ],
        skills: ['Negociación', 'Servicio al cliente', 'Cobranza', 'Cumplimiento regulatorio'],
      },
      {
        // REVIEW: role, highlights and skills translated from the English spec text.
        role: 'Desarrollador Full-Stack y Scrum Master',
        org: 'Ministerio de Salud de Costa Rica',
        period: 'feb 2025 – jun 2026',
        type: 'Contrato de formación',
        location: 'Heredia',
        highlights: [
          'Co-desarrollé una aplicación web para todo el Ministerio (React, C# .NET, Oracle) que automatizó un proceso de negocio disperso entre documentos, hojas de cálculo y correo en un único flujo trazable para miles de propuestas.',
          'Lideré como Scrum Master un equipo multifuncional de 10 personas, entregando entre 36 y 48 historias de usuario en 6 sprints ágiles.',
          'Me comuniqué con partes interesadas técnicas y no técnicas para convertir necesidades de negocio en un backlog priorizado.',
        ],
        skills: [
          'Lenguajes de programación',
          'Desarrollo de aplicaciones',
          'Desarrollo web',
          'Gestión de proyectos',
          'Bases de datos',
          'Soporte técnico',
        ],
      },
      {
        // REVIEW: role, highlights and skills translated from the English spec text.
        role: 'Practicante de NetOps y DevOps',
        org: 'Neustar, Inc.',
        period: 'oct 2021 – dic 2021',
        type: 'Pasantía',
        location: 'Heredia',
        highlights: [
          'Procesé entre 20 y 40 cambios diarios de registros DNS para clientes internacionales, en un equipo de TI multicultural que trabajaba solo en inglés.',
          'Resolví tickets de configuración de clientes y contribuí a iniciativas de automatización DevOps.',
        ],
        skills: ['Gestión de DNS', 'Automatización de procesos', 'DevOps', 'NetOps', 'Soporte técnico'],
      },
    ],
    // REVIEW: descriptions and highlights translated from the English spec text.
    // Contexts are the Spanish values from the spec's Projects table.
    projects: [
      {
        name: 'VialReport - Road Incident Reporting',
        highlight: true,
        context: 'Curso Plataformas Móviles, UNA 2026',
        description:
          'App Android para que la ciudadanía reporte incidentes viales (baches, semáforos dañados, inundaciones), con un backend REST y validación de fotos con IA. La ciudadanía reporta los problemas, los administradores gestionan el estado de los reportes y las cuadrillas de trabajo se encargan de resolverlos.',
        highlights: [
          'Android: Kotlin 2.0, Jetpack Compose, Jetpack Navigation, Hilt, Retrofit + OkHttp, OSMDroid, Coil.',
          'Backend: Ktor (Kotlin/JVM), MongoDB Atlas, JWT (Auth0 java-jwt), Google Gemini 1.5 Flash, desplegado en Render con Docker.',
          'API REST con 16 endpoints (autenticación, reportes, fotos, mapa, estadísticas de administración, notificaciones) y una colección de Postman.',
        ],
        stack: ['Kotlin', 'Jetpack Compose', 'Ktor', 'MongoDB Atlas', 'Gemini', 'Docker'],
        repo: 'https://github.com/dajozu2513/VialReport-Road-Incident-Reporting',
      },
      {
        name: 'Black & White by Joel Soto',
        highlight: true,
        context: 'Emprendimiento personal',
        description:
          'Sitio estático y bilingüe de exhibición para una marca de joyería exclusiva hecha a mano y accesorios de diseño. HTML, CSS y JavaScript puros, sin frameworks ni herramientas de compilación.',
        highlights: [
          'Cadena de acero 3D con Three.js detrás de la página de inicio, con una foto de respaldo cuando WebGL no está disponible.',
          'Selector ES/EN con un diccionario i18n propio; el idioma se mantiene entre páginas.',
          'Secciones: pantalla de entrada, pilares, colección de 9 productos en una cuadrícula de 3x3 con ventana de detalle y botón de WhatsApp, y tres artículos editoriales bilingües con transiciones de página en fundido.',
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
        repo: 'https://github.com/dajozu2513/Black-White-Personal-Store',
        demo: 'https://blackandwhite-js.onrender.com',
      },
      {
        name: 'CatCradle - Generative Art',
        context: 'Personal',
        description:
          'App web de arte generativo en tiempo real controlada por seguimiento de manos. MediaPipe detecta 21 puntos de referencia por mano; p5.js renderiza a 60 fps. Sin backend ni paso de compilación.',
        stack: ['JavaScript', 'MediaPipe', 'p5.js'],
        repo: 'https://github.com/dajozu2513/CatCradle-Generative-Art',
      },
      {
        name: 'Medical Appointment System',
        context: 'Curso Programación 4, UNA',
        description:
          'App full-stack para gestionar citas médicas: los pacientes reservan, los médicos gestionan su disponibilidad y los administradores supervisan el sistema.',
        stack: ['React 19', 'Spring Boot 3.5', 'MySQL 8'],
        repo: 'https://github.com/dajozu2513/Appointments-Booking-System',
      },
      {
        name: 'POS - Point of Sale',
        context: 'Curso Programación 3, UNA',
        description:
          'Sistema de punto de venta de escritorio en Java Swing con persistencia en XML. Gestiona clientes, cajeros, productos, categorías y facturación con numeración automática de facturas.',
        stack: ['Java 21', 'Swing', 'JAXB', 'JFreeChart', 'Maven'],
        repo: 'https://github.com/dajozu2513/POS-Point-of-Sale',
      },
      {
        name: 'Semaphore - Concurrent Dining Philosophers',
        context: 'Curso Sistemas Operativos, UNA',
        description:
          'Simulación concurrente del problema de los filósofos comensales en C++17, con tres estrategias anti-deadlock implementadas mediante el patrón Strategy.',
        stack: ['C++17', 'std::thread', 'mutex', 'condition_variable'],
        repo: 'https://github.com/dajozu2513/Traffic-Light-Traffic-Simulation',
      },
    ],
    // Categories and items as written in the spec's skills table.
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'React Router', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Three.js', 'p5.js'],
      },
      {
        category: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA/Hibernate', 'Python', 'C#/.NET', 'Kotlin', 'Ktor', 'C++', 'REST APIs', 'JWT'],
      },
      { category: 'Móvil', items: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Retrofit', 'OSMDroid'] },
      { category: 'Escritorio', items: ['Java Swing', 'JAXB', 'JFreeChart'] },
      {
        category: 'Datos',
        items: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB (Atlas)', 'SQL', 'modelado de datos', 'optimización de consultas'],
      },
      {
        category: 'IA y automatización',
        items: ['Claude API', 'Claude Code', 'Google Gemini API (validación de imágenes en producción)', 'Google MediaPipe', 'automatización de procesos'],
      },
      {
        category: 'QA y testing',
        items: ['Pruebas funcionales, unitarias y por inspección', 'automatización de pruebas', 'Heurio', 'Katalon'],
      },
      {
        category: 'Seguridad',
        items: ['JWT', 'control de acceso basado en roles', 'fundamentos de seguridad de la información (ISO/IEC 27000, gestión de riesgos)'],
      },
      {
        category: 'DevOps e infraestructura',
        items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'Render', 'GitHub Pages', 'Maven', 'DNS', 'NetOps'],
      },
      { category: 'Mainframe', items: ['IBM Mainframe', 'z/OS', 'JCL'] },
      { category: 'Fundamentos', items: ['POO', 'MVC', 'Strategy pattern', 'concurrencia y multithreading'] },
      { category: 'Metodologías', items: ['Scrum (Scrum Master certificado)', 'gestión de proyectos'] },
      {
        category: 'Interpersonales',
        items: [
          'Negociación',
          'servicio al cliente',
          'cumplimiento regulatorio',
          'comunicación bilingüe',
          'coordinación entre equipos técnicos y no técnicos',
        ],
      },
    ],
    // Degree names, periods and statuses as written in the spec (Spanish).
    education: [
      {
        institution: 'Universidad Nacional de Costa Rica (UNA)',
        degrees: [
          { name: 'Bachillerato en Ingeniería en Sistemas de Información', period: 'feb 2022 – may 2027', status: 'En curso' },
          { name: 'Diplomado en Programación de Aplicaciones', period: 'feb 2022 – may 2026' },
          { name: 'Licenciatura', status: 'Planeada, fechas por definir' },
        ],
      },
      {
        institution: 'Colegio Técnico Profesional Mercedes Norte',
        degrees: [{ name: 'Técnico en Desarrollo de Software', period: 'ene 2019 – dic 2021' }],
      },
    ],
    certifications: [
      {
        name: 'IBM Z Xplore - Concepts',
        issuer: 'IBM',
        date: 'jun 2026',
        url: 'https://www.credly.com/badges/6db570cd-0be0-4389-9ab3-b21bf3e44c60/linked_in_profile',
      },
      { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'abr 2026', id: 'pwhbtgzpkt4k' },
      { name: 'Claude 101', issuer: 'Anthropic', date: 'abr 2026', id: 'imwfy7mvmo8x' },
      { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: 'mar 2026', id: '1151993' },
      { name: 'Scrum with AI Certified (SAC)', issuer: 'SCRUMstudy', date: 'mar 2026', id: '1152540' },
      { name: 'Digital Marketing Fundamentals (SCDM-F)', issuer: 'SCRUMstudy', date: 'mar 2026', id: '1153530' },
    ],
    // As written in the spec's "Idiomas y actividades" part.
    beyond: {
      activitiesTitle: 'Liderazgo y actividades',
      interestsTitle: 'Intereses',
      activities: [
        {
          name: 'Gatos de la UNA',
          role: 'Voluntario',
          period: '2022 – actualidad',
          description: 'Rescate animal, adopciones, campañas de alimento y marketing de recaudación.',
        },
        {
          name: 'Tutor independiente de inglés',
          period: '2022 – actualidad',
          description: 'Estudiantes de secundaria, compañeros universitarios y adultos.',
        },
        {
          name: 'Equipo de porrismo de la UNA',
          period: '2022 – 2024',
          description: 'Trabajo en equipo, disciplina y coordinación bajo alta presión.',
        },
      ],
      interests: [
        'Series, películas y animación',
        'Videojuegos',
        'Música',
        'Libros ilustrados',
        'Psicología, en especial sugestión e influencia',
        'Gatos',
      ],
    },
    contact: {
      channels: [
        { label: 'Correo', text: 'dajozu2513@gmail.com', href: 'mailto:dajozu2513@gmail.com' },
        {
          label: 'LinkedIn',
          text: 'david-joel-soto-zuniga-0560141b5',
          href: 'https://www.linkedin.com/in/david-joel-soto-zuniga-0560141b5',
          external: true,
        },
        { label: 'GitHub', text: 'dajozu2513', href: 'https://github.com/dajozu2513', external: true },
      ],
      cv: {
        label: 'Descargar CV (PDF, español)',
        // Set to 'cv/David_Joel_Soto_Zuniga_CV_ES.pdf' once a version without the phone number
        // is in public/cv/. While null, no download button is shown.
        file: null,
      },
    },
    footer: {
      name: 'David Joel Soto Zuniga',
      copyright: '© 2026 • Todos los derechos reservados',
    },
    robot: {
      loading: 'Cargando escena...',
      startError: 'Tu navegador no pudo iniciar el visor 3D.',
      loadError: 'No se pudo cargar la escena 3D. Revisa tu conexión y recarga la página.',
    },
  },
};
