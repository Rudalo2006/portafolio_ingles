-- Políticas RLS para la academia. Ejecutar en el SQL Editor de Supabase.
-- Esquema real: profiles(id,email,full_name,role user_role,created_at); modules(id uuid,route_id,title,slug,description,is_published);
--   lessons(id,module_id,lesson_order,title,slug,html_file_path); course_access(id,user_id,module_id,granted_at)

alter table profiles      enable row level security;
alter table modules       enable row level security;
alter table lessons       enable row level security;
alter table course_access enable row level security;

-- Función auxiliar (security definer evita recursión de RLS sobre profiles)
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

-- profiles: cada quien ve su fila; el admin ve todas
drop policy if exists "profiles_select_own_or_admin" on profiles;
create policy "profiles_select_own_or_admin" on profiles
  for select using (id = auth.uid() or public.is_admin());

-- course_access: el alumno ve solo sus accesos; el admin gestiona todo
drop policy if exists "access_select_own_or_admin" on course_access;
create policy "access_select_own_or_admin" on course_access
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "access_admin_write" on course_access;
create policy "access_admin_write" on course_access
  for all using (public.is_admin()) with check (public.is_admin());

-- modules: visibles solo si el alumno tiene acceso
drop policy if exists "modules_select_with_access" on modules;
create policy "modules_select_with_access" on modules
  for select using (
    public.is_admin()
    or (modules.is_published
        and exists (select 1 from course_access ca
                    where ca.module_id = modules.id and ca.user_id = auth.uid()))
  );

-- lessons: visibles solo si tiene acceso al módulo
drop policy if exists "lessons_select_with_access" on lessons;
create policy "lessons_select_with_access" on lessons
  for select using (
    public.is_admin()
    or exists (select 1 from course_access ca
               join modules m on m.id = ca.module_id
               where ca.module_id = lessons.module_id and ca.user_id = auth.uid()
                 and m.is_published)
  );

-- Escritura de modules/lessons: solo admin
drop policy if exists "modules_admin_write" on modules;
create policy "modules_admin_write" on modules
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "lessons_admin_write" on lessons;
create policy "lessons_admin_write" on lessons
  for all using (public.is_admin()) with check (public.is_admin());

-- Storage: crea un bucket PRIVADO llamado "lessons" (Storage > New bucket, Public = off).
-- html_file_path = ruta del archivo dentro del bucket (ej. ruta-3/cimientos-a1/clase-01.html).
-- No hace falta policy para alumnos: el servidor descarga con service role
-- solo después de verificar el acceso vía RLS.
