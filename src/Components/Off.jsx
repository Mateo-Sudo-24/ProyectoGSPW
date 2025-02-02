import React, { useState, useEffect } from 'react';
import '../CSS_Components/Off.css'; 

const Off = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      image: '/ImagenesP/Off1.jpeg',
      title: 'Curso de Soldadura'
    },
    {
      image: '/ImagenesP/Off2.jpg',
      title: 'Curso de Matemáticas'
    },
    {
      image: '/ImagenesP/Off3.PNG',
      title: 'Curso de Alfabetización'
    },
    {
      image: '/ImagenesP/Off4.PNG',
      title: 'Curso de Siembra y Agricultura'
    },
    {
      image: '/ImagenesP/Off5.PNG',
      title: 'Curso de Uso de Ofimática'
    }
  ];

  const testimonials = [
    {
      name: 'Ana María',
      career: 'Agricultora',
      comment: 'El curso de alfabetización fue excelente. Ahora puedo leer y escribir mejor, lo que me ayuda en mi trabajo diario.'
    },
    {
      name: 'Carlos López',
      career: 'Soldador',
      comment: 'El curso de soldadura fue muy completo, pero creo que podría incluir más ejemplos prácticos.'
    },
    {
      name: 'Diana Torres',
      career: 'Agricultora',
      comment: 'El curso de siembra y agricultura me ayudó a mejorar mis técnicas de cultivo. Sin embargo, el material de estudio podría ser más interactivo.'
    },
    {
      name: 'Juan Pérez',
      career: 'Obrero',
      comment: 'El curso de matemáticas fue muy útil y bien explicado. Me gustaría que incluyeran más ejercicios prácticos.'
    },
    {
      name: 'María Sánchez',
      career: 'Agricultora',
      comment: 'El curso de gestión ambiental fue muy informativo. Me encantó la parte de estudios de caso.'
    },
    {
      name: 'Roberto Gómez',
      career: 'Electricista',
      comment: 'El curso de uso de ofimática fue muy detallado. Sin embargo, creo que el contenido podría ser más dinámico.'
    },
    {
      name: 'Valentina Ruiz',
      career: 'Diseñadora',
      comment: 'El curso de diseño arquitectónico fue increíble. Aprendí muchas técnicas nuevas.'
    },
    {
      name: 'Gabriel Mora',
      career: 'Desarrollador de Software',
      comment: 'El curso de desarrollo web fue muy completo. Me gustaría que incluyeran más proyectos prácticos.'
    },
    {
      name: 'Camila Vega',
      career: 'Geóloga',
      comment: 'El curso de geología avanzada fue muy interesante. Sin embargo, creo que podrían mejorar los recursos visuales.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === offers.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [offers.length]);

  return (
    <section className="offers-section">
      <h2 className="offers-title">Ofertas</h2>
      
      <div className="carousel-container">
        <div 
          className="carousel-track" 
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {offers.map((offer, index) => (
            <div key={index} className="carousel-slide">
              <img src={offer.image} alt={offer.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-container">
        <h3 className="testimonials-title">Lo que dicen nuestros usuarios</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-comment">{testimonial.comment}</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.career}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Off;