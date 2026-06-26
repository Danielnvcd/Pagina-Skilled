export const data = {
  companyInfo: {
    history: {
      location: "Puebla",
      year: "2019",
      description: "Nacimos con el objetivo de brindar soluciones integrales en ingeniería eléctrica, uniendo la experiencia de un equipo apasionado y comprometido con la excelencia. Nuestro portafolio abarca: Proyectos llave en mano, Servicios de ingeniería SW/HW, Servicios de ingeniería eléctrica, Coordinación y supervisión de proyectos, Instalaciones eléctricas y Suministro de materiales y equipo."
    },
    mission: "Garantizar el éxito operativo de nuestros clientes a través de alta ingeniería y servicios de valor excepcional",
    vision: "Ser el referente nacional en servicios de ingeniería, reconocidos por transformar desafíos técnicos en soluciones de alta rentabilidad",
    values: [
      {
        title: "Precisión técnica",
        description: "Aplicamos rigurosidad y detalle en cada solución que ofrecemos."
      },
      {
        title: "Integridad en la seguridad",
        description: "Priorizamos la seguridad y el bienestar en todas nuestras operaciones."
      },
      {
        title: "Compromiso con la continuidad",
        description: "Aseguramos la fiabilidad y el funcionamiento constante de los sistemas."
      },
      {
        title: "Innovación aplicada",
        description: "Implementamos soluciones avanzadas para optimizar y mejorar procesos."
      },
      {
        title: "Ética y transparencia",
        description: "Conducimos nuestro negocio con honestidad y claridad en cada interacción."
      }
    ]
  },
  
  services: [
    {
      id: "SIE",
      name: "SIE Infraestructura Eléctrica",
      description: "Servicios eléctricos especializados y soluciones integrales conforme a estándares y normativas vigentes.",
      image: "/servicios/infraestructura.webp",
      highlights: [
        { title: "Personal Calificado", desc: "Equipo técnico con amplia experiencia en proyectos industriales de alta complejidad." },
        { title: "Normativas Vigentes", desc: "Servicios bajo estándares nacionales e internacionales de calidad y seguridad (NOM, NFPA, NEC)." },
        { title: "Soluciones Integrales", desc: "Del diseño hasta la puesta en marcha, cubrimos cada etapa del proyecto eléctrico." }
      ]
    },
    {
      id: "IPS",
      name: "IPS Integración de Proyectos y Servicios",
      description: "Proyectos 'Llave en Mano' integrando componentes mecánicos, eléctricos, hidráulicos y neumáticos con un ciclo completo de ejecución.",
      image: "/servicios/integracion.webp",
      pipeline: ["IDEA", "DISEÑO", "FABRICACIÓN", "TESTING", "PUESTA EN MARCHA", "ENTREGA & MANTTO."]
    },
    {
      id: "SIE_ING",
      name: "SIE Ingeniería Eléctrica",
      description: "Soluciones eléctricas industriales de media y baja tensión, fabricación de tableros y sistemas de protección.",
      image: "/servicios/ingenieria.webp",
      highlights: [
        { title: "Media y Baja Tensión", desc: "Instalaciones eléctricas especializadas para entornos industriales." },
        { title: "Iluminación Industrial", desc: "Diseño e instalación de sistemas eficientes y normados." },
        { title: "Puesta a Tierra", desc: "Protección de equipos, instalaciones y personal." },
        { title: "Tableros de Fuerza y Control", desc: "Armado y fabricación a medida para cada proceso productivo." }
      ]
    },
    {
      id: "SISH",
      name: "SISH Ingeniería SW/HW",
      description: "Diagramas eléctricos en AutoCAD/ePLAN y programación PLC en plataformas Siemens y Allen-Bradley.",
      image: "/servicios/software-hardware.webp",
      highlights: [
        { title: "AutoCAD & ePLAN", desc: "Diagramas eléctricos profesionales en plataformas líderes de la industria." },
        { title: "Siemens TIA Portal", desc: "Programación PLC para automatización de procesos industriales." },
        { title: "Allen-Bradley Studio 5000", desc: "Control y automatización para la industria automotriz y manufacturera." }
      ]
    },
    {
      id: "RVD",
      name: "RVD Redes, Voz y Datos",
      description: "Diseño e instalación de infraestructura de redes industriales para comunicación entre dispositivos productivos.",
      image: "/servicios/redes.webp",
      highlights: [
        { title: "Diseño de Red", desc: "Arquitectura y planificación de infraestructura de comunicaciones industriales." },
        { title: "Instalación", desc: "Fibra óptica, cableado ethernet estructurado y sistemas inalámbricos." },
        { title: "Integración SCADA", desc: "Conexión de PLCs, sensores y sistemas SCADA en redes productivas." }
      ],
      certification: { label: "Cert. DATWYLER Fibre-Optic", number: "MX-072400092" }
    },
    {
      id: "SMG",
      name: "SMG Suministro de Materiales en General",
      description: "Materiales, equipos, refacciones e insumos de marcas líderes del sector industrial.",
      image: "/servicios/suministro.webp",
      highlights: [
        { title: "ABB · Siemens · Eaton", desc: "Equipos y componentes de automatización industrial." },
        { title: "Phoenix Contact · Weidmüller", desc: "Conectividad y protección para instalaciones eléctricas." },
        { title: "Helukabel · LAPP Group", desc: "Cables y conductores especializados para industria." },
        { title: "Charofil · Viakon", desc: "Canalización eléctrica y conductores de cobre." }
      ]
    }
  ],

  brands: [
    { name: "Actassi", logo: "/proveedores/actassi.webp" },
    { name: "Allen-Bradley", logo: "/proveedores/ab.webp" },
    { name: "Phoenix Contact", logo: "/proveedores/phoenix.webp" },
    { name: "ABB", logo: "/proveedores/abb.webp" },
    { name: "Ascable-Recael", logo: "/proveedores/ascable.webp" },
    { name: "Siemens", logo: "/proveedores/siemens.png" },
    { name: "Eaton", logo: "/proveedores/eaton.webp" },
    { name: "Jupiter", logo: "/proveedores/jupiter.webp" },
    { name: "Orion", logo: "/proveedores/orion.webp" },
    { name: "Helukabel", logo: "/proveedores/helukabel.webp" },
    { name: "Weidmüller", logo: "/proveedores/weidmuller.png" },
    { name: "LAPP GROUP", logo: "/proveedores/lapp.webp" },
    { name: "Charofil", logo: "/proveedores/charofil.webp" },
    { name: "Viakon", logo: "/proveedores/viakon.webp" }
  ],

  clients: [
    { name: "Ford", logo: "/proveedores/ford.webp" },
    { name: "Tenneco", logo: "/proveedores/tenneco.webp" },
    { name: "Volkswagen", logo: "/proveedores/vwm.webp" },
    { name: "Daimler", logo: "/proveedores/Daimler.svg" },
    { name: "Dürr AG", logo: "/proveedores/Dürr_AG_logo.svg.png" }
  ],

  stats: {
    yearsOfOperation: { value: 6, label: "Años de operación" },
    projectsCompleted: { value: "30+", label: "Proyectos realizados" },
    industrialClients: { value: "5+", label: "Clientes industriales" },
    statesCovered: { value: 4, label: "Estados del país" }
  },

  projectsTimeline: [
    { year: 2019, clientLocation: "ASYS - TENNECO PISTONES", description: "Instalación de safety fence." },
    { year: 2019, clientLocation: "DURR - FORD CUAUTITLÁN", description: "Fabricación de tablero de fuerza y control para inyección y extracción de aire en cabina de pintura." },
    { year: 2019, clientLocation: "DURR - FORD CUAUTITLÁN", description: "Servicios de instalación eléctrica para proceso de RTO y ventilación eléctrica Refurbish." },
    { year: 2019, clientLocation: "DURR - FORD CUAUTITLÁN", description: "Servicios de rehabilitación eléctrica en CPA - New Sanding booth y ASH refurbish." },
    { year: 2020, clientLocation: "PROYSU - TENNECO PISTONES", description: "Diseño y fabricación de safety fence." },
    { year: 2020, clientLocation: "DURR - FORD CUAUTITLÁN", description: "Diseño, estudio e instalación eléctrica de sistema de iluminación proceso RTO." },
    { year: 2020, clientLocation: "TENNECO - PLANTA PISTONES", description: "Diseño y servicios de instalación para sistema biométrico de apertura de puertas." },
    { year: 2020, clientLocation: "DURR - DTNA SALTILLO", description: "Fabricación de tablero de control y fuerza para sistema de transporte y sistema Andon." },
    { year: 2020, clientLocation: "DURR - DAIMLER SALTILLO", description: "Instalación eléctrica de sistema de transporte Flat TOP." },
    { year: 2021, clientLocation: "TENNECO - PLANTA PISTONES", description: "Diseño e instalación de sistema de CCTV." },
    { year: 2021, clientLocation: "TENNECO - PLANTA PISTONES", description: "Servicio eléctrico para mejora de cabina AOL L7." },
    { year: 2021, clientLocation: "DURR - DAIMLER SALTILLO", description: "Instalación eléctrica en cabina EMU." },
    { year: 2021, clientLocation: "TENNECO - PLANTA PISTONES", description: "Retrofit a equipo prueba POF (diseño mecánico, neumático, diseño eléctrico SW/HW)." },
    { year: 2021, clientLocation: "TENNECO - PLANTA PISTONES", description: "Diseño e instalación de estación de verificación y marcadora láser en soldadura." },
    { year: 2022, clientLocation: "DURR - FCA SALTILLO", description: "Fabricación de tableros de control y fuerza para sistemas de extracción de aire Torits." },
    { year: 2022, clientLocation: "DURR - FCA COLOMBIA", description: "Rehabilitación y puesta en marcha de tableros de control y fuerza para CCM." },
    { year: 2022, clientLocation: "DURR - FCA", description: "Diseño y fabricación de tablero de control y fuerza para sistema SD03." },
    { year: 2022, clientLocation: "DURR - NISSAN AGS", description: "Diseño e instalación eléctrica para cabina de pintura BC-CC." },
    { year: 2022, clientLocation: "DURR - STELLANTIS TOLUCA", description: "Instalación eléctrica de 4 robots para aplicación de pintura TAP 1." },
    { year: 2023, clientLocation: "VWM - PLANTA PUEBLA", description: "Retrofit cabina acústica." },
    { year: 2023, clientLocation: "DURR - PLASTIC OMNIUM", description: "Servicios de instalación de robots RPL." },
    { year: 2023, clientLocation: "DURR - SALTILLO DTNA", description: "Servicios de instalación de robots PS1 L1 & L2." },
    { year: 2023, clientLocation: "DURR - SALTILLO PEMSA", description: "Actualización y migración de pupitres de control." },
    { year: 2023, clientLocation: "DURR - STELLANTIS VAN SALTILLO", description: "Instalación eléctrica de 4 robots para aplicación de pintura TAP 1." },
    { year: 2024, clientLocation: "DURR - VWM PUEBLA", description: "Instalación de cabinas de pintura N103." },
    { year: 2024, clientLocation: "DURR - VWM PUEBLA", description: "Instalación eléctrica y network N103." },
    { year: 2024, clientLocation: "DURR - STELLANTIS SALTILLO", description: "Instalación eléctrica para robot y robots de sello." },
    { year: 2024, clientLocation: "DURR - DUCATO SALTILLO", description: "Instalación eléctrica equipos rear ARMS." }
  ],

  featuredProject: {
    title: "Network Nave 103 — VWM Puebla",
    installation: [
      "Cableado panel de fibra óptica",
      "Cableado red ethernet",
      "Pantallas Andon y PCs",
      "Cámaras de emergencia y vigilancia",
      "Access point"
    ],
    electricalAndNetworkTesting: [
      "Resistencia de aislamiento",
      "Continuidad, corriente y voltaje",
      "OTDR"
    ],
    engineering: "Actualización de planos As Built para documentación completa del proyecto."
  },

  certifications: [
    {
      title: "DATWYLER — Seminar Fibre-Optic Cable Systems para instaladores",
      holder: "German Olivarez Toxqui",
      certificateNumber: "MX-072400092"
    }
  ],

  contact: {
    companyEmail: "Proyectos@skilled.mx",
    companyPhone: "222 639 07 40",
    address: "Calle Álamos No.29 Int. 5, Sanctorum Cuautlancingo, Puebla, Puebla.",
    personnel: [
      {
        name: "ING. JOEL BRAVO",
        position: "Gerente General",
        email: "joel.bravo@skilled.mx"
      },
      {
        name: "ING. MAURO MÉNDEZ",
        position: "Gerente de Proyectos",
        email: "mauro.mendez@skilled.mx"
      }
    ]
  }
};
