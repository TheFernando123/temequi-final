// src/components/Footer.jsx

import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <h3>TEMEQUI ARQUITECTURA</h3>
        <p>Diseño | Construcción | Consultoría</p>
        <div className="footer-links">
          {/* Estos enlaces usan el color dorado definido en index.css */}
          <a href="/aviso">Aviso Legal</a> |
          <a href="/privacidad">Política de Privacidad</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
