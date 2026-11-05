'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await createClient().auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-flex items-center gap-1.5 text-sm text-[#EFFFFA]/80 hover:text-[#EFFFFA] border border-[#4D342F] hover:border-[#4D627F] rounded px-3 py-1.5 transition-colors"
    >
      <span className="material-symbols-outlined text-[18px]">logout</span>
      Salir
    </button>
  );
}
