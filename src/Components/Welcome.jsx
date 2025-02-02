import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS_Components/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1 className="main-title">Bienvenidos a AcademyBEE</h1>
        <h2 className="subtitle">Educación y Capacitación para Todos</h2>
        
        <div className="description">
          <p>AcademyBEE se dedica a proporcionar educación y capacitación de alta calidad a personas de todas las edades y orígenes.</p>
          <p>Ofrecemos cursos en soldadura, matemáticas, alfabetización, siembra y agricultura, y uso de ofimática, diseñados especialmente para comunidades rurales.</p>
        </div>

        <h3 className="discover-text">¡Descubre cómo AcademyBEE puede transformar tu vida!</h3>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">13k+</span>
            <span className="stat-label">Estudiantes Capacitados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Cursos Disponibles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
        </div>

        <button 
          className="register-btn"
          onClick={handleRegisterClick}
        >
          Regístrate
        </button>
      </div>
    </section>
  );
};

export default Welcome;