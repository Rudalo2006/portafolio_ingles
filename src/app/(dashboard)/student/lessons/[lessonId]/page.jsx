import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import HtmlViewer from '@/components/HtmlViewer';

export default async function LessonPage({ params }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  // Con la sesión del usuario: RLS solo devuelve la lección si tiene acceso al módulo
  const { data: lesson } = await supabase
    .from('lessons')
    .select('id, title, html_file_path')
    .eq('id', params.lessonId)
    .single();

  if (!lesson || !lesson.html_file_path) notFound();

  // El archivo vive en un bucket privado: se descarga en servidor con service role
  const { data: file, error } = await createAdminClient()
    .storage.from(process.env.LESSONS_BUCKET || 'lessons')
    .download(lesson.html_file_path);

  if (error || !file) notFound();
  const html = await file.text();

  return (
    <div className="min-h-screen bg-[#191A1E] text-[#EFFFFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-4">
        <Link
          href="/student"
          className="inline-flex items-center gap-1 text-sm text-[#EFFFFA]/80 hover:text-[#EFFFFA]"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Volver a mis clases
        </Link>
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
        <HtmlViewer html={html} title={lesson.title} />
      </div>
    </div>
  );
}
