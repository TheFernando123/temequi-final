// src/pages/Contacto.jsx

import React from "react";

// Información de Contacto
const contactInfo = {
  phone: "+52 1 241 158 9721",
  email: "contacto@tequimearq.com", // Email de ejemplo
  address: "Av. Principal 123, Ciudad de México, México", // Dirección de ejemplo
};

function Contacto() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Hablemos de tu Próximo Proyecto</h1>
        <p className="page-subtitle">
          Contáctanos hoy mismo para solicitar una consulta o un presupuesto
          detallado. Nuestro equipo te responderá en menos de 24 horas.
        </p>

        <div className="contact-layout">
          {/* LADO IZQUIERDO: FORMULARIO */}
          <div className="contact-form-section">
            <h2>Envíanos un Mensaje</h2>
            <form className="contact-form">
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="tel" placeholder="Teléfono" />
              <textarea
                placeholder="Describe tu proyecto..."
                rows="5"
                required
              ></textarea>
              {/* Usamos el color de acento Dorado para el botón de enviar */}
              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* LADO DERECHO: INFO CLAVE Y MAPA */}
          <div className="contact-info-section">
            <h2>Información Clave</h2>

            {/* Teléfono Destacado */}
            <div className="info-box phone-box">
              <span className="info-icon">📞</span>
              <p className="info-label">Llama Hoy Mismo</p>
              {/* Hacemos que el número sea clicable */}
              <a
                href={`tel:${contactInfo.phone.replace(/ /g, "")}`}
                className="info-detail phone-number"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="info-box">
              <span className="info-icon">✉️</span>
              <p className="info-label">E-mail</p>
              <a href={`mailto:${contactInfo.email}`} className="info-detail">
                {contactInfo.email}
              </a>
            </div>

            {/* Dirección (Mapa de Google Maps de ejemplo) */}
            <div className="info-box">
              <span className="info-icon">📍</span>
              <p className="info-label">Oficinas</p>
              <p className="info-detail">{contactInfo.address}</p>
            </div>

            {/* Mapa de Ejemplo (se ve más profesional que solo la dirección) */}
            <div className="map-placeholder">
              {/* Aquí se integraría un iframe de Google Maps si tuvieras la dirección exacta */}
              <p>Ubicación de nuestras oficinas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
