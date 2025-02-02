import React from 'react';
import Carousel from './carrusel';

const Curso_carrusel = ({ id, titulo, infoGeneral, procesoCompra, productos }) => {
  return (
    <section className="curso" id={id}>
      <h2 className="curso-titulo">{titulo}</h2>

      <div className="info-container">
        {/* Información General */}
        <div className="info-section">
          <h3>Información General</h3>
          <ul>
            {infoGeneral.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Proceso de Compra */}
        <div className="info-section">
          <h3>Proceso de Inscripción</h3>
          <ul>
            {procesoCompra.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Carrusel de productos */}
      <Carousel productos={productos} />
    </section>
  );
};

export default Curso_carrusel;