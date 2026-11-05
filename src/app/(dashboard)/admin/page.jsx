'use client';

import React, { useState } from 'react';
import LogoutButton from '@/components/LogoutButton';

export default function AdminDashboardPage() {
  // Manejo de Estados del Formulario
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRoutes, setSelectedRoutes] = useState({
    route1: false,
    route2: false,
    route3: false,
    route4: false,
  });

  const handleRouteChange = (routeKey) => {
    setSelectedRoutes((prev) => ({
      ...prev,
      [routeKey]: !prev[routeKey],
    }));
  };

  const routesList = [
    {
      id: 'route1',
      tag: 'Ruta 01',
      title: 'Ruta #1: Conversación y Fluidez Real (B1 - B2)',
      description: 'Rompiendo el hielo, Storytelling, Idioms y Slang.',
      icon: 'forum',
    },
    {
      id: 'route2',
      tag: 'Ruta 02',
      title: 'Ruta #2: Inglés Profesional / Laboral',
      description: 'Entrevistas de trabajo, Business Emails y Presentaciones de Impacto.',
      icon: 'work',
    },
    {
      id: 'route3',
      tag: 'Ruta 03',
      title: 'Ruta #3: Refuerzo Académico y Gramática Dinámica (Pre-A1 a C1)',
      description: 'Bases sólidas, Tiempos Verbales, Condicionales y Estructuras Avanzadas.',
      icon: 'auto_stories',
    },
    {
      id: 'route4',
      tag: 'Ruta 04',
      title: 'Ruta #4: Clases de Check-In Rápido',
      description: 'Revisión de Ensayos, Corrección de CV y Preparación para Exámenes (IELTS/TOEFL/FCE).',
      icon: 'flash_on',
    },
  ];

  // Función para enviar los datos al servidor y crear el usuario en Supabase
  const handleCreateUser = async (e) => {
    e.preventDefault();

    // Convertir las rutas seleccionadas en un array de números (1, 2, 3 o 4)
    const selectedRouteIds = Object.keys(selectedRoutes)
      .filter((key) => selectedRoutes[key])
      .map((key) => parseInt(key.replace('route', '')));

    try {
      const response = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          routes: selectedRouteIds,
        }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Error al registrar usuario');

      alert('¡Usuario creado y rutas asignadas con éxito en Supabase!');

      // Limpiar el formulario tras el éxito
      setFullName('');
      setEmail('');
      setPassword('');
      setSelectedRoutes({ route1: false, route2: false, route3: false, route4: false });

    } catch (error) {
      alert('Hubo un problema: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#191A1E] text-[#EFFFFA] antialiased flex flex-col">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Navegación Superior */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#191A1E] border-b border-[#4D342F]">
        <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-3" href="#">
              <span className="flex items-center justify-center w-9 h-9 rounded bg-[#2D2A35] border border-[#4D342F] text-[#EFFFFA] font-bold">
                A
              </span>
              <span className="text-xl tracking-tight text-[#EFFFFA] font-bold">
                Academia de Inglés
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <span className="text-[#4D627F] font-bold flex items-center gap-1.5 border-b-2 border-[#4D627F] py-1">
                <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                Panel Admin
              </span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2D2A35] border border-[#4D342F] text-xs text-[#EFFFFA]/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Administrador Activo</span>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="w-full pt-20 bg-[#191A1E] flex-1">
        <div className="flex flex-col w-full">
          {/* Cabecera */}
          <section className="relative w-full bg-[#2D2A35] py-12 border-b border-[#4D342F]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#191A1E] border border-[#4D342F] px-4 py-1.5 rounded-full mb-3">
                  <span className="material-symbols-outlined text-[#4D627F] text-[18px]">
                    manage_accounts
                  </span>
                  <span className="text-sm text-[#EFFFFA] tracking-wide uppercase">
                    Administración de Accesos
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl text-[#EFFFFA] font-bold tracking-tight">
                  Gestión de Usuarios y Rutas
                </h1>
                <p className="text-[#EFFFFA]/80 mt-1 max-w-2xl">
                  Registra nuevas credenciales para estudiantes y asigna sus rutas formativas correspondientes.
                </p>
              </div>
            </div>
          </section>

          {/* Formulario de Creación de Usuario */}
          <section className="w-full bg-[#191A1E] py-16 border-b border-[#4D342F]" id="crear-usuario">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <div className="bg-[#2D2A35] rounded-xl p-6 md:p-10 border border-[#4D342F] shadow-lg">
                <div className="flex items-center justify-between border-b border-[#4D342F] pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#191A1E] border border-[#4D342F] flex items-center justify-center text-[#4D627F]">
                      <span className="material-symbols-outlined text-[24px]">person_add</span>
                    </div>
                    <div>
                      <h2 className="text-xl text-[#EFFFFA] font-bold">
                        Crear Nuevo Usuario
                      </h2>
                      <p className="text-sm text-[#EFFFFA]/70">
                        Ingresa las credenciales y define las rutas autorizadas.
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-[#191A1E] border border-[#4D342F] text-xs text-[#4D627F] font-bold uppercase">
                    Paso 1: Registro
                  </span>
                </div>

                <form onSubmit={handleCreateUser} className="space-y-8">
                  {/* Campos de texto del usuario */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-[#EFFFFA] mb-1.5 font-bold" htmlFor="fullName">
                        Nombre Completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Carlos Mendoza"
                        required
                        className="w-full bg-[#191A1E] border border-[#4D342F] rounded p-3 text-[#EFFFFA] placeholder-[#EFFFFA]/40 focus:border-[#4D627F] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#EFFFFA] mb-1.5 font-bold" htmlFor="email">
                        Correo Electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="estudiante@ejemplo.com"
                        required
                        className="w-full bg-[#191A1E] border border-[#4D342F] rounded p-3 text-[#EFFFFA] placeholder-[#EFFFFA]/40 focus:border-[#4D627F] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#EFFFFA] mb-1.5 font-bold" htmlFor="password">
                        Contraseña Provisional <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full bg-[#191A1E] border border-[#4D342F] rounded p-3 text-[#EFFFFA] placeholder-[#EFFFFA]/40 focus:border-[#4D627F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Asignación de Rutas */}
                  <div className="pt-6 border-t border-[#4D342F]/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="block text-[#EFFFFA] font-bold">
                          Asignar Rutas de Aprendizaje
                        </span>
                        <p className="text-sm text-[#EFFFFA]/70">
                          Selecciona los módulos a los que el alumno tendrá acceso.
                        </p>
                      </div>
                      <span className="text-xs text-[#EFFFFA]/60 font-bold">
                        {Object.values(selectedRoutes).filter(Boolean).length} de 4 seleccionadas
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {routesList.map((route) => {
                        const isChecked = !!selectedRoutes[route.id];
                        return (
                          <label
                            key={route.id}
                            className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 cursor-pointer ${isChecked
                                ? 'bg-[#191A1E] border-[#4D627F] shadow-sm'
                                : 'bg-[#191A1E]/60 border-[#4D342F] hover:border-[#4D627F]/60'
                              }`}
                          >
                            <div className="pt-0.5">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleRouteChange(route.id)}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded-[2px] flex items-center justify-center transition-colors ${isChecked
                                    ? 'bg-[#4D627F] border border-[#4D627F] text-[#EFFFFA]'
                                    : 'bg-[#191A1E] border-[1.5px] border-[#4D342F]'
                                  }`}
                              >
                                {isChecked && (
                                  <span className="material-symbols-outlined text-[13px] font-bold">
                                    check
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-[#4D627F] font-bold uppercase tracking-wider">
                                  {route.tag}
                                </span>
                                <span className="material-symbols-outlined text-[16px] text-[#4D342F]">
                                  {route.icon}
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-[#EFFFFA] leading-tight mt-0.5">
                                {route.title}
                              </h4>
                              <p className="text-xs text-[#EFFFFA]/70 mt-1">
                                {route.description}
                              </p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Botones de Acción */}
                  <div className="pt-6 border-t border-[#4D342F] flex items-center justify-end gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4D627F] hover:bg-[#4D627F]/90 text-[#EFFFFA] font-bold px-10 py-2.5 rounded shadow-sm transition-all duration-200 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">person_add</span>
                      <span>Crear Usuario y Asignar Rutas</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}