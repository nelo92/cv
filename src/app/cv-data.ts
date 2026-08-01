export interface Profile {
  name: string;
  title: string;
  location: string;
  pitch: string[];
  linkedin: string;
  cvFile: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  current?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export const PROFILE: Profile = {
  name: 'Manuel AUGUSTO',
  title: 'Architecte Technique',
  location: 'Île-de-France, France',
  pitch: [
    "Depuis plus de 25 ans, j'accompagne la conception, la transformation et l'évolution de systèmes d'information critiques dans les secteurs de la banque, de l'assurance, des télécommunications et des services.",
    "Mon parcours, de développeur Java/JEE à architecte en passant par des rôles de tech lead, m'a permis de développer une vision à la fois stratégique et opérationnelle des systèmes d'information. J'interviens sur les sujets d'architecture applicative, de modernisation des plateformes, de performance, de sécurité et d'industrialisation des pratiques de développement.",
    "J'apprécie particulièrement les environnements complexes où il faut concilier exigences métier, contraintes techniques et vision long terme pour construire des architectures robustes, évolutives et maintenables.",
    "Aujourd'hui, je poursuis cette démarche en explorant activement les opportunités offertes par l'intelligence artificielle, les plateformes cloud-native et Kubernetes afin d'accompagner les transformations technologiques de demain.",
  ],
  linkedin: 'https://www.linkedin.com/in/manuel-augusto-094a3230/',
  cvFile: 'CV AUGUSTO Manuel.docx',
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'Architecte technique',
    company: 'La Banque Postale Consumer Finance',
    period: 'sept. 2023 - aujourd\'hui',
    duration: '3 ans',
    current: true,
  },
  {
    role: 'Architecte logiciels',
    company: 'Bouygues Telecom',
    period: 'nov. 2022 - sept. 2023',
    duration: '11 mois',
    location: 'Meudon, Île-de-France, France',
  },
  {
    role: 'Architecte technique',
    company: 'Natixis Corporate & Investment Banking',
    period: 'nov. 2021 - juin 2022',
    duration: '8 mois',
    location: 'Paris, Île-de-France, France · Hybride',
  },
  {
    role: 'Architecte technique / Tech Lead',
    company: 'La Banque Postale Financement',
    period: 'août 2019 - oct. 2021',
    duration: '2 ans 3 mois',
    location: 'Seine-Saint-Denis, Île-de-France, France',
  },
  {
    role: 'Tech Lead',
    company: 'AccorHotels',
    period: 'déc. 2017 - août 2019',
    duration: '1 an 9 mois',
    location: 'Evry',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'Bpifrance',
    period: 'mai 2016 - déc. 2017',
    duration: '1 an 8 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'AG2R LA MONDIALE',
    period: 'sept. 2015 - avr. 2016',
    duration: '8 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'Fidelia Assistance (Groupe COVEA)',
    period: 'janv. 2015 - août 2015',
    duration: '8 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'Groupement des Mousquetaires',
    period: 'mars 2012 - juin 2014',
    duration: '2 ans 4 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'BNP Paribas Real Estate',
    period: 'mai 2011 - févr. 2012',
    duration: '10 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'Capgemini',
    period: 'nov. 2010 - avr. 2011',
    duration: '6 mois',
  },
  {
    role: 'Expert Java JEE - Tech Lead',
    company: 'BNP Paribas',
    period: 'mai 2010 - oct. 2010',
    duration: '6 mois',
  },
  {
    role: 'Développeur confirmé Java JEE',
    company: 'Groupama',
    period: 'janv. 2009 - avr. 2010',
    duration: '1 an 4 mois',
  },
  {
    role: 'Développeur confirmé Java JEE',
    company: 'Pacifica',
    period: 'mai 2008 - déc. 2008',
    duration: '8 mois',
  },
  {
    role: 'Développeur confirmé Java JEE',
    company: 'BNP Paribas',
    period: 'juil. 2006 - mai 2008',
    duration: '1 an 11 mois',
  },
  {
    role: 'Analyste Programmeur',
    company: 'ARES',
    period: 'nov. 2001 - juil. 2006',
    duration: '4 ans 9 mois',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Langages',
    icon: '💻',
    items: [
      'Java', 'TypeScript', 'JavaScript', 'XML', 'HTML/XHTML', 'CSS', 'AJAX', 'PHP', 'JSP', 'JSTL', 'C', 'C++', 'SQL/PLSQL', 'Ada', 'Assembleur', '...'
    ],
  },
  {
    category: 'Frameworks',
    icon: '🧩',
    items: [
      'Spring', 'Spring MVC', 'Spring Boot', 'Angular', 'React', 'Vue.js', 'Struts 1/2',
      'Hibernate', 'JPA', 'AspectJ (AOP)', 'Maven', 'Gradle', 'ANT', 'JUnit', 'Logback/SLF4J/Log4j', 'AXIS',
      'CXF', 'Quartz', 'Webwork',  'Bootstrap', 'Tailwind CSS', 'Material UI', 'JQuery', 'JSF (PrimeFaces, RichFaces, ICEfaces)',
      '...',
    ],
  },
  {
    category: 'Cloud & Serveurs',
    icon: '☁️',
    items: ['Kubernetes', 'Tomcat', 'JBoss', 'WebSphere', 'WebLogic', 'Apache', 'Nginx', 'IIS', 'NodeJs', '...'],
  },
  {
    category: 'Bases de données',
    icon: '🗄️',
    items: ['Oracle', 'PostgreSQL', 'DB2', 'MongoDB', 'Cassandra', 'MySQL', 'Sybase', 'HSQLDB', '...'],
  },
  {
    category: 'Outils & IDE',
    icon: '🛠️',
    items: [
      'IntelliJ', 'Eclipse', 'VS Code', 'Git', 'SVN', 'Talend (ETL)', 'Soap UI', 'TOAD' , '...'
    ],
  },
  {
    category: 'Méthodes & IA',
    icon: '🚀',
    items: ['Agile', 'Scrum', 'SAFe', 'Continue', 'Claude Code', 'OpenCode', 'Codex', 'Ollama', 'LM Studio', 'AnythingLLM', 'OpenClaw', 'Hermes', '...'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'Conservatoire National des Arts et Métiers',
    degree: "Ingénieur, Architecture Ingénierie des Systèmes et des Logiciels",
    period: '2008',
  },
  {
    school: 'IUT de Vélizy',
    degree: 'DUT Informatique, Scrum Master',
    period: '2001',
  },
  {
    school: 'Lycée Jean-Jaurès',
    degree: "Baccalauréat Scientifique (Sciences de l'Ingénieur)",
    period: '1999',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Français', level: 'Natif', proficiency: 100 },
  { name: 'Portugais', level: 'Bilingue', proficiency: 95 },
  { name: 'Espagnol', level: 'Courant', proficiency: 85 },
  { name: 'Anglais', level: 'Professionnel', proficiency: 75 },
];
