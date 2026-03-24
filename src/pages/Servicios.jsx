// src/pages/Servicios.jsx

import React from "react";

// Datos de ejemplo para los servicios
const servicesData = [
  {
    title: "Diseño Arquitectónico Residencial",
    description:
      "Creación de planos, visualizaciones 3D y conceptualización de viviendas unifamiliares y multifamiliares de alto standing.",
    icon: "🏠",
  },
  {
    title: "Arquitectura Comercial e Industrial",
    description:
      "Diseño de espacios corporativos, locales comerciales, oficinas y naves industriales con foco en la funcionalidad y eficiencia.",
    icon: "🏢",
  },
  {
    title: "Restauración y Rehabilitación Histórica",
    description:
      "Intervención en edificios patrimoniales, combinando técnicas de conservación con actualización de estructuras y sistemas.",
    icon: "🏛️",
  },
  {
    title: "Dirección y Gestión de Obra",
    description:
      "Supervisión completa del proceso constructivo, asegurando la calidad, el cumplimiento de plazos y la optimización de costes.",
    icon: "🏗️",
  },
  {
    title: "Consultoría y Eficiencia Energética",
    description:
      "Análisis de sostenibilidad, aplicación de diseño bioclimático y certificación de eficiencia energética para nuevos y viejos proyectos.",
    icon: "☀️",
  },
  {
    title: "Interiorismo y Diseño de Interiores",
    description:
      "Creación de ambientes interiores estéticos y funcionales, selección de materiales y mobiliario para espacios habitables y de trabajo.",
    icon: "🛋️",
  },
];

// Componente individual para mostrar cada servicio
const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="/contacto" className="service-cta">
      Consultar Servicio →
    </a>
  </div>
);

function Servicios() {
  return (
    <div className="services-page">
      <div className="container">
        <h1 className="page-title">Nuestros Servicios de Arquitectura</h1>
        <p className="page-subtitle">
          Ofrecemos soluciones integrales desde la conceptualización hasta la
          entrega final de la obra.
        </p>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicios;
