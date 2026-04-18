import React from "react";
import ContactQR from "../components/ContactQR";

// Información de Contacto Oficial
const contactInfo = {
  email: "temequicm@gmail.com", // Actualizado al correo que me diste ayer
  address: "Estado de Tlaxcala, México",
};

function Contacto() {
  const handleFormSubmit = (e) => {
    // Usamos un pequeño delay para que Formspree alcance a capturar los datos antes de limpiar
    setTimeout(() => {
      e.target.reset();
    }, 100);
  };

  return (
    <section className="contacto-section">
      <div className="contacto-container">
        
        {/* ENCABEZADO ANIMADO */}
        <div className="header-animado">
          <h1 className="titulo-dorado">Hablemos de tu Proyecto</h1>
          <div className="linea-decorativa"></div>
          <p className="page-subtitle fade-up-1">
            Contáctanos hoy mismo para solicitar una consulta o un presupuesto
            detallado. Nuestro equipo de arquitectos te responderá a la brevedad.
          </p>
        </div>

        <div className="contact-layout fade-up-2">
          
          {/* LADO IZQUIERDO: FORMULARIO PREMIUM */}
          <div className="contact-form-section">
            <div className="formulario-tarjeta">
              <h2 className="subtitulo-contacto">Envíanos un Mensaje</h2>
              
              {/* INTEGRACIÓN DE FORMSPREE */}
              <form
                className="contact-form-premium"
                action={"https://formspree.io/f/" + import.meta.env.VITE_FORMSPREE_ID}
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="input-group">
                  <input type="text" name="nombre" placeholder="Nombre completo" required />
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <input type="email" name="email" placeholder="Correo electrónico" required />
                  </div>
                  <div className="input-group">
                    <input type="tel" name="telefono" placeholder="Tu Teléfono (Opcional)" />
                  </div>
                </div>

                {/* NUEVO CAMPO: ESTADO */}
                <div className="input-group">
                  <input type="text" name="estado" placeholder="Estado (Ej. Tlaxcala, Puebla, CDMX...)" required />
                </div>

                <div className="input-group">
                  <textarea name="mensaje" placeholder="Describe los detalles y visión de tu proyecto..." rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-button-premium">
                  Enviar Mensaje <span className="flecha">➤</span>
                </button>
              </form>
            </div>
          </div>

          {/* LADO DERECHO: INFO CLAVE Y MAPA REAL */}
          <div className="contact-info-section">
            <h2 className="subtitulo-contacto">Información Clave</h2>

            <div className="info-cards-container">
              {/* Tarjeta Email */}
              <div className="info-card-premium">
                <div className="info-icon-gold">✉️</div>
                <div className="info-text">
                  <p className="info-label">E-mail Oficial</p>
                  <a href={`mailto:${contactInfo.email}`} className="info-detail highlight">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Tarjeta Ubicación */}
              <div className="info-card-premium">
                <div className="info-icon-gold">📍</div>
                <div className="info-text">
                  <p className="info-label">Ubicación</p>
                  <p className="info-detail">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Código QR */}
            <div className="qr-container fade-up-2">
              <ContactQR />
            </div>

            {/* MAPA INTERACTIVO DE GOOGLE (Tlaxcala) */}
            <div className="map-container premium-shadow fade-up-2">
              <iframe
                title="Mapa de Tlaxcala"
                src="https://maps.google.com/maps?q=Estado%20de%20Tlaxcala,%20Mexico&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM (Exclusivos de Contacto) */}
      <style>{`
        .contacto-section {
          background-color: var(--color-beige, #F5EFE6);
          padding: 60px 20px 100px 20px;
          font-family: 'Montserrat', sans-serif;
          color: var(--color-gris, #544E4A);
          overflow: hidden;
        }
        
        .contacto-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADER ANIMADO */
        .header-animado { text-align: center; margin-bottom: 50px; animation: fadeDown 1s ease-out forwards; }
        .titulo-dorado { color: var(--color-dorado, #CBAA4E); font-weight: 700; font-size: 3rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
        .linea-decorativa { width: 80px; height: 4px; background-color: var(--color-negro, #000000); margin: 0 auto 20px auto; border-radius: 2px; }
        .page-subtitle { font-size: 1.1rem; color: var(--color-gris); max-width: 600px; margin: 0 auto; line-height: 1.6; }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
        }
        @media (min-width: 900px) {
          .contact-layout { grid-template-columns: 1.2fr 1fr; }
        }

        .subtitulo-contacto {
          color: var(--color-negro, #000000);
          font-size: 1.8rem;
          margin-bottom: 30px;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* FORMULARIO PREMIUM */
        .formulario-tarjeta {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border-top: 5px solid var(--color-dorado, #CBAA4E);
        }

        .form-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .form-row .input-group { flex: 1; min-width: 200px; }

        .input-group { margin-bottom: 25px; }
        
        .contact-form-premium input,
        .contact-form-premium textarea {
          width: 100%;
          padding: 16px 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fcfcfc;
          font-family: inherit;
          font-size: 1rem;
          color: var(--color-negro);
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .contact-form-premium input:focus,
        .contact-form-premium textarea:focus {
          outline: none;
          border-color: var(--color-dorado, #CBAA4E);
          box-shadow: 0 0 15px rgba(203, 170, 78, 0.15);
          background-color: white;
        }

        .contact-form-premium textarea { resize: vertical; }

        .submit-button-premium {
          background-color: var(--color-negro, #000000);
          color: var(--color-beige, #F5EFE6);
          padding: 18px 30px;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-button-premium:hover {
          background-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro, #000000);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(203, 170, 78, 0.3);
        }

        .flecha { transition: transform 0.3s; }
        .submit-button-premium:hover .flecha { transform: translateX(5px); }

        /* INFO CLAVE Y TARJETAS */
        .info-cards-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        .info-card-premium {
          display: flex;
          align-items: center;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.04);
          transition: transform 0.3s;
          border-left: 4px solid transparent;
        }

        .info-card-premium:hover {
          transform: translateX(10px);
          border-color: var(--color-dorado, #CBAA4E);
        }

        .info-icon-gold {
          font-size: 2rem;
          margin-right: 20px;
          background: var(--color-beige);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .info-text .info-label {
          font-weight: 700;
          color: var(--color-gris);
          margin: 0 0 5px 0;
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        .info-text .info-detail {
          font-size: 1.1rem;
          color: var(--color-negro);
          font-weight: 600;
          margin: 0;
        }
        
        .info-text .highlight {
          color: var(--color-dorado);
          text-decoration: none;
          transition: color 0.3s;
        }
        .info-text .highlight:hover { color: var(--color-negro); text-decoration: underline; }

        /* MAPA INTERACTIVO */
        .map-container {
          border-radius: 15px;
          overflow: hidden;
          margin-top: 30px;
          border: 2px solid white;
        }
        .premium-shadow { box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        .qr-container { background: white; padding: 20px; border-radius: 15px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.04); margin-bottom: 20px;}

        /* ANIMACIONES */
        .fade-up-1 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.2s forwards; }
        .fade-up-2 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.4s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}

export default Contacto;