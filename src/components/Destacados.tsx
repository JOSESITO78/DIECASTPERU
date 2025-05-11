// src/components/Destacados.tsx

// Importamos React para poder usar JSX
import React from 'react';

// Definimos un arreglo de productos destacados
import fokker from "../assets/fokker.jpg";
import b727 from "../assets/727.jpg";
import dc8 from "../assets/dc8.jpg";

const productos = [
  {
    nombre: "Fokker F28 Faucett",
    imagen: fokker,
    descripcion: "Modelo clásico peruano - Escala 1:100"
  },
  {
    nombre: "Boeing 727 Aeroperú",
    imagen: b727,
    descripcion: "Versión retro - Escala 1:100"
  },
  {
    nombre: "DC-8 Aeronaves del Perú",
    imagen: dc8,
    descripcion: "Edición limitada - Escala 1:100"
  }
];




// Creamos el componente
const Destacados = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      {/* Título de la sección */}
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Modelos Destacados</h2>

      {/* Contenedor de tarjetas con flexbox */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}> */}
      <div className="cards-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
        }}>
        {/* Recorremos cada producto y generamos una tarjeta */}
        {productos.map((producto, index) => (
        //   <div key={index} style={{
        //     width: '250px',
        //     border: '1px solid #ccc',
        //     borderRadius: '8px',
        //     overflow: 'hidden',
        //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        //   }}>
        <div className="card" key={index} style={{
            width: '280px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            transition: 'transform 0.2s ease',
          }}>
            {/* Imagen del producto */}
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />

            {/* Información del producto */}
            <div style={{ padding: '1rem' }}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <button style={{
                marginTop: '1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exportamos el componente
export default Destacados;
