// src/pages/Home.jsx

import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";

// Datos de ejemplo para el portafolio
const featuredProjects = [
  {
    id: 1,
    title: "Residencia Lomas",
    description: "Diseño sostenible y moderno en zona residencial.",
    imageUrl: "https://picsum.photos/id/102/400/250",
    linkUrl: "#",
  },
  {
    id: 2,
    title: "Torre Corporativa G",
    description: "Conceptualización y dirección de obra de rascacielos.",
    imageUrl: "https://picsum.photos/id/350/400/250",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Rehabilitación Histórica",
    description: "Restauración completa de edificio del siglo XIX.",
    imageUrl: "https://picsum.photos/id/1060/400/250",
    linkUrl: "#",
  },
];

function Home() {
  return (
    <div className="home-page">
      <HeroSection />

      {/* --- SECCIÓN DE PROYECTOS DESTACADOS --- */}
      <section className="featured-projects container">
        <h2>Proyectos Destacados</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              linkUrl={project.linkUrl}
            />
          ))}
        </div>
      </section>
      {/* -------------------------------------- */}

      {/* Aquí irá la sección de Servicios y Contacto Breve */}
    </div>
  );
}

export default Home;
