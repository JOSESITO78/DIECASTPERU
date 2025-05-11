// src/components/Contacto.tsx

import React from 'react';

// Componente de la sección de contacto
const Contacto = () => {
  return (
    // Sección con fondo suave y padding
    <section style={{ backgroundColor: '#e6f2ff', padding: '2rem' }}>
      {/* Título centrado */}
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contáctanos</h2>

      {/* Contenedor del formulario con máximo ancho */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Formulario de contacto */}
        <form>
          {/* Campo Nombre */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              placeholder="Tu nombre"
            />
          </div>

          {/* Campo Correo */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              placeholder="tucorreo@example.com"
            />
          </div>

          {/* Campo Mensaje */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Botón de envío (solo decorativo, sin funcionalidad por ahora) */}
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
