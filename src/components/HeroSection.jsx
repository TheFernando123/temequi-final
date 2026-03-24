// src/components/HeroSection.jsx

import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Aquí irá el texto principal */}
        <h1>Diseñando el Futuro, Construyendo Sueños.</h1>
        <p>Expertos en arquitectura residencial y diseño sostenible.</p>
        <a href="/portafolio" className="hero-cta-button">
          Ver Nuestro Portafolio
        </a>
      </div>

      {/* Esta sección es para la imagen o video de fondo */}
      <div className="hero-background-overlay"></div>
    </section>
  );
}

export default HeroSection;
