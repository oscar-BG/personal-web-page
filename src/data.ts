export const technologyIcon = (fileName: string) =>
  `${import.meta.env.BASE_URL}tecnologias/${fileName}`;

export const technologies = [
  { name: "React", icon: technologyIcon("react.png") },
  { name: "TypeScript", icon: technologyIcon("typescript.png") },
  { name: "Vite", icon: technologyIcon("vite.svg.png") },
  { name: "Tailwind CSS", icon: technologyIcon("tailwind.png") },
  { name: "PHP", icon: technologyIcon("php.png") },
  { name: "Slim Framework", icon: technologyIcon("Slim.png") },
  { name: "Flutter", icon: technologyIcon("flutter.png") },
  { name: "PostgreSQL", icon: technologyIcon("Postgresql.svg") },
  { name: "MySQL", icon: technologyIcon("mysql.png") },
  { name: "Docker", icon: technologyIcon("docker.png") },
  { name: "Git", icon: technologyIcon("Git.svg.png") },
  { name: "Linux", icon: technologyIcon("linux.png") },
];

export interface Project {
  id: string;
  name: string;
  category: "Personal" | "Laboral";
  type: string;
  description: string;
  longDescription?: string;
  responsibilities?: string[];
  stack: string[];
  company?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "admincredit",
    name: "AdminCredit",
    category: "Personal",
    type: "Mobile App",
    description:
      "Aplicación móvil para la gestión de tarjetas de crédito. puedes consultar saldos, movimientos, y fechas de corte. \n Actualmente en desarrollo.",
    longDescription:
      "AdminCredit nació de la necesidad de tener un control más estricto sobre las finanzas personales, específicamente en el uso de tarjetas de crédito. La aplicación permite a los usuarios registrar sus tarjetas, registrar compras, establecer recordatorios para fechas de corte y pago, y visualizar un resumen claro de su deuda actual para evitar intereses moratorios. \n El proyecto está en desarrallo, pero se espera publicar una versión beta integrado con Firebase para las notificaciones push con el fin de ayudar a los usuarios a mantenerse al día con sus pagos y evitar cargos adicionales por intereses.",
    responsibilities: [
      "Diseño de la interfaz de usuario (UI/UX) priorizando la claridad de la información financiera.",
      "Desarrollo completo de la aplicación móvil utilizando Flutter.",
      "Implementación de base de datos local con SQLite para un funcionamiento offline rápido y seguro.",
      "Lógica de cálculo de fechas de corte e intereses simulados."
    ],
    stack: ["Flutter", "SQLite", "Dart"],
    screenshots: [
      "proyectos/credit_admin/welcome.jpeg",
      "proyectos/credit_admin/transacciones_recientes.jpeg",
      "proyectos/credit_admin/card_details.jpeg",
      "proyectos/credit_admin/Add_expense.jpeg"
    ]
  },
  {
    id: "refacciones-app",
    name: "Refacciones App",
    category: "Laboral",
    type: "Mobile App & Backend",
    description:
      "Aplicación móvil para la gestión y venta de refacciones automotrices, y busqueda de talleres mecanicos.",
    longDescription:
      "Este proyecto fue desarrollado para una empresa que buscar agilizar las ventas de refacciones  automotrices. El objetivo era digitalizar y optimizar el proceso de venta en ruta y la gestión de inventario. La solución consta de una aplicación móvil para los vendedores y una aplicación movil para los clientes.",
    responsibilities: [
      "Desarrollo de la API RESTful utilizando Slim Framework (PHP) para servir datos a la aplicación móvil.",
      "Integración y diseño de la base de datos relacional en MySQL.",
      "Desarrollo de la aplicación híbrida empleando Cordova Apache y tecnologías web (HTML/JS/CSS).",
      "Implementación de contenedorización con Docker para asegurar entornos consistentes de desarrollo y producción.",
      "Implementación de metodos de pago con Nuvei para pagos con tarjetas",
      "Logistica y consumo de la API de 99 minutos para la entrega de los productos.",
      "Integración de Google Maps para la localización de talleres mecánicos cercanos a los clientes."
    ],
    company: "Idare MX | 2022 - 2024",
    stack: ["Slim Framework", "MySQL", "Cordova Apache", "Docker", "PHP", "JavaScript"],
  },
  {
    id: "api-medica",
    name: "API Medica",
    category: "Personal",
    type: "Backend",
    description:
      "APIs RESTful para la gestión de pacientes. Construida con NestJS y MySQL, diseñada para ser escalable y fácil de mantener.",
    longDescription:
      "Este es un proyecto autodidacta centrado exclusivamente en la arquitectura backend. Su propósito fue aprender y aplicar patrones de diseño modernos, inyección de dependencias y arquitectura limpia utilizando NestJS. La API simula un entorno clínico donde se gestionan expedientes médicos, citas y doctores.",
    responsibilities: [
      "Diseño de la arquitectura del software siguiendo los principios de Clean Architecture.",
      "Desarrollo de endpoints RESTful seguros y documentados con Swagger.",
      "Implementación de validaciones, manejo de errores centralizado y guards/interceptors en NestJS.",
      "Diseño del modelo entidad-relación y gestión de migraciones en MySQL.",
      "Autenticación y autorización utilizando JWT para proteger los endpoints de la API."
    ],
    stack: ["NestJS", "TypeScript", "MySQL", "Prisma", "Swagger"],
  },
];

export const codeLines = [
  "const developer = {",
  "  name: 'Oscar Bautista',",
  "  role: 'Full Stack Developer',",
  "  location: 'Puebla, Mexico',",
  "  focus: [",
  "    'Desarrollo de Software',",
  "    'APIs RESTful',",
  "    'Experiencia de Usuario',",
  "    'Buenas Practicas'",
  "  ],",
  "  available: true",
  "}",
];
