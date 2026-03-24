// src/components/Header.jsx

import React, { useState } from "react";
// IMPORTACIÓN DEL LOGO (Verifica la ruta si la carpeta assets está en otro lugar)
import LogoImage from "../assets/LOGO TRANSPARENTE.png";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* 1. Logo (Ahora imagen) */}
        <div className="logo">
          <a href="/">
            <img
              src={LogoImage}
              alt="Logo Tequime Arquitectura"
              className="header-logo-img"
            />
          </a>
        </div>

        {/* 2. Menú de Navegación Completo (Menú + CTA) */}
        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          {/* A. La lista de enlaces */}
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* B. ¡IMPORTANTE! El botón CTA debe estar AQUÍ, DENTRO DEL <NAV> */}
          <a href="/contacto" className="cta-button">
            Solicitar Presupuesto
          </a>
        </nav>

        {/* 4. Botón de Menú Móvil */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;
