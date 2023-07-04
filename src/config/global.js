export default {
  global: {
    componenteFormativo:
      'Planificación y evaluación del desempeño del sistema de gestión de la energía',
    descripcionCurso:
      'La determinación de los indicadores de desempeño energético (SGEn) y las líneas de base energética (LBEn) son fundamentales porque a través de ellos se puede demostrar la mejora continua del desempeño de la organización. En este capítulo se abordan los temas para la determinación de los IDEn y las LBEn, así como su utilidad para el cálculo del desempeño energético.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación de los Indicadores de Desempeño Energético (IDEn)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Resultados de la revisión energética',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Alcance del SGEn y límites para los IDEn',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cuantificación de flujos de energía',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Variables relevantes y factores estáticos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Recopilación de datos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Establecimiento de los IDEn',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Determinación de las Líneas de Base Energéticas (LBEn)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Utilización de los IDEn y las LBEn para la gestión de la energía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguimiento de planes, objetivos y metas energéticas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mantenimiento y ajuste de los IDEn y las LBEn',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reporte del desempeño energético y del SGEn',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Determinación de la Línea de Base Energética',
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). Implementación de un Sistema de Gestión de la Energía - Guía con base en la norma ISO 50001:2018. Segunda edición. ',
      tipo: 'Documento en formato pdf',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Consumo de energía',
      significado: 'Cantidad de energía utilizada.',
    },
    {
      termino: 'Factor estático',
      significado:
        'Factor identificado que no cambia rutinariamente e impacta el desempeño energético.',
    },
    {
      termino: 'Matriz de consumos energéticos',
      significado:
        'Es una tabla con datos y gráficos que permite a la organización identificar de forma rápida los recursos energéticos que utiliza, y el consumo de energía total por cada energético. También resulta útil realizar una tabla de costos energéticos donde se visualice el peso porcentual de cada energético en los costos totales.',
    },
    {
      termino: 'Variable relevante',
      significado:
        'Factor cuantificable que cambia rutinariamente e impacta el desempeño energético.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2017). Guía Técnica Colombiana. Sistemas de gestión de la energía. Medición del desempeño energético usando líneas de base energética (LBE) e indicadores de desempeño energético (IDE). Principios generales y lineamientos.  (GTC-ISO 50006:2017).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2019). Norma Técnica Colombiana. Sistemas de gestión de la energía. Requisitos con orientación para su uso. (NTC-ISO 50001:2019).',
      link: '',
    },
    {
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). Implementación de un Sistema de Gestión de la Energía - Guía con base en la norma ISO 50001:2018. Segunda edición. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
