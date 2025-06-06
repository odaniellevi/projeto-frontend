'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Pintor',
    description: 'Precisando de um pintor para pintar portão na Rua da Paz, Recife.',
    price: 'R$ 200,00',
    image: '/pintor.jpg',
  },
  {
    title: 'Eletricista',
    description: 'Revisão completa da parte elétrica de um sobrado no Espinheiro.',
    price: 'R$ 300,00',
    image: '/eletricista.jpg',
  },
  {
    title: 'Salva-vidas',
    description: 'Plantão de 6h em piscina de condomínio no bairro Boa Viagem.',
    price: 'R$ 250,00',
    image: '/salva-vidas.jpg',
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = 300; 
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="sliderWrapper">
      <button className="arrow left" onClick={handlePrev}>
        <ArrowLeft />
      </button>

      <div
        className="slider"
        style={{
          transform: `translateX(${-currentIndex * slideWidth}px)`,
        }}
      >
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img src={job.image} alt={job.title} />
            <div className="slideContent">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>{job.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={handleNext}>
        <ArrowRight />
      </button>
    </div>
  );
}
