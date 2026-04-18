// src/components/HeroSection.jsx

import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Aquí irá el texto principal */}
        <h1>Materializa tus sueños.</h1>
        <p>Expertos en arquitectura habitacional, residencial y comercial.</p>
        <a href="/portafolio" className="hero-cta-button">
          Servicios
        </a>
      </div>

      {/* Esta sección es para la imagen o video de fondo */}
      <div className="hero-background-overlay"></div>
    </section>
  );
}

export default HeroSection;
