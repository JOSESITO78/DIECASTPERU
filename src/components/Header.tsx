// src/components/Header.tsx

import React from 'react';

// Definimos las props que recibirá el Header
type Props = {
  onInicio: () => void;
  onModelos: () => void;
  onContacto: () => void;
};

const Header = ({ onInicio, onModelos, onContacto }: Props) => {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#f2f2f2',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>Diecast Perú</h1>
      <nav>
      <ul
  style={{    display: 'flex',    flexWrap: 'wrap',    listStyle: 'none',    gap: '1rem',    margin: 0,    padding: 0  }}>
          {/* Botones que llaman a las funciones pasadas desde App */}
          <li><button onClick={onInicio} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Inicio</button></li>
          <li><button onClick={onModelos} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Modelos</button></li>
          <li><button onClick={onContacto} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Contacto</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
