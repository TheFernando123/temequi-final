import React from "react";

function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        {/* Columna 1: Marca y Eslogan */}
        <div className="footer-brand">
          <h3 className="footer-title">TEMEQUI</h3>
          <p className="footer-subtitle">ARQUITECTURA</p>
          <p className="footer-desc">
            Diseñando el Futuro, Construyendo Sueños. Expertos en arquitectura
            habitacional, residencial y comercial.
          </p>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div className="footer-links-col">
          <h4>Explorar</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/portafolio">Portafolio</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto y Redes */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Estado de Tlaxcala, México</p>
          <p>
            ✉️ <a href="mailto:temequicm@gmail.com">temequicm@gmail.com</a>
          </p>

          {/* NUEVA SECCIÓN DE INSTAGRAM */}
          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/temequi.arq?igsh=MXQwcGxzOHdhanF4MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-instagram"
            >
              <span className="icono-ig">📸</span> Síguenos en Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="/aviso">Aviso Legal</a>
          <span className="separador">|</span>
          <a href="/privacidad">Política de Privacidad</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Temequi Arquitectura. Todos los
          derechos reservados.
        </p>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM */}
      <style>{`
        .footer-premium {
          background-color: var(--color-negro, #000000);
          color: var(--color-beige, #F5EFE6);
          font-family: 'Montserrat', sans-serif;
          padding: 70px 20px 20px 20px;
          border-top: 4px solid var(--color-dorado, #CBAA4E);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
          margin-bottom: 50px;
        }

        /* COLUMNA MARCA */
        .footer-title {
          color: var(--color-dorado, #CBAA4E);
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 2px;
        }

        .footer-subtitle {
          color: var(--color-beige, #F5EFE6);
          font-size: 1.2rem;
          letter-spacing: 5px;
          margin: 0 0 20px 0;
          font-weight: 300;
        }

        .footer-desc {
          color: #a0a0a0;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 300px;
        }

        /* TÍTULOS DE COLUMNAS */
        .footer-premium h4 {
          color: var(--color-dorado, #CBAA4E);
          font-size: 1.3rem;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        /* ENLACES */
        .footer-links-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-links-col li { margin-bottom: 15px; }

        .footer-links-col a, .footer-contact a {
          color: #a0a0a0;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
          font-size: 1rem;
          display: inline-block;
        }

        .footer-links-col a:hover, .footer-contact a:hover {
          color: var(--color-dorado, #CBAA4E);
          transform: translateX(5px);
        }

        /* CONTACTO Y REDES */
        .footer-contact p {
          color: #a0a0a0;
          margin-bottom: 15px;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .redes-sociales {
          margin-top: 25px;
        }

        .btn-instagram {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: white !important;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .btn-instagram:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 20px rgba(220, 39, 67, 0.4);
        }

        .icono-ig { font-size: 1.2rem; }

        /* BARRA INFERIOR */
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(203, 170, 78, 0.3);
          padding-top: 25px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-legal a {
          color: var(--color-dorado, #CBAA4E);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .footer-legal a:hover { color: var(--color-beige, #F5EFE6); }
        .separador { color: #555; margin: 0 15px; }
        
        .copyright { color: #777; font-size: 0.9rem; margin: 0; }

        @media (max-width: 768px) {
          .footer-container { text-align: center; }
          .footer-desc { margin: 0 auto; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .footer-contact p { justify-content: center; }
          .redes-sociales { display: flex; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
