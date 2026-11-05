import Image from 'next/image';
import Link from 'next/link';

const PILLARS = [
  {
    icon: 'diagnostics',
    title: 'Warm-up y Repaso Activo (Diagnóstico constante)',
    text: 'Activación inmediata al inicio de cada clase para detectar vacíos, refrescar conceptos clave y afinar la espontaneidad lingüística en tiempo real.',
  },
  {
    icon: 'lightbulb',
    title: 'Explicación Conceptual Directa (Gramática sin enredos)',
    text: 'Presentación clara y concisa de reglas gramaticales y estructuras mediante fórmulas prácticas, ejemplos funcionales y sin teoría innecesaria.',
  },
  {
    icon: 'laptop_mac',
    title: 'Práctica Interactiva en Web (Producción oral y ejercicios)',
    text: 'Aplicación vivencial guiada: dinámicas de rol, ejercicios interactivos digitales y producción oral enfocada en la fijación del conocimiento.',
  },
];

const ROUTES = [
  {
    n: '01',
    icon: 'forum',
    dark: true,
    title: 'Ruta #1: Conversación y Fluidez Real (B1 - B2)',
    desc: 'Rompiendo el hielo, Storytelling, Idioms y Slang.',
    points: ['Conversación natural cotidiana', 'Reducción de pausas y bloqueos'],
  },
  {
    n: '02',
    icon: 'work',
    dark: false,
    title: 'Ruta #2: Inglés Profesional / Laboral',
    desc: 'Entrevistas de trabajo, Business Emails y Presentaciones de Impacto.',
    points: ['Comunicación corporativa clara', 'Negociación y vocabulario laboral'],
  },
  {
    n: '03',
    icon: 'auto_stories',
    dark: true,
    title: 'Ruta #3: Refuerzo Académico y Gramática Dinámica (Pre-A1 a C1)',
    desc: 'Bases sólidas, Tiempos Verbales, Condicionales y Estructuras Avanzadas.',
    points: ['Claridad conceptual absoluta', 'Corrección de vicios de redacción'],
  },
  {
    n: '04',
    icon: 'flash_on',
    dark: false,
    title: 'Ruta #4: Clases de Check-In Rápido',
    desc: 'Revisión de Ensayos, Corrección de CV y Preparación para Exámenes (IELTS/TOEFL/FCE).',
    points: ['Sesiones ágiles orientadas a metas', 'Feedback directo e inmediato'],
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#191A1E] text-[#EFFFFA]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#191A1E] border-b border-[#4D342F]">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-xl">
            <Link href="/" className="flex items-center gap-space-sm">
              <span className="relative w-9 h-9 rounded overflow-hidden bg-white border border-[#4D342F]">
                <Image
                  src="/logo.jpg"
                  alt="Logo Academia de Inglés"
                  fill
                  sizes="36px"
                  className="object-cover scale-[1.45]"
                  priority
                />
              </span>
              <span className="font-title-lg text-title-lg tracking-tight font-bold">
                Academia de Inglés
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-space-lg">
              <a href="#pilares" className="font-label-md text-label-md text-[#EFFFFA]/80 hover:text-[#EFFFFA] transition-colors">
                Metodología
              </a>
              <a href="#catalogo-rutas" className="font-label-md text-label-md text-[#EFFFFA]/80 hover:text-[#EFFFFA] transition-colors">
                Catálogo de Rutas
              </a>
            </nav>
          </div>
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-[#4D627F] hover:bg-[#4D627F]/90 font-label-md text-label-md px-space-lg py-2.5 rounded-lg transition-all duration-200 shadow-sm"
          >
            Iniciar Sesión
          </Link>
        </div>
      </header>

      <main className="w-full pt-20">
        {/* Hero */}
        <section className="w-full bg-[#2D2A35] py-space-2xl border-b border-[#4D342F]">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin text-center flex flex-col items-center gap-space-lg">
            <div className="inline-flex items-center gap-space-xs bg-[#191A1E] border border-[#4D342F] px-space-md py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[#4D627F] text-[18px]">verified</span>
              <span className="font-label-sm text-label-sm tracking-wide uppercase">
                Metodología Estructurada y Práctica
              </span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight max-w-3xl">
              Domina el Inglés Real con Gramática Dinámica
            </h1>
            <p className="font-body-lg text-body-lg text-[#EFFFFA]/90 max-w-2xl leading-relaxed">
              Clases estructuradas, interactivas y diseñadas para resultados reales. Desde refuerzo
              académico hasta fluidez conversacional.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
              <a
                href="#catalogo-rutas"
                className="inline-flex items-center justify-center gap-space-sm bg-[#4D627F] hover:bg-[#4D627F]/90 font-label-md text-label-md px-space-xl py-3.5 rounded-lg shadow-sm transition-all duration-200"
              >
                <span>Ver Catálogo de Rutas</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-space-sm hover:bg-[#4D627F]/15 border border-[#4D342F] hover:border-[#4D627F] font-label-md text-label-md px-space-xl py-3.5 rounded-lg transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Iniciar Sesión</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section id="pilares" className="scroll-mt-20 w-full py-space-2xl border-b border-[#4D342F]">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2D2A35] border border-[#4D342F] mb-space-sm">
                <span className="material-symbols-outlined text-[#4D627F] text-[16px]">menu_book</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Pilares del Aprendizaje</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold">
                Nuestra Estructura Pedagógica
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="bg-[#2D2A35] rounded-xl p-space-lg border border-[#4D342F] flex flex-col gap-space-sm shadow-md">
                  <div className="w-12 h-12 rounded bg-[#191A1E] border border-[#4D342F] flex items-center justify-center text-[#4D627F]">
                    <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#4D627F] font-bold uppercase tracking-wider">
                    Pilar 0{i + 1}
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold leading-snug">{p.title}</h3>
                  <p className="font-body-sm text-body-sm text-[#EFFFFA]/80 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catálogo de rutas */}
        <section id="catalogo-rutas" className="scroll-mt-20 w-full py-space-2xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
            <div className="flex flex-col items-start md:items-center text-left md:text-center mb-space-2xl max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2D2A35] border border-[#4D342F] mb-space-sm">
                <span className="material-symbols-outlined text-[#4D627F] text-[16px]">alt_route</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Catálogo Formativo</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold mb-space-sm">
                Rutas de Aprendizaje
              </h2>
              <p className="font-body-lg text-body-lg text-[#EFFFFA]/90 leading-relaxed">
                Programas estructurados y calibrados según tu objetivo lingüístico, diseñados para
                garantizar evolución medible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg items-stretch">
              {ROUTES.map((r) => (
                <div
                  key={r.n}
                  className="bg-[#EFFFFA] text-[#191A1E] rounded-xl p-space-lg border-2 border-[#4D342F] shadow-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <div
                        className={`w-10 h-10 rounded-lg text-[#EFFFFA] flex items-center justify-center ${
                          r.dark ? 'bg-[#191A1E]' : 'bg-[#4D342F]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[22px]">{r.icon}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border border-[#4D342F] text-[#4D342F]">
                        Ruta {r.n}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold mb-space-xs leading-snug">{r.title}</h3>
                    <p className="font-body-sm text-body-sm text-[#191A1E]/85 leading-relaxed mb-space-md">{r.desc}</p>
                    <div className="pt-space-xs border-t border-[#4D342F]/30 mb-space-lg space-y-1.5 text-xs text-[#191A1E]/90">
                      {r.points.map((pt) => (
                        <div key={pt} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-[#4D342F]">check</span>
                          {pt}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/login"
                    className="w-full py-2.5 px-space-md bg-[#4D627F] hover:bg-[#4D627F]/90 text-[#EFFFFA] font-label-md text-label-md rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Ingresar a la Ruta</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#4D342F] py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm">© 2026 Portafolio de Clases de Inglés. Acceso exclusivo.</p>
          <div className="flex items-center gap-space-md text-[#EFFFFA]/70 text-xs">
            <span className="material-symbols-outlined text-[#4D627F] text-[18px]">lock</span>
            <span>Acceso Seguro y Privado</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
