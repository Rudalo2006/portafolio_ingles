'use client';

import { useRef } from 'react';

// Renderiza HTML interactivo en un iframe aislado:
// - sandbox SIN allow-same-origin => el HTML no accede a cookies/sesión/localStorage del sitio
// - allow-scripts permite que los ejercicios interactivos funcionen
export default function HtmlViewer({ html, title }) {
  const frameRef = useRef(null);

  const goFullscreen = () => frameRef.current?.requestFullscreen?.();

  return (
    <div className="bg-[#2D2A35] border border-[#4D342F] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#4D342F]">
        <span className="text-sm text-[#EFFFFA]/80 truncate">{title}</span>
        <button
          onClick={goFullscreen}
          className="inline-flex items-center gap-1 text-xs text-[#EFFFFA]/80 hover:text-[#EFFFFA]"
        >
          <span className="material-symbols-outlined text-[16px]">fullscreen</span>
          Pantalla completa
        </button>
      </div>
      <iframe
        ref={frameRef}
        title={title}
        srcDoc={html}
        sandbox="allow-scripts allow-forms allow-modals"
        referrerPolicy="no-referrer"
        className="w-full bg-white"
        style={{ height: '78vh', border: 0 }}
      />
    </div>
  );
}
