import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

function redirectTo(request, response, pathname, search = '') {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = search;
  const redirect = NextResponse.redirect(url);
  response.cookies.getAll().forEach((c) => redirect.cookies.set(c));
  return redirect;
}

export async function middleware(request) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(list) {
          list.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  // getUser() valida el token contra Supabase (no usar getSession() aquí)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isAdminPath = path.startsWith('/admin');
  const isStudentPath = path.startsWith('/student');
  const isLogin = path === '/login';

  if (!user) {
    if (isAdminPath || isStudentPath) {
      return redirectTo(request, response, '/login', `?next=${encodeURIComponent(path)}`);
    }
    return response;
  }

  if (isAdminPath || isLogin) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    const role = profile?.role;

    if (isAdminPath && role !== 'admin') return redirectTo(request, response, '/student');
    if (isLogin) return redirectTo(request, response, role === 'admin' ? '/admin' : '/student');
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/student/:path*', '/login'],
};
