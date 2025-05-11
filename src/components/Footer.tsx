// src/components/Footer.tsx

import React from 'react';

// Componente de pie de página
const Footer = () => {
  return (
    // Contenedor del footer
    <footer style={{
      backgroundColor: '#333',      // Color oscuro
      color: '#fff',                // Texto blanco
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      {/* Texto central */}
      <p style={{ margin: 0 }}>
        © 2025 Diecast Perú – Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
