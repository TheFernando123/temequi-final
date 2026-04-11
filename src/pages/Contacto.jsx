// src/pages/Contacto.jsx

import React from "react";
import ContactQR from "../components/ContactQR";

// Información de Contacto
const contactInfo = {
  phone: "+52 1 241 158 9721",
  email: "contacto@tequimearq.com",
  address: "Av. Principal 123, Ciudad de México, México",
};

function Contacto() {
  const handleFormSubmit = (e) => {
    // Usamos un pequeño delay para que Formspree alcance a capturar los datos antes de limpiar
    setTimeout(() => {
      e.target.reset();
    }, 100);
  };
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
            {/* INTEGRACIÓN DE FORMSPREE AQUÍ */}
            <form
              className="contact-form"
              action="https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
              <input type="tel" name="telefono" placeholder="Teléfono" />
              <textarea
                name="mensaje"
                placeholder="Describe tu proyecto..."
                rows="5"
                required
              ></textarea>

              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* LADO DERECHO: INFO CLAVE Y MAPA */}
          <div className="contact-info-section">
            <h2>Información Clave</h2>

            <div className="info-box phone-box">
              <span className="info-icon">📞</span>
              <p className="info-label">Llama Hoy Mismo</p>
              <a
                href={`tel:${contactInfo.phone.replace(/ /g, "")}`}
                className="info-detail phone-number"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="info-box">
              <span className="info-icon">✉️</span>
              <p className="info-label">E-mail</p>
              <a href={`mailto:${contactInfo.email}`} className="info-detail">
                {contactInfo.email}
              </a>
            </div>

            <div className="info-box">
              <span className="info-icon">📍</span>
              <p className="info-label">Oficinas</p>
              <p className="info-detail">{contactInfo.address}</p>
            </div>

            <ContactQR />

            <div className="map-placeholder">
              <p>Ubicación de nuestras oficinas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
