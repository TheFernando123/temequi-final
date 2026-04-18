import React from "react";

// Datos de proyectos con fotos de Unsplash de alta calidad
const featuredProjects = [
  {
    id: 1,
    title: "Residencia Lomas",
    description:
      "Diseño sostenible y moderno en zona residencial de alta plusvalía.",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    linkUrl: "/portafolio",
  },
  {
    id: 2,
    title: "Torre Corporativa G",
    description:
      "Conceptualización y dirección de obra de rascacielos con certificación.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    linkUrl: "/portafolio",
  },
  {
    id: 3,
    title: "Rehabilitación Histórica",
    description:
      "Restauración arquitectónica completa de edificio del siglo XIX.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    linkUrl: "/portafolio",
  },
];

function Home() {
  return (
    <div className="home-page-premium">
      {/* 1. HERO SECTION (Fondo Atractivo y Eslogan) */}
      <section className="hero-premium">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-up-1">
          <h1>
            Materializa
            <br />
            <span className="resaltado-dorado">Tus Sueños.</span>
          </h1>
          <p className="hero-subtitle">
            Expertos en arquitectura habitacional, residencial y comercial.
          </p>
          <div className="hero-buttons">
            <a href="/portafolio" className="btn-dorado">
              Ver Portafolio
            </a>
            <a href="/servicios" className="btn-outline">
              Nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      {/* 2. NUEVO BANNER DE PRESUPUESTO (Reubicado del Header) */}
      <section className="cta-presupuesto-section fade-up-2">
        <div className="cta-container">
          <div className="cta-texto">
            <h2>¿Listo para materializar tu idea?</h2>
            <p>
              Cotiza tu proyecto con nuestro equipo de expertos y da el primer
              paso hacia tu nueva obra.
            </p>
          </div>
          <div className="cta-accion">
            <a href="/contacto" className="btn-presupuesto-gigante">
              Solicitar Presupuesto <span className="flecha">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PROYECTOS DESTACADOS */}
      <section className="destacados-section">
        <div className="container-home">
          <div className="header-seccion fade-up-1">
            <h2 className="titulo-dorado-oscuro">Proyectos Destacados</h2>
            <div className="linea-decorativa"></div>
          </div>

          <div className="proyectos-grid-home fade-up-2">
            {featuredProjects.map((project) => (
              <div key={project.id} className="proyecto-card-home">
                <div className="imagen-wrapper">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="overlay-gradiente"></div>
                </div>
                <div className="info-wrapper">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.linkUrl} className="link-dorado-hover">
                    Ver Detalles <span className="mas">+</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTILOS PREMIUM */}
      <style>{`
        .home-page-premium {
          font-family: 'Montserrat', sans-serif;
          background-color: var(--color-beige, #F5EFE6);
        }

        /* 1. HERO ESTILO CINEMATOGRÁFICO */
        .hero-premium {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Efecto Parallax */
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 20px;
          max-width: 900px;
        }

        .hero-content h1 {
          color: white;
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .resaltado-dorado { color: var(--color-dorado, #CBAA4E); }

        .hero-subtitle {
          color: #e0e0e0;
          font-size: 1.4rem;
          font-weight: 300;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-dorado, .btn-outline {
          padding: 15px 35px;
          border-radius: 5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn-dorado {
          background-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro, #000000);
        }
        .btn-dorado:hover { background-color: white; transform: translateY(-3px); }

        .btn-outline {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        .btn-outline:hover { background-color: white; color: var(--color-negro); transform: translateY(-3px); }

        /* 2. BANNER CTA DE PRESUPUESTO */
        .cta-presupuesto-section {
          background-color: var(--color-negro, #000000);
          padding: 60px 20px;
          border-bottom: 5px solid var(--color-dorado, #CBAA4E);
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .cta-texto h2 { color: var(--color-dorado, #CBAA4E); font-size: 2.2rem; margin-bottom: 10px; }
        .cta-texto p { color: var(--color-beige, #F5EFE6); font-size: 1.1rem; max-width: 600px; font-weight: 300; }

        .btn-presupuesto-gigante {
          background-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro, #000000);
          padding: 18px 40px;
          border-radius: 8px;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .btn-presupuesto-gigante:hover { background-color: white; transform: scale(1.05); }
        .btn-presupuesto-gigante .flecha { margin-left: 10px; transition: transform 0.3s; }
        .btn-presupuesto-gigante:hover .flecha { transform: translateX(8px); }

        /* 3. PROYECTOS DESTACADOS */
        .destacados-section { padding: 80px 20px; }
        .container-home { max-width: 1200px; margin: 0 auto; }
        .header-seccion { text-align: center; margin-bottom: 60px; }
        .titulo-dorado-oscuro { color: var(--color-negro, #000000); font-size: 2.8rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 15px;}
        .linea-decorativa { width: 80px; height: 4px; background-color: var(--color-dorado, #CBAA4E); margin: 0 auto; }

        .proyectos-grid-home {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .proyecto-card-home {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.4s ease;
        }

        .proyecto-card-home:hover { transform: translateY(-15px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

        .imagen-wrapper { position: relative; height: 260px; overflow: hidden; }
        .imagen-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .proyecto-card-home:hover .imagen-wrapper img { transform: scale(1.1); }
        .overlay-gradiente {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
          opacity: 0; transition: opacity 0.4s;
        }
        .proyecto-card-home:hover .overlay-gradiente { opacity: 1; }

        .info-wrapper { padding: 30px; position: relative; }
        .info-wrapper h3 { color: var(--color-negro); font-size: 1.4rem; margin-bottom: 10px; font-weight: 700; }
        .info-wrapper p { color: var(--color-gris); font-size: 1rem; margin-bottom: 20px; font-weight: 300; line-height: 1.6;}
        
        .link-dorado-hover {
          color: var(--color-dorado);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          transition: color 0.3s;
        }
        .link-dorado-hover:hover { color: var(--color-negro); }
        .link-dorado-hover .mas { margin-left: 5px; font-size: 1.2rem; }

        /* ANIMACIONES */
        .fade-up-1 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.2s forwards; }
        .fade-up-2 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.4s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2.5rem; }
          .cta-container { text-align: center; justify-content: center; }
        }
      `}</style>
    </div>
  );
}

export default Home;
