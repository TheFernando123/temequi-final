// src/pages/Portafolio.jsx

import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

// --- DATOS COMPLETOS DEL PORTAFOLIO ---
const allProjects = [
  {
    id: 1,
    title: "Residencia Lomas",
    category: "Residencial",
    description: "Diseño sostenible y moderno en zona residencial.",
    imageUrl: "https://picsum.photos/id/102/400/250",
  },
  {
    id: 2,
    title: "Torre Corporativa G",
    category: "Comercial",
    description: "Conceptualización y dirección de obra de rascacielos.",
    imageUrl: "https://picsum.photos/id/350/400/250",
  },
  {
    id: 3,
    title: "Rehabilitación Histórica",
    category: "Restauración",
    description: "Restauración completa de edificio del siglo XIX.",
    imageUrl: "https://picsum.photos/id/1060/400/250",
  },
  {
    id: 4,
    title: "Viviendas Minimalistas",
    category: "Residencial",
    description: "Conjunto de viviendas de diseño minimalista y eficiente.",
    imageUrl: "https://picsum.photos/id/55/400/250",
  },
  {
    id: 5,
    title: "Centro Comercial Oasis",
    category: "Comercial",
    description: "Diseño bioclimático para un gran centro comercial.",
    imageUrl: "https://picsum.photos/id/220/400/250",
  },
  {
    id: 6,
    title: "Museo de Arte Moderno",
    category: "Cultural",
    description: "Estructura innovadora para exhibiciones temporales.",
    imageUrl: "https://picsum.photos/id/230/400/250",
  },
  {
    id: 7,
    title: "Parque Urbano Central",
    category: "Urbanismo",
    description: "Planificación y diseño de espacio público verde.",
    imageUrl: "https://picsum.photos/id/400/400/250",
  },
  {
    id: 8,
    title: "Apartamentos Loft",
    category: "Residencial",
    description: "Diseño interior industrial y espacios abiertos.",
    imageUrl: "https://picsum.photos/id/40/400/250",
  },
];

// Obtener todas las categorías únicas y añadir "Todos" al inicio
const categories = ["Todos", ...new Set(allProjects.map((p) => p.category))];

function Portafolio() {
  // Estado para saber qué filtro está activo (empezamos con 'Todos')
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Función para filtrar los proyectos
  const filteredProjects = allProjects.filter(
    (project) => activeFilter === "Todos" || project.category === activeFilter
  );

  return (
    <div className="portfolio-page">
      <div className="container">
        {/* Título principal de la página */}
        <h1 className="page-title">Nuestro Portafolio de Obras</h1>
        <p className="page-subtitle">
          Explora nuestros proyectos destacados por categoría y tipo de diseño.
        </p>

        {/* --- CONTROLES DE FILTRADO --- */}
        <div className="filter-controls">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- GRID DE PROYECTOS FILTRADOS --- */}
        <div className="project-grid full-portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              linkUrl={`/proyecto/${project.id}`} // Enlace a la página de detalle
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
