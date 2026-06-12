import { useParams, Link } from "react-router-dom";
import { ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projects } from "../data";

// Import Swiper styles (already imported in Home, but good practice to include if used directly here)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#020812] text-slate-100">
        <h1 className="text-4xl font-bold">Proyecto no encontrado</h1>
        <Link to="/" className="mt-6 text-blue-400 hover:text-blue-300">
          <ArrowLeftOutlined className="mr-2" /> Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020812] text-slate-100 pb-16">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.1),transparent_26%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#020812]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <ArrowLeftOutlined /> Volver
          </Link>
        </nav>
      </header>

      <article className="relative mx-auto max-w-4xl px-5 py-10">
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                project.category === "Laboral"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-blue-500/15 text-blue-300 border border-blue-500/20"
              }`}
            >
              {project.category}
            </span>
            <span className="text-sm font-semibold text-slate-400">
              {project.type}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            {project.name}
          </h1>
          {project.company && (
            <p className="text-lg font-medium text-slate-300">
              Desarrollado para: <span className="text-white">{project.company}</span>
            </p>
          )}
        </header>

        {/* Screenshots Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-16">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-4 shadow-2xl relative px-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-12!"
              >
                {project.screenshots.map((imgSrc, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-lg bg-black/50 border border-slate-700/50 shadow-inner">
                      <img
                        src={`${import.meta.env.BASE_URL}${imgSrc}`}
                        alt={`Captura de pantalla ${idx + 1} de ${project.name}`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )}

        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">Acerca del Proyecto</h2>
              <p className="whitespace-pre-line text-lg leading-relaxed text-slate-300">
                {project.longDescription || project.description}
              </p>
            </section>

            {project.responsibilities && (
              <section>
                <h2 className="mb-6 text-2xl font-bold text-white">Mis Responsabilidades</h2>
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircleFilled className="mt-1 text-blue-400" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-bold text-white">Tecnologías Usadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
