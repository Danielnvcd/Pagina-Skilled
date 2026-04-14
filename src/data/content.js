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
      description: "Contamos con personal altamente calificado, comprometido con las necesidades de nuestros clientes, brindando servicios eléctricos especializados y soluciones integrales conforme a estándares y normativas vigentes (Personal Calificado, Normativas Vigentes, Soluciones Integrales)."
    },
    {
      id: "IPS",
      name: "IPS Integración de Proyectos y Servicios",
      description: "Proyectos 'Llave en Mano' donde se integran diversos componentes (mecánicos, eléctricos, hidráulicos, neumáticos, etc.) para brindar soluciones completas a las necesidades de nuestros clientes. El ciclo abarca: IDEA, DISEÑO, FABRICACIÓN, TESTING, PUESTA EN MARCHA y ENTREGA & MANTENIMIENTO."
    },
    {
      id: "SIE_ING",
      name: "SIE Ingeniería Eléctrica",
      description: "Media y baja tensión, iluminación industrial, puesta a tierra y tableros de fuerza y control (armado y fabricación a medida)."
    },
    {
      id: "SISH",
      name: "SISH Ingeniería SW/HW",
      description: "Elaboración de diagramas eléctricos en AutoCAD/ePLAN y programación PLC. Desarrollo e implementación en plataformas Siemens y Allen-Bradley."
    },
    {
      id: "RVD",
      name: "RVD Redes, Voz y Datos",
      description: "Diseño e instalación de sistemas de redes para comunicación entre dispositivos productivos. Incluye Diseño de Red, Instalación (cableado estructurado, fibra óptica, ethernet, inalámbrico) e Integración (Conexión de dispositivos, sensores, PLCs y SCADA)."
    },
    {
      id: "SMG",
      name: "SMG Suministro de Materiales en General",
      description: "Suministramos materiales, equipos, refacciones e insumos de marcas líderes del sector industrial.",
      brands: [
        "Allen-Bradley", 
        "Rittal", 
        "Phoenix Contact"
      ]
    }
  ],

  brands: [
    { name: "Actassi", logo: "/proveedores/actassi.png" },
    { name: "Allen-Bradley", logo: "/proveedores/ab.png" },
    { name: "Phoenix Contact", logo: "/proveedores/phoenix.png" },
    { name: "ABB", logo: "/proveedores/abb.png" },
    { name: "Ascable-Recael", logo: "/proveedores/ascable.png" },
    { name: "Siemens", logo: "/proveedores/siemens.png" },
    { name: "Eaton", logo: "/proveedores/eaton.png" },
    { name: "Jupiter", logo: "/proveedores/jupiter.png" },
    { name: "Orion", logo: "/proveedores/orion.png" },
    { name: "Helukabel", logo: "/proveedores/helukabel.png" },
    { name: "Weidmüller", logo: "/proveedores/weidmuller.png" },
    { name: "LAPP GROUP", logo: "/proveedores/lapp.png" },
    { name: "Charofil", logo: "/proveedores/charofil.png" },
    { name: "Viakon", logo: "/proveedores/viakon.png" }
  ],

  clients: [
    { name: "Ford", logo: "/proveedores/ford.png" },
    { name: "Tenneco", logo: "/proveedores/tenneco.png" },
    { name: "Volkswagen", logo: "/proveedores/vwm.png" },
    { name: "Daimler", logo: "/proveedores/Daimler.svg" }
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
        email: "joel.bravo@skilled.mx",
        phone: "222 413 67 94"
      },
      {
        name: "ING. MAURO MÉNDEZ",
        position: "Gerente de Proyectos",
        email: "mauro.mendez@skilled.mx",
        phone: "222 705 37 13"
      }
    ]
  }
};
