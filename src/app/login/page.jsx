'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = createClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError('Correo o contraseña incorrectos.');
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single();

    // Respeta ?next= solo si es una ruta interna
    const next = new URLSearchParams(window.location.search).get('next');
    const safeNext = next && next.startsWith('/') && !next.startsWith('//') ? next : null;

    router.push(safeNext || (profile?.role === 'admin' ? '/admin' : '/student'));
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#191A1E] text-[#EFFFFA] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#2D2A35] border border-[#4D342F] rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/logo.jpg"
            alt="Logo Academia"
            width={40}
            height={40}
            className="w-10 h-10 rounded object-cover border border-[#4D342F]"
            priority
          />
          <div>
            <h1 className="text-xl font-bold">Portal de acceso</h1>
            <p className="text-sm text-[#EFFFFA]/70">Acceso a la plataforma</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1.5 font-bold">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#191A1E] border border-[#4D342F] rounded p-3 placeholder-[#EFFFFA]/40 focus:border-[#4D627F] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1.5 font-bold">Contraseña</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#191A1E] border border-[#4D342F] rounded p-3 placeholder-[#EFFFFA]/40 focus:border-[#4D627F] focus:outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4D627F] hover:bg-[#4D627F]/90 disabled:opacity-60 text-[#EFFFFA] font-bold py-2.5 rounded transition-colors"
          >
            {loading ? 'Ingresando…' : 'Ingresar'}
          </button>
        </form>

        <p className="text-xs text-[#EFFFFA]/50 mt-6">
          Las cuentas las crea el profesor. Si no tienes acceso, escríbele directamente.
        </p>
      </div>
    </div>
  );
}
