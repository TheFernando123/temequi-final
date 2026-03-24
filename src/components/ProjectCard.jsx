// src/components/ProjectCard.jsx

import React from "react";

function ProjectCard({ title, description, imageUrl, linkUrl }) {
  return (
    <div className="project-card">
      <a href={linkUrl || "#"} className="project-link">
        {/* Imagen del Proyecto */}
        <img src={imageUrl} alt={title} className="project-image" />

        {/* Título y Descripción */}
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="view-details">Ver Detalles →</span>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
