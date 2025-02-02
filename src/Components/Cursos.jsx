import React from 'react';
import Header from './Header'; 
import Categoria from './Categoria'; 
import Footer from './Footer'; 
import "../CSS_Components/cursos.css"

const Cursos = () => {
  const Curso_carrusel = [
    {
      id: 'Curso1',
      titulo: 'Curso de Soldadura',
      infoGeneral: [
        'Material oficial certificado por el CEC-EPN',
        'Disponible para todos',
        'Curso práctico y teórico',
        'Certificación al finalizar',
      ],
      procesoCompra: [
        'Contacto directo',
        'Inscripción en línea',
        'Pago seguro',
        'Acceso inmediato al contenido',
      ],
      productos: [
        {
          imagen: 'llamar a imagnees',
          alt: 'Curso de Soldadura',
          titulo: 'Curso de Soldadura',
          precio: '$30',
        },
        {
          imagen: 'llamar imagenes',
          alt: 'Curso de Soldadura Avanzado',
          titulo: 'Curso de Soldadura Avanzado',
          precio: '$20',
        },
      ],
    },
    {
      id: 'tecnologia',
      titulo: 'Uso de Tecnologías',
      infoGeneral: [
        'Cursos sobre el uso de tecnologías modernas',
        'Equipos y software incluidos',
        'Disponibles para todas las carreras técnicas',
        'Certificación al finalizar',
      ],
      procesoCompra: [
        'Inscripción en línea',
        'Acceso a materiales digitales',
        'Asesoría técnica incluida',
        'Facilidades de pago',
      ],
      productos: [
        {
          imagen: '/img_cursos/tecnologia_basica.jpg',
          alt: 'Curso de Tecnología Básica',
          titulo: 'Curso de Tecnología Básica',
          precio: '$40',
        },
        {
          imagen: '/img_cursos/tecnologia_avanzada.png',
          alt: 'Curso de Tecnología Avanzada',
          titulo: 'Curso de Tecnología Avanzada',
          precio: '$12',
        },
        {
          imagen: '/img_cursos/software.png',
          alt: 'Curso de Software',
          titulo: 'Curso de Software',
          precio: '$20',
        },
      ],
    },
    {
      id: 'lenguaje',
      titulo: 'Cursos de Lenguaje',
      infoGeneral: [
        'Cursos de idiomas y comunicación',
        'Materiales interactivos',
        'Disponibles para todos los niveles',
        'Certificación al finalizar',
      ],
      procesoCompra: [
        'Inscripción en línea',
        'Acceso a materiales digitales',
        'Tutorías personalizadas',
        'Facilidades de pago',
      ],
      productos: [
        {
          imagen: '/img_cursos/ingles.png',
          alt: 'Curso de Inglés',
          titulo: 'Curso de Inglés',
          precio: '$30',
        },
        {
          imagen: '/img_cursos/espanol.png',
          alt: 'Curso de Español',
          titulo: 'Curso de Español',
          precio: '$20',
        },
        {
          imagen: '/img_cursos/frances.png',
          alt: 'Curso de Francés',
          titulo: 'Curso de Francés',
          precio: '$25',
        },
      ],
    },
    {
      id: 'alfabetizacion',
      titulo: 'Cursos de Alfabetización',
      infoGeneral: [
        'Cursos para mejorar habilidades básicas',
        'Materiales interactivos',
        'Disponibles para todos los niveles',
        'Certificación al finalizar',
      ],
      procesoCompra: [
        'Inscripción en línea',
        'Acceso a materiales digitales',
        'Tutorías personalizadas',
        'Facilidades de pago',
      ],
      productos: [
        {
          imagen: '/img_cursos/lectura.png',
          alt: 'Curso de Lectura',
          titulo: 'Curso de Lectura',
          precio: '$15',
        },
        {
          imagen: '/img_cursos/escritura.png',
          alt: 'Curso de Escritura',
          titulo: 'Curso de Escritura',
          precio: '$15',
        },
        {
          imagen: '/img_cursos/matematicas.png',
          alt: 'Curso de Matemáticas',
          titulo: 'Curso de Matemáticas',
          precio: '$20',
        },
      ],
    },
  ];

  return (
    <div>
      {Curso_carrusel.map((categoria) => (
        <Categoria key={categoria.id} {...categoria} />
      ))}
    </div>
  );
};

export default Cursos;