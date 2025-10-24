import { Component } from '@angular/core';
import { CvData } from './../../models/cv-data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cvData: CvData = {
      // ----------------------------------------------------------------------
      // --- 1. Navigation (AJUSTADO) -----------------------------------------
      // ----------------------------------------------------------------------
      navItems: [
          { name: 'Datos Básicos', href: '#about' },
          { name: 'Formación', href: '#education' },
          { name: 'Directivo', href: '#managerjobs' },
          { name: 'Docencia', href: '#experience' },
          { name: '+Experiencia', href: '#experience' },
          { name: 'Producción', href: '#skills' },
          { name: 'Software', href: '#skills' },
          { name: 'Dirección Trabajos', href: '#skills' },
          { name: 'Skills', href: '#skills' },


      ],

      // ----------------------------------------------------------------------
      // --- 2. About (Datos del CVLAC) ---------------------------------------
      // ----------------------------------------------------------------------
      firstName: 'Gonzalo',
      lastName: 'Lucio',
      photoUrl: 'assets/images/foto.webp', // Mantener placeholder o reemplazar con URL real
      address: 'Buenaventura, Colombia',
      phone: 'Información no disponible',
      email: 'gonzaloandreslucio@gmail.com',
      summary: 'Ingeniero de Sistemas, Desarrollador Fullstack con experiencia en el ciclo completo de desarrollo de software, dominando la arquitectura Backend y Frontend mediante la implementación de un amplio espectro de tecnologías. Su versatilidad técnica se complementa con una sólida trayectoria en el ámbito académico: ha desempeñado roles clave como Directivo Académico y Docente en educación superior. Además, integra la investigación aplicada en áreas de sistemas y comunicaciones, destacando su capacidad de liderazgo, gestión y adaptación autodidacta a las tecnologías emergentes.',
      socialLinks: [
          { icon: 'fab fa-linkedin-in', url: 'https://co.linkedin.com/in/glucio' },
          { icon: 'fas fa-graduation-cap', url: 'https://scholar.google.com/citations?user=5EVxP38AAAAJ&hl=es' },
          { icon: 'fas fa-id-card-clip', url: 'https://orcid.org/0000-0003-4265-4558' },
          { icon: 'fas fa-globe', url: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967' },
          { icon: 'fab fa-github', url: 'https://github.com/profelucio' },
          { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@ProfeLucio' }
      ],

      skillCategories: [
      {
        name: 'Backend',
        skills: [
          { name: 'Laravel', level: 4 },
          { name: 'Yii', level: 4 },
          { name: 'C#', level: 3 },
          { name: '.NET Framework', level: 3 },
          { name: 'Loopback', level: 3 },
          { name: 'Express js', level: 3 },
          { name: 'MySQL', level: 4 },
          { name: 'SQL Server', level: 3 },
          { name: 'Postgress', level: 3 },
          { name: 'Mongo', level: 3 },
          { name: 'Redis', level: 2 },
          { name: 'Python', level: 3 },
          { name: 'PHP', level: 4 },
        ]
      },
      {
        name: 'Frontend',
        skills: [
          { name: 'Angular', level: 4 },
          { name: 'Ionic', level: 4 },
          { name: 'VUE', level: 3 },
          { name: 'HTML5 - CSS3 - JS', level: 4 },
          { name: 'Typescript *', level: 3 },
          { name: 'Bootstrap', level: 4 },
          { name: 'JQuery', level: 4 },
          { name: 'Frameworks CSS', level: 3 },
        ]
      },
      {
        name: 'Otros Lenguajes', // Categoría para C++, Node.js, Java
        skills: [
          { name: 'C++', level: 3 },
          { name: 'Node.js', level: 3 },
          { name: 'Java', level: 3 },
        ]
      }
    ],
      // ----------------------------------------------------------------------
      // --- 3. Experience (Experiencia Profesional/Administrativa) -----------
      // ----------------------------------------------------------------------
      managerjobs: [
        {
            position: 'Director Académico',
            company: 'UNIVERSIDAD DEL PACIFICO',
            description: 'Vicerector académico.',
            period: 'Julio de 2024 - Agosto de 2024'
        },
        {
            position: 'Director del Programa de Ingeniería de Sistemas',
            company: 'UNIVERSIDAD DEL PACIFICO',
            description: 'Dirección administrativa y académica del programa de Ingeniería de Sistemas.',
            period: 'Agosto de 2020 - Enero de 2023'
        },
        {
            position: 'Director Académico',
            company: 'UNIVERSIDAD DEL PACIFICO',
            description: 'Vicerector académico.',
            period: 'Diciembre de 2016 - Marzo de 2017'
        },
        {
            position: 'Director del Programa de Ingeniería de Sistemas',
            company: 'UNIVERSIDAD DEL PACIFICO',
            description: 'Dirección administrativa y académica del programa de Ingeniería de Sistemas.',
            period: 'Octubre de 2014 - Diciembre de 2016'
        },
        {
            position: 'Secretario Académico',
            company: 'UNIVERSIDAD DEL PACIFICO',
            description: 'Apoyo en la gestión académica de la universidad.',
            period: 'Enero de 2005 - Diciembre de 2009'
        },
        {
            position: 'Coordinador de Proyección Social',
            company: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA - SEDE POPAYÁN',
            description: 'Coordinación de proyectos de proyección social y extensión universitaria del programa Ingeniería de Sistemas.',
            period: 'Enero de 2002 - Mayo de 2004'
        }
      ],
      experience: [
          {
              position: 'Docente - Investigador',
              company: 'Universidad del Pacifico',
              description: 'Actividades de docencia e investigación',
              period: 'Agosto de 2020 - Diciembre de 2024'
          },
          {
              position: 'Docente Tiempo Completo',
              company: 'Universidad del Pacifico',
              description: 'Actividades de docencia y gestión curricular.',
              period: 'Noviembre de 2005 - Diciembre de 2024'
          },
          {
              position: 'Docente Hora Cátedra',
              company: 'Universidad del Valle - Sede Pacífico',
              description: 'Actividades de docencia en pregrado.',
              period: 'Agosto de 2018 - Diciembre de 2024'
          },
          {
              position: 'Docente Hora Cátedra',
              company: 'Universidad Cooperativa de Colombia - Sede Cali',
              description: 'Actividades de docencia en pregrado.',
              period: 'Julio 2013 - Diciembre de 2014'
          },
          {
              position: 'Docente Hora Cátedra',
              company: 'Universidad Cooperativa de Colombia - Sede Cali',
              description: 'Actividades de docencia en pregrado.',
              period: 'Enero 2005 - Diciembre de 2006'
          },
          {
              position: 'Docente Hora Cátedra',
              company: 'Centro Colombiano de Estudios Superiores - Cali',
              description: 'Actividades de docencia en pregrado.',
              period: 'Enero 2005 - Diciembre de 2006'
          },
          {
              position: 'Docente Hora Cátedra',
              company: 'Universidad Cooperativa de Colombia - Sede Popayán',
              description: 'Actividades de docencia en pregrado.',
              period: 'Enero 2005 - Julio de 2006'
          },
          {
              position: 'Docente Tiempo Completo',
              company: 'Universidad del Pacifico - Guapi',
              description: 'Actividades de docencia, coordinación y gestión curricular.',
              period: 'Junio de 2004 - Diciembre de 2005'
          },
          {
              position: 'Docente Tiempo Completo',
              company: 'Universidad Cooperativa de Colombia - Sede Popayán',
              description: 'Actividades de docencia en pregrado.',
              period: 'Enero 2002 - Mayo de 2005'
          },


      ],

      // ----------------------------------------------------------------------
      // --- 4. Education (Formación Académica) -------------------------------
      // ----------------------------------------------------------------------
      education: [
          {
              institution: 'CORPORACION UNIFICADA DE EDUCACION SUPERIOR CUN',
              degree: 'ESPECIALIZACIÓN EN ANALÍTICA DE DATOS',
              area: 'Análisis de la Influencia del Acompañamiento Familiar y la Escolaridad del Acudiente en las Competencias Digitales de los Estudiantes',
              gpa: 'Tesis de grado',
              period: 'Marzo de 2024 - Junio de 2025'
          },
          {
              institution: 'UNIVERSIDAD ICESI',
              degree: 'MAESTRIA EN INNOVACION EDUCATIVA',
              area: 'Gestión de emociones por medio de una aplicación móvil en estudiantes de ingeniería de sistemas',
              gpa: 'Tesis de grado',
              period: 'Julio de 2021 - Agosto de 2024'
          },
          {
              institution: 'UNIVERSIDAD MAGISTER',
              degree: 'Maestría en Administración de Empresas',
              area: 'Sistema de gestión para empresas innovadoras parquesoft Popayán',
              gpa: 'Tesis de grado',
              period: 'Marzo de 2003 - Mayo 2004'
          },
          {
              institution: 'FUNDACION UNIVERSITARIA MARIA CANO',
              degree: 'Especialización en Alta Gerencia',
              area: 'Sistemas econométricos aplicados a la gestión empresarial',
              gpa: 'Tesis de grado',
              period: 'Junio de 2002 - Enero 2003'
          },
          {
            institution: 'UNIVERSITAT OBERTA DE CATALUNYA',
            degree: 'Direccion de Sistemas de Informacion',
            area: 'Especialización en Dirección de Sistemas de Información',
            gpa: 'Becario - No Graduado',
            period: 'Enero de 2005 - Diciembre de 2006'
          },
          {
              institution: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA',
              degree: 'INGENIERIA DE SISTEMAS',
              area: 'Sistema de información bibliotecaria sobre ORACLE para la Universidad Cooperativa de Colombia Popayan',
              gpa: 'Trabajo de grado',
              period: 'Enero de 1996 - 2001'
          },

  {
    institution: 'CARNEGIE MELLON UNIVERSITY',
    degree: 'SEI-Certified PSP Developer',
    area: 'Developer / Ministerio de Tecnologías de la Información y las Comunicaciones - Colombia',
    gpa: 'Certificado',
    period: 'Mayo de 2013 - Mayo de 2014'
  },
  {
    institution: 'UNIVERSIDAD DEL PACÍFICO',
    degree: 'Diplomado en Funciones Sustantivas en la Educación Superior',
    area: 'Competencia para el Desarrollo de las Funciones Sustantivas en la Educación Superior',
    gpa: 'Aprobado',
    period: 'Enero - Febrero de 2015',
    duration: '128 horas'
  },
  {
    institution: 'UNIVERSIDAD DEL PACÍFICO',
    degree: 'Diplomado en Formación y Cualificación Docente',
    area: 'Proyecto Educativo Institucional, Evaluación de Diseños Curriculares, Programas de Curso y Autoevaluación.',
    gpa: 'Aprobado',
    period: 'Noviembre - Diciembre de 2012',
    duration: '140 horas'
  },
  {
    institution: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA',
    degree: 'Diplomado en Metodología de la Investigación',
    area: 'Metodología de La Investigación y Edición de textos académicos y científicos',
    gpa: 'Aprobado',
    period: 'Enero de 2004 - Diciembre de 2004'
  },
  {
    institution: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA',
    degree: 'Diplomado Desarrollo de Sistemas de Información',
    area: 'Desarrollo de Sistemas de Información con ORACLE',
    gpa: 'N/A',
    period: 'Enero de 2001 - Diciembre de 2001'
  }



      ],

      // ----------------------------------------------------------------------
      // --- 5. Skills (Competencias Inferred from Formación y Áreas) ---------
      // ----------------------------------------------------------------------
      devIcons: [
          'fas fa-database', // Sistemas de información (ORACLE) [cite: 663]
          'fab fa-java', // Programación Orientada a Objetos En Java [cite: 668]
          'fas fa-chart-line', // Analítica de Datos [cite: 653]
          'fas fa-project-diagram', // Gestión de proyectos
          'fas fa-code', // Desarrollo de Sistemas de Información [cite: 673]
          'fas fa-chalkboard-user', // Educación / Docencia
      ],
      workflow: [
          { description: 'Gestión de la Información [cite: 709] (Línea Activa)' },
          { description: 'Tecnología y Sociedad [cite: 710] (Línea Activa)' },
          { description: 'Dirección y Administración de Programas Académicos [cite: 691]' },
          { description: 'Analítica de Datos y Gestión Empresarial [cite: 653, 649]' }
      ],

      // ----------------------------------------------------------------------
      // --- 6. Interests (Intereses y Líneas de Investigación) ---------------
      // ----------------------------------------------------------------------
      interestsParagraph1: 'Intereses centrados en la **Tecnología y Sociedad** [cite: 710], con énfasis en el impacto de las TIC y las competencias digitales en el ámbito educativo[cite: 655].',
      interestsParagraph2: 'Enfoque en la **Gestión de la Información** [cite: 709] y la innovación para la solución de problemas en el contexto de la Ingeniería de Sistemas y la Administración de Empresas[cite: 645, 649].',

      // ----------------------------------------------------------------------
      // --- 7. Awards (Reconocimientos y Logros) -----------------------------
      // ----------------------------------------------------------------------
      awards: [
          { description: 'Productos de investigación avalados y validados para el Reconocimiento de Investigadores del SNCTel (Minciencias) [cite: 712]' },
          { description: 'Certificación **PSP Developer** (Carnegie Mellon University) [cite: 666]' },
          { description: 'Múltiples cargos de alta dirección académica (Director Académico/Vice-Rector) [cite: 691]' },
          { description: 'Diplomado en Metodología de la Investigación [cite: 678]' },
      ]
  };

  getSkillLevelCircles(level: number, maxLevel: number = 5): boolean[] {
    const circles = Array(maxLevel).fill(false); // false para círculos vacíos/grises
    for (let i = 0; i < level; i++) {
      circles[i] = true; // true para círculos llenos/blancos
    }
    return circles;
  }
}
