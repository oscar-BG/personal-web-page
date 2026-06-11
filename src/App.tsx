import {
  ArrowRightOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "ASP.NET",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
];

const projects = [
  {
    name: "FinanzApp",
    type: "Web App",
    description:
      "Aplicacion para gestion de finanzas personales con analisis de gastos, presupuestos y reportes.",
    stack: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Refacciones App",
    type: "Mobile API",
    description:
      "Integracion de servicios, pagos y catalogos para una aplicacion movil de venta de refacciones.",
    stack: ["PHP", "Flutter", "MySQL"],
  },
  {
    name: "Admin APIs",
    type: "Backend",
    description:
      "APIs RESTful y paneles internos para procesos operativos, mantenimiento y consultas de datos.",
    stack: ["ASP.NET", "Docker", "PostgreSQL"],
  },
];

const codeLines = [
  "const developer = {",
  "  name: 'Oscar Bautista',",
  "  role: 'Full Stack Developer',",
  "  location: 'Puebla, Mexico',",
  "  focus: [",
  "    'Desarrollo Web',",
  "    'APIs RESTful',",
  "    'Experiencia de Usuario',",
  "    'Buenas Practicas'",
  "  ],",
  "  available: true",
  "}",
];

function App() {
  return (
    <main className="min-h-screen bg-[#020812] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.1),transparent_26%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#020812]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="text-2xl font-black tracking-tight text-white">
            O<span className="text-blue-400">B</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#sobre-mi">
              Sobre mi
            </a>
            <a className="transition hover:text-white" href="#proyectos">
              Proyectos
            </a>
            <a className="transition hover:text-white" href="#tecnologias">
              Tecnologias
            </a>
            <a
              className="rounded-full border border-blue-500 px-5 py-2 text-blue-300 transition hover:bg-blue-500 hover:text-white"
              href="mailto:oscar04262000@gmail.com"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_0.95fr]"
      >
        <div>
          <p className="mb-4 text-lg font-semibold text-slate-300">Hola, soy</p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Oscar <span className="text-blue-400">Bautista</span>
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-slate-300">
            Desarrollador Full Stack
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Desarrollo aplicaciones web modernas, mantenibles y enfocadas en
            resolver necesidades reales de usuarios y clientes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500"
            >
              Ver proyectos <ArrowRightOutlined />
            </a>
            <a
              href="mailto:oscar04262000@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-6 py-3 font-bold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-700/80 bg-slate-950/55 p-6 shadow-2xl shadow-black/30">
          <div className="mb-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <pre className="overflow-x-auto text-sm leading-7 text-slate-300 sm:text-base">
            {codeLines.map((line, index) => (
              <code className="block" key={line}>
                <span className="mr-6 select-none text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    line.includes("'")
                      ? "text-lime-300"
                      : line.includes("const")
                        ? "text-fuchsia-300"
                        : "text-slate-300"
                  }
                >
                  {line}
                </span>
              </code>
            ))}
          </pre>
        </div>
      </section>

      <section id="tecnologias" className="relative border-y border-white/10 bg-slate-950/40 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Tecnologias" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {technologies.map((technology) => (
              <div
                className="rounded-lg border border-slate-700/80 bg-[#07111f] p-5 text-center shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-blue-500"
                key={technology}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-lg font-black text-blue-300">
                  {technology.slice(0, 2)}
                </div>
                <p className="text-sm font-semibold text-slate-200">{technology}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Proyectos" />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-slate-700/80 bg-[#07111f] p-4 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-500"
                key={project.name}
              >
                <div className="mb-5 aspect-video rounded-md border border-slate-700 bg-gradient-to-br from-slate-200 to-slate-400 p-3">
                  <div className="h-full rounded bg-white/80 p-3">
                    <div className="mb-3 h-3 w-2/5 rounded bg-slate-500/30" />
                    <div className="grid h-[calc(100%-1.5rem)] grid-cols-3 gap-2">
                      <span className="rounded bg-blue-500/20" />
                      <span className="rounded bg-slate-500/20" />
                      <span className="rounded bg-slate-500/20" />
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span className="rounded-md bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">
                    {project.type}
                  </span>
                </div>
                <p className="min-h-20 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200"
                  href="mailto:oscar04262000@gmail.com"
                >
                  Ver detalle <ArrowRightOutlined />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="sobre-mi" className="relative border-t border-white/10 bg-slate-950/50 px-5 py-12 text-center">
        <SectionTitle title="Sobre mi" />
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">
          Desarrollador web con experiencia en React, ASP.NET, PHP y bases de
          datos relacionales. Me gusta escribir codigo claro, construir
          interfaces utiles y mantener buenas practicas en cada entrega.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:border-blue-400 hover:text-blue-300"
            href="https://github.com/oscar-BG"
            rel="noreferrer"
            target="_blank"
          >
            <GithubOutlined />
          </a>
          <a
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:border-blue-400 hover:text-blue-300"
            href="https://linkedin.com/in/oscar-bautista-gaytan-6bb4b8240"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
          <a
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:border-blue-400 hover:text-blue-300"
            href="mailto:oscar04262000@gmail.com"
          >
            <MailOutlined />
          </a>
        </div>
        <p className="mt-9 text-sm text-slate-500">
          © 2026 Oscar Bautista. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-black text-white">{title}</h2>
      <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-blue-500" />
    </div>
  );
}

export default App;
