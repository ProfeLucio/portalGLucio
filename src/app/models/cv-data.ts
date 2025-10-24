// src/app/models/cv-data.ts o similar

/** Estructura de los enlaces a redes sociales */
export interface SocialLink {
  icon: string; // Clase de icono (ej: 'fab fa-linkedin-in')
  url: string;
}

/** Estructura para un puesto de experiencia laboral */
export interface Experience {
  position: string;
  company: string;
  description: string;
  period: string; // Ej: 'March 2013 - Present'
}

/** Estructura para un título de educación */
export interface Education {
  institution: string;
  degree: string;
  area: string;
  gpa: string;
  period: string;
  duration?: string;
}

/** Estructura para una habilidad de flujo de trabajo (Workflow) */
export interface WorkflowSkill {
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 a 5, donde 5 es el nivel más alto, o como desees mapearlo
}

export interface SkillCategory {
  name: string; // Ej: 'Backend', 'Frontend'
  skills: Skill[];
}

/** Estructura para un premio o certificación */
export interface Award {
  description: string;
}

/** Estructura principal para todo el Currículum Vitae */
export interface CvData {
  // --- About ---
  firstName: string;
  lastName: string;
  photoUrl: string; // Ej: 'assets/images/foto.webp'
  address: string;
  phone: string;
  email: string;
  summary: string;
  skillCategories: SkillCategory[];
  navItems: { name: string; href: string }[];
  socialLinks: SocialLink[];

  // --- Experience ---
  experience: Experience[];
  managerjobs: Experience[];
  // --- Education ---
  education: Education[];

  // --- Skills ---
  devIcons: string[]; // Clases de icono para lenguajes/herramientas (ej: 'fab fa-html5')
  workflow: WorkflowSkill[];

  // --- Interests ---
  interestsParagraph1: string;
  interestsParagraph2: string;

  // --- Awards ---
  awards: Award[];
}
