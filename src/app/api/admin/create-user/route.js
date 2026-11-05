import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request) {
  // 0. Solo un admin autenticado puede usar este endpoint
  const supabase = createClient();
  const {
    data: { user: caller },
  } = await supabase.auth.getUser();

  if (!caller) {
    return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
  }

  const { data: callerProfile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', caller.id)
    .single();

  if (callerProfile?.role !== 'admin') {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 403 });
  }

  const supabaseAdmin = createAdminClient();
  let newUserId = null;

  try {
    const { fullName, email, password, routes } = await request.json();

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: 'Faltan datos obligatorios (email, password, nombre).' },
        { status: 400 }
      );
    }
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña provisional debe tener al menos 8 caracteres.' },
        { status: 400 }
      );
    }

    // 1. Usuario en auth.users (sin confirmación de correo)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (authError) throw authError;
    newUserId = authData.user.id;

    // 2. Perfil (rol forzado a student)
    const { error: profileError } = await supabaseAdmin.from('profiles').insert([
      { id: newUserId, email, full_name: fullName, role: 'student' },
    ]);
    if (profileError) throw profileError;

    // 3. Accesos a módulos según las rutas elegidas
    if (Array.isArray(routes) && routes.length > 0) {
      const { data: modules, error: modulesError } = await supabaseAdmin
        .from('modules')
        .select('id')
        .in('route_id', routes);
      if (modulesError) throw modulesError;

      if (modules?.length) {
        const { error: accessError } = await supabaseAdmin
          .from('course_access')
          .insert(modules.map((m) => ({ user_id: newUserId, module_id: m.id })));
        if (accessError) throw accessError;
      }
    }

    return NextResponse.json({ success: true, userId: newUserId }, { status: 201 });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    // Rollback: no dejar un usuario de Auth huérfano sin perfil/accesos
    if (newUserId) await supabaseAdmin.auth.admin.deleteUser(newUserId);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
