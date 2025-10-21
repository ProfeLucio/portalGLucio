export class DataService {
  // Datos de ejemplo; puede reemplazarse por llamadas a API en el futuro
  private static formation = [
    { title: 'PhD en Ciencias de la Computación', institution: 'Universidad X', year: 2020 },
    { title: 'Maestría en Ingeniería', institution: 'Universidad Y', year: 2016 }
  ];

  private static production = {
    software: [
      { name: 'GI2T Web', description: 'Portal de gestión e investigación (desarrollado y mantenido en GI2T)', link: 'https://gi2t.org', source: 'GI2T' },
      { name: 'Aplicación móvil — Gestión de emociones', description: 'Aplicación desarrollada como parte de la Maestría en Innovación Educativa (tesis 2024). Implementación móvil para apoyar competencias socioemocionales.', link: '#', source: 'CvLAC' },
      { name: 'Sistema de gestión — ParqueSoft Popayán', description: 'Sistema de gestión para empresas innovadoras (proyecto/tesis, 2005)', link: '#', source: 'CvLAC' }
    ],
    publications: [
      // Items y categorías detectadas en CvLAC; algunos títulos exactos no están expuestos en la página pública y se listan como entrada verificable
      { title: 'Actas: I Congreso Suroccidental de Open Source y Software Libre (organizador / contribución)', venue: 'I Congreso Suroccidental de Open Source y Software Libre', year: 2004, type: 'Congreso / Documento de trabajo', link: '#', source: 'CvLAC' },
      { title: 'Comunicación: Simposio Internacional Virtual. Tecnología, Desarrollo Económico y Sociedad', venue: 'Simposio', year: 2020, type: 'Conferencia / Comunicación', link: '#', source: 'CvLAC' },
      { title: 'Divulgación: Desarrollos web y divulgación pública de la ciencia (GI2T)', venue: 'Portal / Divulgación', year: 2020, type: 'Divulgación / Portal', link: 'https://gi2t.org/publicaciones', source: 'GI2T' },
      { title: 'Libro de formación (temas de software libre / Open Source)', venue: 'Libro de formación', year: 2005, type: 'Libro', link: '#', source: 'CvLAC' }
    ],
    theses: [
      { title: 'Gestión de emociones por medio de una aplicación móvil en estudiantes de Ingeniería de Sistemas', author: 'Gonzalo Andrés Lucio López', degree: 'Maestría en Innovación Educativa', institution: 'Universidad ICESI', year: 2024, link: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967', source: 'CvLAC' },
      { title: 'Sistema de gestión para empresas innovadoras (ParqueSoft Popayán)', author: 'Gonzalo Andrés Lucio López / equipo', degree: 'Proyecto / Tesis', institution: 'Universidad (registro 2005)', year: 2005, link: '#', source: 'CvLAC' }
    ],
    technicalReports: [
      { title: 'Informes técnicos y consultorías (varios)', description: 'Informes técnicos y consultorías registrados en CvLAC. Revisar CvLAC para detalles y enlaces PDF.', year: null, link: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967', source: 'CvLAC' }
    ]
  };

  private static courses = [
    {
      code: 'CS101',
      name: 'Introducción a la Programación',
      semester: '2025-2',
      planner: 'Planificador y cronograma',
      contents: ['Variables', 'Estructuras de control', 'Funciones'],
      resources: [
        { name: 'Syllabus', link: '#' },
        { name: 'Repositorio', link: '#' }
      ]
    }
  ];

  static getFormation() { return this.formation; }
  static getProduction() { return this.production; }
  static getCourses() { return this.courses; }
  static getResume() {
    return {
      name: 'Gonzalo Andrés',
      surname: 'Lucio López',
      address: 'Buenaventura, Valle del Cauca, Colombia',
      phone: '',
      email: 'glucio@unipacifico.edu.co',
      summary: 'Profesor e investigador con experiencia en desarrollo de software y proyectos académicos. Interesado en investigación aplicada, docencia y dirección de trabajos de grado.',
      image: 'https://gi2t.org/assets/images/inv5.webp',
      social: [
        { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/glucio/' },
        { icon: 'fas fa-id-badge', link: 'https://orcid.org/0000-0003-4265-4558' },
        { icon: 'fas fa-file-alt', link: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967' },
        { icon: 'fas fa-graduation-cap', link: 'https://scholar.google.com/citations?user=5EVxP38AAAAJ&hl=es' }
      ],
      experience: [
        { title: 'Desarrollador Web Senior', company: 'Intelitec Solutions', period: 'Marzo 2013 - Presente', description: 'Lidero estrategias para asegurar resultados sostenibles y mejoras continuas en productos web.' },
        { title: 'Desarrollador Web', company: 'Intelitec Solutions', period: 'Diciembre 2011 - Marzo 2013', description: 'Implementé soluciones front-end y optimicé flujos de trabajo para productos digitales.' }
      ],
      education: [
        { institution: 'University of Colorado Boulder', degree: 'Licenciatura en Ciencias', details: 'Computación - Especialización en Desarrollo Web', period: 'Agosto 2006 - Mayo 2010' }
      ],
      skills: ['fab fa-html5','fab fa-css3-alt','fab fa-js-square','fab fa-angular','fab fa-react'],
      interests: 'Disfruto actividades al aire libre como esquí, ciclismo de montaña y kayak. También sigo series de ciencia ficción y me gusta la cocina.',
      awards: ['Google Analytics Certified Developer','Especialista en Web Móvil - Certificación Google']
    };
  }
}
