export class DataService {
  // Datos de ejemplo; puede reemplazarse por llamadas a API en el futuro
  private static formation = [
    { title: 'PhD en Ciencias de la Computación', institution: 'Universidad X', year: 2020 },
    { title: 'Maestría en Ingeniería', institution: 'Universidad Y', year: 2016 }
  ];

  private static production = {
    software: [
      { name: 'Tool A', description: 'Herramienta para análisis', link: '#' }
    ],
    publications: [
      { title: 'Artículo 1', journal: 'Revista A', year: 2022, link: '#' }
    ],
    theses: [
      { title: 'Trabajo de grado 1', student: 'Estudiante X', year: 2021, link: '#' }
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
}
