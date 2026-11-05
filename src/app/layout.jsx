import './globals.css';

export const metadata = {
  title: 'Academia de Inglés',
  description: 'Plataforma y gestión de rutas formativas de inglés',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Source+Sans+3:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#191A1E] font-body-md text-body-md text-[#EFFFFA] antialiased">
        {children}
      </body>
    </html>
  );
}

