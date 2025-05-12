import React, { useState } from 'react';

import b737 from '../assets/boeing737.jpg';
import dhc8 from '../assets/dash8.jpg';
import tristar from '../assets/tristar.jpg';
import fokker from '../assets/fokker.jpg';
import b727 from '../assets/727.jpg';
import dc8 from '../assets/dc8.jpg';

const modelos = [
  {
    nombre: "Boeing 737 Aeroperú",
    imagen: b737,
    descripcion: "Un clásico nacional - Escala 1:100",
    precio: "S/ 160"
  },
  {
    nombre: "DHC-8 LCP",
    imagen: dhc8,
    descripcion: "Modelo turbohélice - Escala 1:100",
    precio: "S/ 145"
  },
  {
    nombre: "Lockheed Tristar Faucett",
    imagen: tristar,
    descripcion: "Edición especial retro - Escala 1:100",
    precio: "S/ 180"
  },
  {
    nombre: "Fokker F28 Faucett",
    imagen: fokker,
    descripcion: "Modelo clásico peruano - Escala 1:100",
    precio: "S/ 150"
  },
  {
    nombre: "Boeing 727 Aeroperú",
    imagen: b727,
    descripcion: "Versión retro - Escala 1:100",
    precio: "S/ 155"
  },
  {
    nombre: "DC-8 Aeronaves del Perú",
    imagen: dc8,
    descripcion: "Edición limitada - Escala 1:100",
    precio: "S/ 170"
  }
];

const Modelos = () => {
  // Estado para controlar si el modal está abierto
  const [modalAbierto, setModalAbierto] = useState(false);

  // Estado para guardar el modelo actual
  const [modeloSeleccionado, setModeloSeleccionado] = useState<typeof modelos[0] | null>(null);

  // Función que abre el modal y guarda el modelo
  const abrirModal = (modelo: typeof modelos[0]) => {
    setModeloSeleccionado(modelo);
    setModalAbierto(true);
  };

  // Función que cierra el modal
  const cerrarModal = () => {
    setModalAbierto(false);
    setModeloSeleccionado(null);
  };

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fdfdfd' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestros Modelos</h2>

      {/* Tarjetas */}


      {/* <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}> */}

        {/* <div className="cards-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
        }}> */}

    <div
        className="cards-container"
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
    }}
>


        {modelos.map((modelo, index) => (
        //   <div key={index} style={{
        //     width: '250px',
        //     border: '1px solid #ddd',
        //     borderRadius: '8px',
        //     overflow: 'hidden',
        //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
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


            <img src={modelo.imagen} alt={modelo.nombre} style={{ width: '100%' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{modelo.nombre}</h3>
              <p>{modelo.descripcion}</p>
              <p style={{ fontWeight: 'bold' }}>{modelo.precio}</p>
              {/* Botón que abre el modal */}
              <button
                onClick={() => abrirModal(modelo)}
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal flotante */}
      {modalAbierto && modeloSeleccionado && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <h3>{modeloSeleccionado.nombre}</h3>
            <img src={modeloSeleccionado.imagen} alt={modeloSeleccionado.nombre} style={{ width: '100%', marginBottom: '1rem' }} />
            <p>{modeloSeleccionado.descripcion}</p>
            <p style={{ fontWeight: 'bold' }}>{modeloSeleccionado.precio}</p>
            {/* Botón para cerrar el modal */}
            <button
              onClick={cerrarModal}
              style={{
                marginTop: '1rem',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Modelos;
