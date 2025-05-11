import React, { useRef } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Modelos from './components/Modelos';
import Destacados from './components/Destacados';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  // Creamos referencias para cada sección
  const inicioRef = useRef<HTMLDivElement>(null);
  const modelosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll suave a una sección
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Enviamos las funciones de scroll al Header */}
      <Header
        onInicio={() => scrollTo(inicioRef)}
        onModelos={() => scrollTo(modelosRef)}
        onContacto={() => scrollTo(contactoRef)}
      />

      {/* Secciones con sus respectivas referencias */}
      <div ref={inicioRef}>
        <Carousel />
      </div>

      <div ref={modelosRef}>
        <Modelos />
      </div>

      <Destacados />

      <main style={{ padding: '2rem' }}>
        <h2>Bienvenido a Diecast Perú</h2>
        <p>Descubre nuestros modelos a escala únicos y coleccionables.</p>
      </main>

      <div ref={contactoRef}>
        <Contacto />
      </div>

      <Footer />
    </div>
  );
}

export default App;

