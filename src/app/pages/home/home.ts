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
          { name: 'Directivo', href: '#experience' },
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
      address: 'Colombia · Nacionalidad Colombiana [cite: 639]',
      phone: 'Información no disponible', // No se encuentra en el extracto
      email: 'contacto@dominio.com', // Placeholder
      summary: 'Ingeniero de Sistemas [cite: 661] con amplia trayectoria académica y administrativa, enfocado en el área de Ciencias de la Computación, Ingeniería de Sistemas y Comunicaciones[cite: 700]. Posee grados de Maestría en Innovación Educativa [cite: 645] y Administración de Empresas [cite: 649], y una Especialización en Analítica de Datos[cite: 653]. Experiencia en docencia en instituciones como la Universidad del Pacífico [cite: 683, 685, 687, 689] y la Universidad del Valle[cite: 680].',
      socialLinks: [
          { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/gonzalolucio' }, // Placeholder para LinkedIn [cite: 634]
          { icon: 'fas fa-graduation-cap', url: 'https://scholar.google.com/citations?user=...' }, // Placeholder para Google Scholar [cite: 633]
          { icon: 'fas fa-id-card-clip', url: 'https://orcid.org/0000-000X-XXXX-XXXX' }, // Placeholder para ORCID [cite: 642]
          { icon: 'fas fa-globe', url: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967#' }, // Enlace al CVLAC
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
          { name: 'C++', level: 2 },
          { name: 'Node.js', level: 3 },
          { name: 'Java', level: 3 },
        ]
      }
    ],
      // ----------------------------------------------------------------------
      // --- 3. Experience (Experiencia Profesional/Administrativa) -----------
      // ----------------------------------------------------------------------
      experience: [
          {
              position: 'Docente Investigador',
              company: 'Universidad del Valle Sede Buenaventura',
              description: 'Actividades de docencia e investigación con dedicación de 8 horas Semanales[cite: 681].',
              period: 'Agosto de 2018 - Actual [cite: 681]'
          },
          {
              position: 'Director Académico (Vice-rector)',
              company: 'UNIVERSIDAD DEL PACIFICO',
              description: 'Dirección administrativa y académica[cite: 691].',
              period: 'Diciembre de 2016 - Marzo de 2017 [cite: 691]'
          },
          {
              position: 'Director del Programa (Administrativo)',
              company: 'UNIVERSIDAD DEL PACIFICO',
              description: 'Cargo administrativo [cite: 691] con dedicación de 40 a 48 horas semanales[cite: 685, 687].',
              period: 'Octubre de 2014 - Diciembre de 2016 [cite: 691]'
          },
          {
              position: 'Secretario Académico',
              company: 'UNIVERSIDAD DEL PACIFICO',
              description: 'Cargo de apoyo administrativo en la universidad[cite: 692].',
              period: 'Enero de 2009 - Diciembre de 2010 [cite: 692]'
          }
      ],

      // ----------------------------------------------------------------------
      // --- 4. Education (Formación Académica) -------------------------------
      // ----------------------------------------------------------------------
      education: [
          {
              institution: 'CORPORACION UNIFICADA DE EDUCACION SUPERIOR CUN',
              degree: 'ESPECIALIZACIÓN EN ANALÍTICA DE DATOS',
              area: 'Análisis de la Influencia del Acompañamiento Familiar y la Escolaridad del Acudiente en las Competencias Digitales de los Estudiantes',
              gpa: 'Trabajo de grado',
              period: 'Marzo de 2024 - Junio de 2025'
          },
          {
              institution: 'UNIVERSIDAD ICESI',
              degree: 'MAESTRIA EN INNOVACION EDUCATIVA',
              area: 'GESTIÓN DE EMOCIONES POR MEDIO DE UNA APLICACIÓN MOVIL EN ESTUDIANTES DE INGENIERÍA DE SISTEMAS',
              gpa: 'Tesis de grado',
              period: 'Julio de 2021 - Agosto de 2024'
          },
          {
              institution: 'Universidad Magister',
              degree: 'Maestría en Administración de Empresas',
              area: 'Sistema de gestión para empresas innovadoras parquesoft Popayán',
              gpa: 'Trabajo de grado',
              period: 'Enero de 2003 - 2005'
          },
          {
              institution: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA',
              degree: 'INGENIERIA DE SISTEMAS',
              area: 'Sistema de información bibliotecaria sobre ORACLE para la Universidad Cooperativa de Colombia Popayan',
              gpa: 'Trabajo de grado',
              period: 'Enero de 1996 - 2001'
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
