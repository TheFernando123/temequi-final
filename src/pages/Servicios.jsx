import React from "react";

// Datos actualizados: Solo los servicios técnicos y especializados
const servicesData = [
  {
    title: "Modelado 3D",
    description:
      "Construcción digital precisa de volúmenes y estructuras. Transformamos planos técnicos en modelos tridimensionales detallados para una comprensión total del espacio.",
    icon: "🧊",
  },
  {
    title: "Render Fotorealista",
    description:
      "Imágenes de alta resolución con iluminación y texturas reales. Logramos que visualices el acabado final de tu obra con una calidad que parece fotografía.",
    icon: "📸",
  },
  {
    title: "Construcción",
    description:
      "Materializamos tu proyecto con los más altos estándares de calidad, un control riguroso de procesos y la gestión eficiente de recursos de principio a fin.",
    icon: "🏗️",
  },
  {
    title: "Remodelación",
    description:
      "Renovamos y optimizamos tus espacios actuales, mejorando su funcionalidad y estética para adaptarlos a tus nuevas necesidades y estilo de vida.",
    icon: "🏠",
  },
  {
    title: "Restauración",
    description:
      "Intervención especializada para preservar y rehabilitar edificaciones, manteniendo su esencia histórica mientras actualizamos su estructura y seguridad.",
    icon: "🏛️",
  },
];

// Tarjeta de Servicio Estilizada (Sin botón, más visual)
const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card-premium fade-up-2">
    <div className="service-icon-container">
      <span className="service-icon-gold">{icon}</span>
    </div>
    <h3>{title}</h3>
    <div className="linea-decorativa-card"></div>
    <p>{description}</p>
  </div>
);

function Servicios() {
  return (
    <section className="servicios-section">
      <div className="servicios-container">
        {/* ENCABEZADO ANIMADO */}
        <div className="header-animado">
          <h1 className="titulo-dorado">Especialidades Temequi</h1>
          <div className="linea-decorativa"></div>
          <p className="page-subtitle fade-up-1">
            Soluciones técnicas avanzadas y ejecución de obra con precisión
            arquitectónica y tecnológica.
          </p>
        </div>

        {/* --- GRID DE SERVICIOS --- */}
        <div className="services-grid-premium">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM */}
      <style>{`
        .servicios-section {
          background-color: var(--color-beige, #F5EFE6);
          padding: 80px 20px 120px 20px;
          font-family: 'Montserrat', sans-serif;
          color: var(--color-gris, #544E4A);
          min-height: 100vh;
        }
        
        .servicios-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADER */
        .header-animado { text-align: center; margin-bottom: 70px; animation: fadeDown 1s ease-out forwards; }
        .titulo-dorado { color: var(--color-dorado, #CBAA4E); font-weight: 700; font-size: 3rem; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; }
        .linea-decorativa { width: 80px; height: 4px; background-color: var(--color-negro, #000000); margin: 0 auto 20px auto; border-radius: 2px; }
        .page-subtitle { font-size: 1.2rem; color: var(--color-gris); max-width: 700px; margin: 0 auto; font-weight: 300; }

        /* GRID */
        .services-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          justify-content: center;
        }

        /* TARJETAS VIP (SIN BOTÓN) */
        .service-card-premium {
          background: #ffffff;
          padding: 50px 35px;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          text-align: center;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(203, 170, 78, 0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-icon-container {
          background-color: var(--color-beige);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          transition: all 0.5s ease;
        }

        .service-icon-gold {
          font-size: 3rem;
        }

        .service-card-premium h3 {
          font-size: 1.5rem;
          color: var(--color-negro, #000000);
          margin-bottom: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .linea-decorativa-card {
          width: 40px;
          height: 2px;
          background-color: var(--color-dorado);
          margin-bottom: 20px;
          transition: width 0.3s ease;
        }

        .service-card-premium p {
          color: var(--color-gris);
          font-size: 1.05rem;
          line-height: 1.7;
          font-weight: 300;
        }

        /* EFECTO HOVER POTENTE */
        .service-card-premium:hover {
          transform: translateY(-20px);
          box-shadow: 0 25px 50px rgba(203, 170, 78, 0.25);
          border-color: var(--color-dorado);
          background-color: var(--color-negro);
        }

        .service-card-premium:hover h3 { color: var(--color-dorado); }
        .service-card-premium:hover p { color: var(--color-beige); }
        .service-card-premium:hover .linea-decorativa-card { width: 80px; }
        .service-card-premium:hover .service-icon-container { 
          transform: rotateY(360deg);
          background-color: rgba(203, 170, 78, 0.2);
        }

        /* ANIMACIONES */
        .fade-up-1 { opacity: 0; transform: translateY(30px); animation: fadeUp 1s ease-out 0.2s forwards; }
        .fade-up-2 { opacity: 0; transform: translateY(30px); animation: fadeUp 1s ease-out 0.4s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}

export default Servicios;
