
export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Solutions',
      projects: 'Work',
      about: 'Profile', // Includes Education now
      contact: 'Contact',
      cta: "Book Session"
    },
    hero: {
      availability: 'Accepting High-Impact Projects',
      title1: 'Corporate-Grade',
      title2: 'Digital Strategy',
      subtitle: 'Ex-manager of global brands. Now I help companies scale revenue with precision methodology, managing billions in ad spend without the agency bureaucracy.',
      audit: 'Request Growth Audit',
      cases: 'View Track Record',
      stats: {
        stat1_label: 'Ad Spend Managed',
        stat1_sub: 'High Stakes Capable',
        stat2_label: 'Qualified Leads',
        stat2_sub: 'Pipeline Growth',
        stat3_label: 'Avg. ROAS',
        stat3_sub: 'Profitability',
        stat4_label: 'Budget Pacing',
        stat4_sub: 'Execution Accuracy'
      },
      platforms: 'Trusted by Industry Leaders'
    },
    services: {
      title: 'Strategic Architecture',
      items: [
        { 
          title: "Social Media & Branding", 
          description: "Brand authority that generates trust and sales. More than just posting, I build brand ecosystems. I align your visual identity and narrative with strategic content management, creating active communities and solid positioning that differentiates you from the competition." 
        },
        { 
          title: "Growth & Performance (Media & Analytics)", 
          description: "Scale revenue with intelligent investment. Advanced Paid Media management (Meta/Google Ads) purely ROI-oriented. I analyze real-time data to optimize every cent of your budget, ensuring your ad spend translates into tangible growth and measurable sales." 
        },
        { 
          title: "Consulting & Business Strategy", 
          description: "The brain behind the digital operation. Deep diagnosis and roadmap. I design comprehensive marketing plans aligned with your financial goals, from ecosystem audits to strategic direction (QBRs), ensuring all digital tactics row toward the same commercial goal." 
        },
        { 
          title: "Automation & Retention (Inbound)", 
          description: "Convert cold traffic into recurring customers. Systematize your sales and loyalty. I implement CRMs and automated Email Marketing flows that nurture leads while you sleep, increasing Lifetime Value (LTV) through personalized communication." 
        }
      ]
    },
    portfolio: {
      subtitle: 'Track Record',
      title: 'Performance Highlights',
      filters: { all: 'All Industries', entertainment: 'Entertainment', education: 'Education', retail: 'Retail', automotive: 'Automotive' },
      metrics: { roasLabel: 'Impact', spendLabel: 'Result' },
      cta_detail: "Discuss this Strategy via WhatsApp",
      items: [
          { 
            client: "Amazon Prime Video", 
            category: "Launch Strategy", 
            metrics: { roas: "High Impact", spend: "$1B+ COP Managed" },
            story: {
              challenge: "The Launch Challenge",
              challengeDesc: "The campaign required a flawless deployment for major production launches. The goal was to manage a massive budget injection without saturating audiences or wasting spend on low-quality impressions.",
              strategy: "The Strategy",
              strategyDesc: "We implemented a high-frequency investment strategy managing over 1,000 Million COP directly on the platform. The focus was on granular segmentation to maximize reach for specific genre demographics.",
              result: "The Outcome",
              resultDesc: "Successful execution of budget with 100% pacing accuracy, driving massive awareness for the premieres."
            },
            highlights: ["$1,000M+ COP Investment", "0% Budget Waste", "Massive Brand Lift"]
          },
          { 
            client: "Politécnico Grancolombiano (UG/PG)", 
            category: "Education Lead Gen", 
            metrics: { roas: "+Volume", spend: "14k+ Leads" },
            story: {
              challenge: "The Enrollment Gap",
              challengeDesc: "The goal was aggressive: fill seats for Undergraduate and Postgraduate programs in a highly competitive digital education market.",
              strategy: "The Strategy",
              strategyDesc: "We restructured the Meta Ads ecosystem, moving away from generic targeting to specific academic intent audiences. We optimized creatives for direct conversion.",
              result: "The Outcome",
              resultDesc: "We shattered previous records, generating over 14,000 qualified leads directly within the Meta platform, significantly lowering the Cost Per Lead (CPL)."
            },
            highlights: ["14,000+ Qualified Leads", "Undergrad & Postgrad", "CPL Optimization"]
          },
          { 
            client: "Politécnico Grancolombiano (Cont. Ed)", 
            category: "High-Ticket Courses", 
            metrics: { roas: "Niche Scale", spend: "8k+ Leads" },
            story: {
              challenge: "Niche Selling",
              challengeDesc: "Continuing education (Diplomas, Courses) requires a different approach than degree programs—it requires selling immediate value and career advancement.",
              strategy: "The Strategy",
              strategyDesc: "We deployed a specific funnel for 'Continuing Education' focusing on professional development triggers. The campaigns were segmented by specific career verticals.",
              result: "The Outcome",
              resultDesc: "We secured over 8,000 leads specifically for these programs, proving that high-volume lead generation is possible even for shorter, niche academic products."
            },
            highlights: ["8,000+ Niche Leads", "Diplomas & Courses", "High Conversion Rate"]
          },
          {
            client: "Easy - Cencosud",
            category: "Retail Strategy",
            metrics: { roas: "> 5%", spend: "Annual Plan" },
            story: {
              challenge: "Annual Planning",
              challengeDesc: "Establishing a coherent digital roadmap for a major retail player to ensure consistent profitability across diverse product categories.",
              strategy: "The Strategy",
              strategyDesc: "Created a comprehensive annual plan and digital strategy, strictly aligning budget allocation with performance KPIs to ensure efficiency.",
              result: "The Outcome",
              resultDesc: "Successfully maintained a ROAS consistently above 5% throughout the execution of the digital strategy."
            },
            highlights: ["ROAS > 5%", "Strategic Planning", "Retail Scale"]
          },
          {
            client: "Chevrolet - GM",
            category: "Automotive Lead Gen",
            metrics: { roas: "Lead Quality", spend: "2,000+ Leads" },
            story: {
              challenge: "High-Intent Acquisition",
              challengeDesc: "Driving potential car buyers through a complex funnel in a competitive automotive market.",
              strategy: "The Strategy",
              strategyDesc: "Implementation of targeted performance campaigns designed to capture high-intent users ready for test drives and quotes.",
              result: "The Outcome",
              resultDesc: "Successful acquisition of over 2,000 qualified leads, feeding the sales pipeline with high-probability prospects."
            },
            highlights: ["2,000+ Leads", "Automotive", "High Intent"]
          }
      ]
    },
    education: {
      label: "Knowledge Base",
      title: "Academic & Tech Stack",
      tabs: {
        formal: "University Degrees",
        certs: "Tech Certifications"
      },
      degrees: [
        {
          title: "Diploma in Digital Branding",
          school: "UCompensar",
          year: "2022",
          desc: "Specialization in Brand Management and Network Marketing."
        },
        {
          title: "Professional in Marketing & Advertising",
          school: "UCompensar",
          year: "2021 - 2022",
          desc: "Core strategic foundation in advertising and consumer behavior."
        },
        {
          title: "Technologist in Commercial Management",
          school: "UCompensar",
          year: "2020 - 2021",
          desc: "Focus on commercial operations and sales funnels."
        },
        {
          title: "Technician in Commercial Operations",
          school: "UCompensar",
          year: "2018 - 2020",
          desc: "Foundational operational logistics."
        }
      ],
      certs: {
        meta: "Meta Certified Media Buying Professional",
        google: "Google Ads Suite (Search, Display, Video, Apps)",
        analytics: "Google Analytics Individual Qualification",
        twitter: "Twitter Ads Specialist",
        social: "Social Media Marketing (IEP)"
      }
    },
    about: {
      label: 'Profile',
      title: 'Not just a Marketer. Your Strategic Partner.',
      p1: 'Most freelancers just push buttons. My career was forged handling the pressure and budgets of brands like Amazon Prime Video and massive educational institutions. I understand that a "like" does not pay the bills.',
      p2: 'My approach combines advertising creativity with the cold precision of data analytics to build predictable sales systems. I bridge the gap between technical execution and high-level business strategy.',
      stats: [
        { value: "$1B+", label: "Ad Spend Managed" },
        { value: "4.5x", label: "Avg. ROAS" },
        { value: "22k+", label: "Leads Generated" },
        { value: "100%", label: "Budget Accuracy" }
      ],
      resume: 'Download Professional Profile'
    },
    contact: {
      label: 'Consultation',
      title: 'Is your strategy scaling?',
      infoTitle: 'Strategic Diagnosis',
      infoDesc: 'Schedule a 15-minute session. No aggressive sales, just a clear diagnosis of your opportunities and how we can implement corporate-grade growth systems.',
      form: {
        name: 'Full Name',
        email: 'Work Email',
        subject: 'Growth Goal',
        message: 'Brief context about your current challenge...',
        btn: 'Start Conversation via WhatsApp',
        success: 'Redirecting to WhatsApp to discuss {subject}...'
      },
      labels: { email: 'Jsebastianr9518@gmail.com', phone: 'Quick Consult', location: 'Base' },
      whatsapp: 'Quick Consult via WhatsApp',
      calendar: 'Book on Calendly'
    },
    chat: {
      initial: "Hello. I am the AI assistant. I can answer questions, but for the fastest response, please contact Juan directly on WhatsApp.",
      placeholder: "Ask about strategy...",
      header: "JSR Strategic AI",
      whatsappBtn: "Chat on WhatsApp",
      error: "Connection interrupted. Please use WhatsApp.",
      thinking: "Analyzing strategy..."
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Soluciones',
      projects: 'Casos',
      about: 'Perfil', // Includes Education now
      contact: 'Contacto',
      cta: 'Agendar'
    },
    hero: {
      availability: 'Aceptando Proyectos de Alto Impacto',
      title1: 'Estrategia Digital',
      title2: 'Nivel Corporativo',
      subtitle: 'Gestión de inversión para marcas globales. Ahora ayudo a empresas a escalar sus ingresos con la misma metodología de precisión, gestionando miles de millones sin la burocracia de una agencia.',
      audit: 'Solicitar Auditoría',
      cases: 'Ver Trayectoria',
      stats: {
        stat1_label: 'Capital Gestionado',
        stat1_sub: 'Confianza Financiera',
        stat2_label: 'Leads Generados',
        stat2_sub: 'Crecimiento de Pipeline',
        stat3_label: 'ROAS Promedio',
        stat3_sub: 'Alta Rentabilidad',
        stat4_label: 'Precisión de Pacing',
        stat4_sub: 'Excelencia Operativa'
      },
      platforms: 'Experiencia con Líderes de Industria'
    },
    services: {
      title: 'Arquitectura Estratégica',
      items: [
        { 
          title: "Social Media & Branding", 
          description: "Autoridad de marca que genera confianza y ventas. Más allá de publicar posts, construyo ecosistemas de marca. Alineo tu identidad visual y narrativa con una gestión estratégica de contenidos. Creo comunidades activas y un posicionamiento sólido que te diferencia de la competencia, facilitando la decisión de compra de tu audiencia." 
        },
        { 
          title: "Growth & Performance (Central de Medios + Analítica)", 
          description: "Escala tu facturación con inversión inteligente. Gestión avanzada de Paid Media (Meta/Google Ads) orientada puramente al ROI. Analizo datos en tiempo real para optimizar cada centavo de tu presupuesto, garantizando que tu inversión publicitaria se traduzca en crecimiento tangible y ventas medibles." 
        },
        { 
          title: "Consultoría & Estrategia de Negocio", 
          description: "El cerebro detrás de la operación digital. Diagnóstico profundo y hoja de ruta. No ejecuto a ciegas; diseño planes de marketing integrales alineados con tus objetivos financieros. Desde auditorías de ecosistema hasta la dirección estratégica (QBRs), aseguro que todas las tácticas digitales remen hacia la misma meta comercial." 
        },
        { 
          title: "Automatización & Retención (Inbound)", 
          description: "Convierte el tráfico frío en clientes recurrentes. Sistematización de tus ventas y fidelización. Implemento CRMs y flujos de Email Marketing automatizados que nutren a tus leads mientras duermes. Aumento el valor de vida del cliente (LTV) creando una máquina de comunicación personalizada que perdura más allá del primer clic." 
        }
      ]
    },
    portfolio: {
      subtitle: 'Trayectoria',
      title: 'Resultados Destacados',
      filters: { all: 'Todo', entertainment: 'Entretenimiento', education: 'Educación', retail: 'Retail', automotive: 'Automotriz' },
      metrics: { roasLabel: 'Impacto', spendLabel: 'Resultado' },
      cta_detail: "Discutir Estrategia en WhatsApp",
      items: [
          { 
            client: "Amazon Prime Video", 
            category: "Estrategia de Lanzamiento", 
            metrics: { roas: "Alto Impacto", spend: "$1.000M+ COP" },
            story: {
              challenge: "El Reto del Lanzamiento",
              challengeDesc: "Se requería un despliegue impecable para el lanzamiento de nuevas producciones. El objetivo era manejar una inyección masiva de capital sin saturar audiencias ni desperdiciar presupuesto.",
              strategy: "La Estrategia",
              strategyDesc: "Implementamos una estrategia de inversión de alta frecuencia, gestionando más de 1.000 Millones de pesos directamente en plataforma. Nos enfocamos en segmentación granular por género de contenido.",
              result: "El Resultado",
              resultDesc: "Ejecución exitosa del presupuesto con un 100% de precisión en el pacing, logrando una cobertura masiva para los estrenos y dominando la cuota de atención."
            },
            highlights: ["Inversión >$1.000 Millones", "0% Desperdicio", "Cobertura Masiva"]
          },
          { 
            client: "Politécnico Grancolombiano (Pre/Pos)", 
            category: "Generación de Leads", 
            metrics: { roas: "+Volumen", spend: "14mil+ Leads" },
            story: {
              challenge: "Brecha de Matriculación",
              challengeDesc: "La meta era agresiva: llenar cupos para programas de Pregrado y Posgrado en un mercado de educación digital altamente saturado.",
              strategy: "La Estrategia",
              strategyDesc: "Reestructuramos el ecosistema de Meta Ads. Pasamos de segmentaciones genéricas a audiencias de intención académica específica, optimizando creatividades para conversión directa.",
              result: "El Resultado",
              resultDesc: "Rompimos récords anteriores, generando más de 14,000 leads cualificados directamente en la plataforma de Meta, reduciendo significativamente el Costo Por Lead (CPL)."
            },
            highlights: ["14,000+ Leads Cualificados", "Pregrado y Posgrado", "Optimización de CPL"]
          },
          { 
            client: "Politécnico Grancolombiano (Edu. Cont)", 
            category: "Cursos y Diplomados", 
            metrics: { roas: "Escala Nicho", spend: "8mil+ Leads" },
            story: {
              challenge: "Venta de Nicho",
              challengeDesc: "La educación continua (Diplomados, Cursos) requiere un enfoque diferente al pregrado: se debe vender valor inmediato y avance profesional rápido.",
              strategy: "La Estrategia",
              strategyDesc: "Desplegamos un funnel específico para 'Educación Continua' enfocado en gatillos de desarrollo profesional. Las campañas se segmentaron por verticales de carrera específicas.",
              result: "El Resultado",
              resultDesc: "Aseguramos más de 8,000 leads específicamente para estos programas, demostrando que la generación de leads de alto volumen es posible incluso para productos académicos de nicho."
            },
            highlights: ["8,000+ Leads de Nicho", "Diplomados y Cursos", "Alta Tasa de Conversión"]
          },
          {
            client: "Easy - Cencosud",
            category: "Estrategia Retail",
            metrics: { roas: "> 5%", spend: "Plan Anual" },
            story: {
              challenge: "Planeación Anual",
              challengeDesc: "Establecer una hoja de ruta digital coherente para un jugador importante del retail, asegurando rentabilidad consistente en diversas categorías de productos.",
              strategy: "La Estrategia",
              strategyDesc: "Creación del plan anual y estrategia digital, alineando estrictamente la asignación de presupuesto con KPIs de rendimiento para asegurar eficiencia.",
              result: "El Resultado",
              resultDesc: "Obtención de resultados de ROAS consistentemente por encima del 5% durante la ejecución de la estrategia digital."
            },
            highlights: ["ROAS > 5%", "Planeación Estratégica", "Escala Retail"]
          },
          {
            client: "Chevrolet - General Motors",
            category: "Automotriz Leads",
            metrics: { roas: "Calidad de Lead", spend: "2.000+ Leads" },
            story: {
              challenge: "Adquisición de Alta Intención",
              challengeDesc: "Guiar a compradores potenciales a través de un funnel complejo en un mercado automotriz competitivo.",
              strategy: "La Estrategia",
              strategyDesc: "Implementación de campañas de performance dirigidas a capturar usuarios con alta intención de compra, listos para test drives y cotizaciones.",
              result: "El Resultado",
              resultDesc: "Adquisición exitosa de más de 2,000 leads cualificados, alimentando el pipeline de ventas con prospectos de alta probabilidad."
            },
            highlights: ["2,000+ Leads", "Automotriz", "Alta Intención"]
          }
      ]
    },
    education: {
      label: "Formación",
      title: "Academia & Stack Tecnológico",
      tabs: {
        formal: "Títulos Universitarios",
        certs: "Certificaciones Técnicas"
      },
      degrees: [
        {
          title: "Diplomado en Branding Digital",
          school: "UCompensar",
          year: "2022",
          desc: "Gestión de Marca en la Red y Marketing Digital."
        },
        {
          title: "Profesional en Mercadeo y Publicidad",
          school: "UCompensar",
          year: "2021 - 2022",
          desc: "Advertising. Base estratégica de comunicación y comportamiento del consumidor."
        },
        {
          title: "Tecnólogo en Gestión Comercial",
          school: "UCompensar",
          year: "2020 - 2021",
          desc: "Enfoque en operaciones comerciales y funnels de venta."
        },
        {
          title: "Técnico en Operaciones Comerciales",
          school: "UCompensar",
          year: "2018 - 2020",
          desc: "Logística y operatividad fundamental."
        }
      ],
      certs: {
        meta: "Meta Certified Media Buying Professional",
        google: "Google Ads Suite (Search, Display, Video, Apps)",
        analytics: "Google Analytics Individual Qualification",
        twitter: "Twitter Ads Specialist",
        social: "Social Media Marketing (IEP)"
      }
    },
    about: {
      label: 'Perfil',
      title: 'Más que un Marketer. Tu Socio Estratégico.',
      p1: 'La mayoría solo sabe presionar botones. Mi experiencia gestionando más de 1.000 millones para Amazon Prime Video y volúmenes masivos para el sector educativo me ha enseñado que la precisión lo es todo.',
      p2: 'Mi enfoque combina la creatividad publicitaria con la frialdad de la analítica de datos para construir sistemas de ventas predecibles. Cierro la brecha entre la ejecución técnica y la estrategia de negocio.',
      stats: [
        { value: "$1B+", label: "Capital Gestionado" },
        { value: "4.5x", label: "ROAS Promedio" },
        { value: "22k+", label: "Leads Generados" },
        { value: "100%", label: "Precisión Pacing" }
      ],
      resume: 'Descargar Perfil Profesional'
    },
    contact: {
      label: 'Consultoría',
      title: '¿Tu estrategia está a la altura?',
      infoTitle: 'Diagnóstico Estratégico',
      infoDesc: 'Agenda una sesión rápida. Sin ventas agresivas, solo un diagnóstico claro de tus oportunidades y cómo implementar sistemas de crecimiento corporativo.',
      form: {
        name: 'Nombre Completo',
        email: 'Email Corporativo',
        subject: 'Objetivo de Crecimiento',
        message: 'Breve contexto sobre tu reto actual...',
        btn: 'Iniciar Conversación por WhatsApp',
        success: 'Redirigiendo a WhatsApp para discutir {subject}...'
      },
      labels: { email: 'Jsebastianr9518@gmail.com', phone: 'Consulta Rápida', location: 'Base' },
      whatsapp: 'Consulta rápida por WhatsApp',
      calendar: 'Agendar en Calendly'
    },
    chat: {
      initial: "Hola. Soy el asistente IA. Puedo responder dudas, pero para una respuesta inmediata, contacta a Juan directamente al WhatsApp.",
      placeholder: "Pregunta sobre mi metodología...",
      header: "JSR Strategic AI",
      whatsappBtn: "Hablar por WhatsApp",
      error: "Conexión interrumpida. Por favor usa WhatsApp.",
      thinking: "Analizando estrategia..."
    }
  }
};
