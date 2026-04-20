import React, { useState } from "react";

// 1. Descripciones de las Categorías (El requerimiento del círculo verde)
const categoriasInfo = {
  Todos:
    "Explora nuestra selección completa de proyectos arquitectónicos, donde el diseño y la funcionalidad se encuentran.",
  Habitacional:
    "Proyectos residenciales diseñados para el confort y el estilo de vida. Desde casas unifamiliares hasta complejos que priorizan la habitabilidad.",
  Cultural:
    "Espacios dedicados al arte, la historia y la comunidad, diseñados con un profundo respeto por el entorno y el impacto social.",
  Educativo:
    "Entornos de aprendizaje innovadores y seguros, con un diseño funcional que inspira el desarrollo académico y personal.",
  Remodelación:
    "Transformación y revitalización de espacios existentes, fusionando la estructura clásica con diseño contemporáneo para darles nueva vida.",
};

// 2. Proyectos de Ejemplo (Con fotos de arquitectura reales de Unsplash)
const proyectosData = [
  {
    id: 1,
    title: "Residencia Lomas",
    category: "Habitacional",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Centro Cultural Norte",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Instituto Bicentenario",
    category: "Educativo",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Renovación Casa Antigua",
    category: "Remodelación",
    image:
      "https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Complejo Habitacional Sur",
    category: "Habitacional",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Biblioteca Municipal",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
  },
];

function Portafolio() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Filtrar los proyectos según la categoría seleccionada
  const proyectosFiltrados =
    filtroActivo === "Todos"
      ? proyectosData
      : proyectosData.filter((proyecto) => proyecto.category === filtroActivo);

  const categorias = [
    "Todos",
    "Habitacional",
    "Cultural",
    "Educativo",
    "Remodelación",
  ];

  return (
    <section className="portafolio-section">
      <div className="portafolio-container">
        {/* ENCABEZADO */}
        <div className="header-animado">
          <h1 className="titulo-dorado">Portafolio</h1>
          <div className="linea-decorativa"></div>
        </div>

        {/* CONTROLES DE FILTRO */}
        <div className="filtros-container fade-up-1">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`filtro-btn ${filtroActivo === categoria ? "activo" : ""}`}
              onClick={() => setFiltroActivo(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* DESCRIPCIÓN DINÁMICA DE LA CATEGORÍA */}
        <div className="descripcion-categoria fade-up-1" key={filtroActivo}>
          <p>{categoriasInfo[filtroActivo]}</p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="proyectos-grid-premium fade-up-2">
          {proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card-premium">
              <div className="imagen-contenedor">
                <img src={proyecto.image} alt={proyecto.title} loading="lazy" />
                <div className="overlay-dorado">
                  <span className="categoria-tag">{proyecto.category}</span>
                </div>
              </div>
              <div className="info-proyecto">
                <h3>{proyecto.title}</h3>
                <div className="linea-decorativa-card"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM */}
      <style>{`
        .portafolio-section {
          background-color: var(--color-beige, #F5EFE6);
          padding: 60px 20px 100px 20px;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .portafolio-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADER ANIMADO */
        .header-animado { text-align: center; margin-bottom: 40px; animation: fadeDown 1s ease-out forwards; }
        .titulo-dorado { color: var(--color-dorado, #CBAA4E); font-weight: 700; font-size: 3.5rem; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; }
        .linea-decorativa { width: 80px; height: 4px; background-color: var(--color-negro, #000000); margin: 0 auto; border-radius: 2px; }

        /* FILTROS */
        .filtros-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .filtro-btn {
          background-color: transparent;
          color: var(--color-gris, #544E4A);
          border: 2px solid var(--color-gris, #544E4A);
          padding: 10px 25px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .filtro-btn:hover {
          background-color: rgba(203, 170, 78, 0.1);
          border-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro);
        }

        .filtro-btn.activo {
          background-color: var(--color-dorado, #CBAA4E);
          border-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro, #000000);
          box-shadow: 0 5px 15px rgba(203, 170, 78, 0.4);
        }

        /* DESCRIPCIÓN DINÁMICA */
        .descripcion-categoria {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px auto;
          font-size: 1.15rem;
          color: var(--color-gris);
          font-style: italic;
          line-height: 1.6;
          animation: fadeIn 0.5s ease-in-out;
        }

        /* GRID DE PROYECTOS */
        .proyectos-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        /* TARJETAS PREMIUM */
        .proyecto-card-premium {
          background: #ffffff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .proyecto-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(203, 170, 78, 0.2);
        }

        .imagen-contenedor {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .imagen-contenedor img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .proyecto-card-premium:hover .imagen-contenedor img {
          transform: scale(1.08);
        }

        /* OVERLAY DORADO AL PASAR EL MOUSE */
        .overlay-dorado {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(203, 170, 78, 0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-start;
          padding: 20px;
        }

        .proyecto-card-premium:hover .overlay-dorado {
          opacity: 1;
        }

        .categoria-tag {
          background-color: var(--color-dorado, #CBAA4E);
          color: var(--color-negro);
          padding: 6px 15px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.4s ease 0.1s;
        }

        .proyecto-card-premium:hover .categoria-tag {
          transform: translateY(0);
          opacity: 1;
        }

        .info-proyecto {
          padding: 25px;
          background-color: var(--color-negro);
          text-align: center;
          transition: background-color 0.4s;
        }

        .proyecto-card-premium:hover .info-proyecto {
          background-color: #1a1a1a;
        }

        .info-proyecto h3 {
          color: var(--color-beige);
          font-size: 1.3rem;
          margin-bottom: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .linea-decorativa-card {
          width: 40px;
          height: 2px;
          background-color: var(--color-dorado);
          margin: 0 auto;
          transition: width 0.3s ease;
        }

        .proyecto-card-premium:hover .linea-decorativa-card {
          width: 80px;
        }

        /* ANIMACIONES */
        .fade-up-1 { opacity: 0; transform: translateY(30px); animation: fadeUp 1s ease-out 0.2s forwards; }
        .fade-up-2 { opacity: 0; transform: translateY(30px); animation: fadeUp 1s ease-out 0.4s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @media (max-width: 768px) {
          .titulo-dorado { 
            font-size: 2.2rem; /* Tamaño perfecto para la palabra PORTAFOLIO */
            letter-spacing: 1px; 
          }
          .filtros-container { 
            gap: 10px; 
          }
          .filtro-btn { 
            padding: 8px 16px; 
            font-size: 0.85rem; 
          }
          .descripcion-categoria {
            font-size: 1rem;
            padding: 0 15px;
          }
        }
      `}</style>
    </section>
  );
}

export default Portafolio;
