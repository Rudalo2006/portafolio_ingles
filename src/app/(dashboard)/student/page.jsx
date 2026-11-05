import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import LogoutButton from '@/components/LogoutButton';

const ROUTE_NAMES = {
  1: 'Ruta #1: Conversación y Fluidez Real (B1 - B2)',
  2: 'Ruta #2: Inglés Profesional / Laboral',
  3: 'Ruta #3: Refuerzo Académico y Gramática Dinámica (Pre-A1 a C1)',
  4: 'Ruta #4: Clases de Check-In Rápido',
};

export default async function StudentDashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single();

  // RLS: solo devuelve los accesos del propio usuario
  const { data: access, error } = await supabase
    .from('course_access')
    .select('module_id, modules ( id, route_id, title, description, is_published, lessons ( id, title, lesson_order ) )')
    .eq('user_id', user.id);

  // Agrupar módulos por ruta
  const byRoute = {};
  (access || []).forEach(({ modules: m }) => {
    if (!m || !m.is_published) return;
    m.lessons = [...(m.lessons || [])].sort((a, b) => a.lesson_order - b.lesson_order);
    (byRoute[m.route_id] ||= []).push(m);
  });
  const routeIds = Object.keys(byRoute).sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-[#191A1E] text-[#EFFFFA]">
      <header className="border-b border-[#4D342F] bg-[#191A1E]">
        <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <span className="text-xl font-bold">Academia de Inglés</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-[#EFFFFA]/80">
              {profile?.full_name || user.email}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mis clases</h1>
          <p className="text-[#EFFFFA]/70 mt-1">Módulos y lecciones asignados a tu cuenta.</p>
        </div>

        {error && (
          <p className="text-sm text-red-400">No se pudieron cargar tus módulos. Intenta recargar.</p>
        )}

        {!error && routeIds.length === 0 && (
          <div className="bg-[#2D2A35] border border-[#4D342F] rounded-xl p-8 text-[#EFFFFA]/80">
            Aún no tienes módulos asignados. Contacta a tu profesor.
          </div>
        )}

        {routeIds.map((rid) => (
          <section key={rid} className="space-y-4">
            <h2 className="text-lg font-bold text-[#4D627F] uppercase tracking-wide">
              {ROUTE_NAMES[rid] || `Ruta ${rid}`}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {byRoute[rid].map((m) => (
                <div key={m.id} className="bg-[#2D2A35] border border-[#4D342F] rounded-xl p-6">
                  <h3 className="font-bold">{m.title}</h3>
                  {m.description && (
                    <p className="text-sm text-[#EFFFFA]/70 mt-1">{m.description}</p>
                  )}
                  <ul className="mt-4 divide-y divide-[#4D342F]/40">
                    {(m.lessons || []).map((l) => (
                      <li key={l.id}>
                        <Link
                          href={`/student/lessons/${l.id}`}
                          className="flex items-center justify-between py-2.5 text-sm hover:text-[#4D627F] transition-colors"
                        >
                          <span>{l.title}</span>
                          <span className="material-symbols-outlined text-[18px]">play_circle</span>
                        </Link>
                      </li>
                    ))}
                    {(!m.lessons || m.lessons.length === 0) && (
                      <li className="py-2.5 text-sm text-[#EFFFFA]/50">Próximamente</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
