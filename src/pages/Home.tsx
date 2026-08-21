import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  DownloadOutlined,
  EyeOutlined,
  GithubOutlined,
  LinkedinOutlined
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Typewriter from "typewriter-effect";

import { technologies, projects, codeLines, certificates } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <>
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
            <a className="transition hover:text-white" href="#certificados">
              Certificados
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
          <div className={`mb-4 text-lg font-semibold text-slate-300 ${step > 0 ? "hide-cursor" : ""}`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hola, soy")
                  .callFunction(() => setStep(1))
                  .start();
              }}
              options={{
                cursor: "|",
                delay: 50,
              }}
            />
          </div>
          <h1 className={`max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl min-h-[1.2em] ${step > 1 ? "hide-cursor" : ""}`}>
            {step >= 1 && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Oscar <span class="text-blue-400">Bautista</span>')
                    .callFunction(() => setStep(2))
                    .start();
                }}
                options={{
                  cursor: "|",
                  delay: 70,
                }}
              />
            )}
          </h1>
          <h2 className={`mt-4 text-2xl font-bold text-slate-300 min-h-[1.5em] ${step > 2 ? "hide-cursor" : ""}`}>
            {step >= 2 && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Desarrollador Full Stack")
                    .callFunction(() => setStep(3))
                    .start();
                }}
                options={{
                  cursor: "|",
                  delay: 50,
                }}
              />
            )}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Desarrollador de software con 4 años de experiencia creando aplicaciones web y móviles. Me especializo en construir soluciones eficientes, escalables y fáciles de mantener utilizando tecnologías modernas.
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
          <div className="relative">
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              speed={1500}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="tech-swiper"
            >
              {technologies.map((technology) => (
                <SwiperSlide key={technology.name}>
                  <div className="rounded-lg border border-slate-700/80 bg-[#07111f] p-5 text-center shadow-lg shadow-black/10 transition-all hover:border-blue-500">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-md bg-white/5 p-2">
                      <img
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                        src={technology.icon}
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-200">
                      {technology.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section id="certificados" className="relative px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Certificados" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                className="overflow-hidden rounded-lg border border-slate-700/80 bg-[#07111f] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-500"
                key={certificate.name}
              >
                <a
                  href={certificate.image}
                  rel="noreferrer"
                  target="_blank"
                  className="block aspect-[4/3] border-b border-slate-700/80 bg-slate-950"
                >
                  <img
                    alt={`Certificado ${certificate.name}`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                    src={certificate.image}
                  />
                </a>
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {certificate.name}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={certificate.url}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm font-bold text-white transition hover:border-blue-400 hover:text-blue-300"
                    >
                      <EyeOutlined /> Ver
                    </a>
                    <a
                      download={certificate.fileName}
                      href={certificate.image}
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500"
                    >
                      <DownloadOutlined /> Descargar
                    </a>
                  </div>
                </div>
              </article>
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
                className={`rounded-lg border bg-[#07111f] p-4 shadow-xl shadow-black/20 transition hover:-translate-y-1 ${
                  project.category === "Laboral"
                    ? "border-amber-500/50 hover:border-amber-500 shadow-amber-900/10"
                    : "border-slate-700/80 hover:border-blue-500"
                }`}
                key={project.id}
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
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    project.category === "Laboral"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-500">
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
                <Link
                  to={`/proyecto/${project.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  Ver detalle <ArrowRightOutlined />
                </Link>
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
        </div>
        <p className="mt-9 text-sm text-slate-500">
          © 2026 Oscar Bautista. Todos los derechos reservados.
        </p>
      </footer>
    </>
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
