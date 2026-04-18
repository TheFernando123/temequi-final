import React, { useState } from "react";
import LogoImage from "../assets/LOGO COSTADO.png";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header-premium">
      <div className="header-container">
        {/* 1. Logo Mucho Más Grande y con Fondo Blanco */}
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img
              src={LogoImage}
              alt="Logo Temequi Arquitectura"
              className="logo-img-grande"
            />
          </a>
        </div>

        {/* 2. Menú de Navegación Limpio y Centrado */}
        <nav className={`nav-menu-premium ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Botón de Menú Móvil */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM */}
      <style>{`
        .header-premium {
          background-color: var(--color-negro, #000000);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 25px rgba(0,0,0,0.4);
          font-family: 'Montserrat', sans-serif;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* LOGO MÁS GRANDE CON CAJA BLANCA */
        .logo-link {
          display: inline-block;
          background-color: #ffffff; /* Fondo blanco para salvar el PNG */
          padding: 10px 20px; /* Espacio para que el logo respire */
          border-radius: 10px; /* Bordes redondeados elegantes */
          box-shadow: 0 4px 15px rgba(203, 170, 78, 0.15); /* Ligero resplandor dorado */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .logo-link:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(203, 170, 78, 0.3);
        }

        .logo-img-grande {
          height: 105px; /* Aumentado a más de 100px */
          width: auto;
          display: block;
        }

        /* MENÚ */
        .nav-menu-premium ul {
          display: flex;
          gap: 40px; 
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--color-beige, #F5EFE6);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 5px;
          transition: color 0.3s ease;
        }

        /* EFECTO DE LÍNEA DORADA DESLIZANTE */
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--color-dorado, #CBAA4E);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--color-dorado, #CBAA4E);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* MENÚ MÓVIL */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-dorado, #CBAA4E);
          font-size: 2rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .logo-img-grande { height: 75px; } /* Ajuste proporcional para celulares */
          .logo-link { padding: 8px 15px; }
          .mobile-toggle { display: block; }
          .nav-menu-premium {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-negro, #000000);
            flex-direction: column;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: clip-path 0.4s ease-out;
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          }
          .nav-menu-premium.open {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          .nav-menu-premium ul {
            flex-direction: column;
            align-items: center;
            padding: 30px 0;
            gap: 25px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
