import React from "react";

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <div className="nosotros-container">
        {/* Título Principal */}
        <div className="header-animado">
          <h1 className="titulo-dorado">Quiénes Somos</h1>
          <div className="linea-decorativa"></div>
        </div>

        {/* Texto Principal (Actualizado sin el primer párrafo) */}
        <div className="texto-principal fade-up-1">
          <p className="texto-destacado">
            Somos <strong>Temequi</strong>, un despacho de arquitectura enfocado
            en el desarrollo de proyectos cuidadosamente concebidos y ejecutados
            con precisión.
          </p>
          <div className="columnas-texto">
            <p>
              Entendemos cada encargo como una pieza única, donde el diseño, la
              técnica y la funcionalidad, deben integrarse de manera impecable,
              cumpliendo los sueños de las personas.
            </p>
            <p>
              Nuestro trabajo se distingue por la atención al detalle, la
              claridad en cada solución y el control riguroso de todo el
              proceso, desde la idea inicial hasta su materialización.
              Colaboramos de forma cercana con cada cliente, ofreciendo un
              servicio personalizado, directo y orientado a resultados que
              trascienden en el tiempo. Más que diseñar espacios, desarrollamos
              proyectos sólidos que generan experiencias, habitabilidad y
              funcionalidad.
            </p>
          </div>
        </div>

        {/* Tarjetas Animadas (Misión y Visión Definitiva) */}
        <div className="tarjetas-grid fade-up-2">
          <div className="tarjeta animacion-hover">
            <div className="icono-tarjeta">🎯</div>
            <h2>Misión</h2>
            <p>
              "Desarrollar, proyectar y construir proyectos arquitectónicos que
              integren diseño, técnica y funcionalidad con un alto nivel de
              precisión ofreciendo soluciones sólidas y bien ejecutadas en cada
              etapa del proceso."
            </p>
          </div>

          <div className="tarjeta animacion-hover">
            <div className="icono-tarjeta">🏛️</div>
            <h2>Visión</h2>
            <p>
              "Ser líderes en el diseño y la construcción, reconocidos por la
              calidad y cuidado en cada proyecto, donde cada cliente se sienta
              escuchado y respaldado desde su idea inicial hasta la ejecución
              final."
            </p>
          </div>
        </div>

        {/* POR QUÉ ELEGIRNOS Y EXPERIENCIA */}
        <div className="banner-experiencia fade-up-2">
          <div className="experiencia-contenido">
            <h3>¿Por qué elegirnos?</h3>
            <p className="promesa">
              Nos distinguimos por cumplir en tiempo y forma cuidando cada
              detalle del proyecto.
            </p>
          </div>
          <div className="experiencia-badge">
            <span className="numero">4</span>
            <span className="texto-badge">
              Años de Experiencia en Diseño y Construcción
            </span>
          </div>
        </div>

        {/* VALORES */}
        <div className="valores-section fade-up-1">
          <h2 className="subtitulo-seccion">Nuestros Valores</h2>
          <div className="linea-decorativa-corta"></div>
          <div className="valores-grid">
            {[
              "Calidad",
              "Compromiso",
              "Responsabilidad",
              "Dedicación",
              "Eficiencia",
              "Originalidad",
              "Perfección",
              "Trabajo en equipo",
              "Honestidad",
              "Profesionalismo",
            ].map((valor, index) => (
              <div key={index} className="valor-pill">
                <span className="valor-punto">•</span> {valor}
              </div>
            ))}
          </div>
        </div>

        {/* EQUIPO DE TRABAJO */}
        <div className="equipo-section fade-up-2">
          <h2 className="subtitulo-seccion">Equipo de Trabajo</h2>
          <div className="linea-decorativa-corta"></div>

          <div className="equipo-grid">
            {/* Fundadores */}
            <div className="miembro-card">
              <div className="miembro-rol dorado">Fundadora / Arquitectura</div>
              <h3 className="miembro-nombre">
                Arq. Andrea Yoselin Cruz Del Valle
              </h3>
            </div>
            <div className="miembro-card">
              <div className="miembro-rol dorado">Fundador / Arquitectura</div>
              <h3 className="miembro-nombre">
                Arq. Hector Jesus Moreno Toscano
              </h3>
            </div>
            {/* Ingeniería */}
            <div className="miembro-card">
              <div className="miembro-rol">Ingeniería y Desarrollo</div>
              <h3 className="miembro-nombre">Ing. Fernando Cruz Del Valle</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS Y ANIMACIONES PREMIUM */}
      <style>{`
        .nosotros-section {
          background-color: var(--color-beige, #F5EFE6);
          padding: 80px 20px;
          font-family: 'Montserrat', sans-serif;
          color: var(--color-gris, #544E4A);
          overflow: hidden;
        }
        
        .nosotros-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* HEADER Y TEXTO */
        .header-animado { text-align: center; margin-bottom: 50px; animation: fadeDown 1s ease-out forwards; }
        .titulo-dorado { color: var(--color-dorado, #CBAA4E); font-weight: 700; font-size: 3rem; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; }
        .linea-decorativa { width: 80px; height: 4px; background-color: var(--color-negro, #000000); margin: 0 auto; border-radius: 2px; }
        .linea-decorativa-corta { width: 40px; height: 3px; background-color: var(--color-dorado, #CBAA4E); margin: 0 auto 30px auto; border-radius: 2px; }
        .subtitulo-seccion { color: var(--color-negro, #000000); font-weight: 700; font-size: 2rem; text-align: center; text-transform: uppercase; margin-bottom: 10px; margin-top: 60px;}

        .texto-principal { background: white; padding: 50px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); margin-bottom: 60px; border-top: 6px solid var(--color-dorado, #CBAA4E); }
        .texto-destacado { font-size: 1.4rem; color: var(--color-negro, #000000); text-align: center; margin-bottom: 30px; font-style: italic; }
        .columnas-texto { display: column; gap: 40px; font-weight: 300; font-size: 1.1rem; line-height: 1.8; color: #333; }
        @media (min-width: 768px) { .columnas-texto { column-count: 2; column-gap: 40px; } }

        /* TARJETAS MISIÓN Y VISIÓN */
        .tarjetas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;}
        .tarjeta { background: linear-gradient(145deg, var(--color-negro, #000000), #1a1a1a); color: var(--color-beige, #F5EFE6); padding: 40px 30px; border-radius: 20px; text-align: center; transition: all 0.4s ease; border: 1px solid #333; }
        .icono-tarjeta { font-size: 3rem; margin-bottom: 15px; }
        .tarjeta h2 { color: var(--color-dorado, #CBAA4E); font-weight: 700; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
        .tarjeta p { font-weight: 300; line-height: 1.7; font-style: italic; opacity: 0.9; }
        .animacion-hover:hover { transform: translateY(-15px) scale(1.02); box-shadow: 0 20px 40px rgba(203, 170, 78, 0.4); border-color: var(--color-dorado, #CBAA4E); z-index: 10; }

        /* BANNER EXPERIENCIA */
        .banner-experiencia { background-color: var(--color-dorado, #CBAA4E); border-radius: 20px; padding: 40px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; margin-bottom: 60px; box-shadow: 0 15px 30px rgba(203, 170, 78, 0.2); }
        .experiencia-contenido { flex: 1; min-width: 300px; padding-right: 20px; }
        .experiencia-contenido h3 { color: var(--color-negro, #000000); font-size: 2rem; text-transform: uppercase; margin-bottom: 15px; font-weight: 700; }
        .promesa { color: var(--color-negro, #000000); font-size: 1.2rem; line-height: 1.6; font-weight: 500; }
        .experiencia-badge { background: var(--color-negro, #000000); color: var(--color-dorado, #CBAA4E); padding: 20px 30px; border-radius: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-width: 200px; margin-top: 20px; }
        .experiencia-badge .numero { font-size: 4rem; font-weight: 700; line-height: 1; margin-bottom: 5px; }
        .experiencia-badge .texto-badge { font-size: 0.9rem; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: var(--color-beige, #F5EFE6);}

        /* VALORES */
        .valores-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 60px; }
        .valor-pill { background-color: white; padding: 12px 25px; border-radius: 50px; font-weight: 600; color: var(--color-gris, #544E4A); box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 0.3s ease; border: 1px solid transparent; }
        .valor-pill:hover { transform: translateY(-5px); border-color: var(--color-dorado, #CBAA4E); color: var(--color-negro, #000000); box-shadow: 0 8px 20px rgba(203, 170, 78, 0.2); }
        .valor-punto { color: var(--color-dorado, #CBAA4E); margin-right: 5px; font-size: 1.2rem; }

        /* EQUIPO */
        .equipo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 20px; }
        .miembro-card { background: white; padding: 30px 20px; border-radius: 15px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.04); border-bottom: 4px solid var(--color-negro, #000000); transition: transform 0.3s ease; }
        .miembro-card:hover { transform: translateY(-10px); border-color: var(--color-dorado, #CBAA4E); }
        .miembro-rol { font-size: 0.85rem; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 15px; color: var(--color-gris, #544E4A); }
        .miembro-rol.dorado { color: var(--color-dorado, #CBAA4E); }
        .miembro-nombre { font-size: 1.2rem; color: var(--color-negro, #000000); font-weight: 700; }

        /* ANIMACIONES */
        .fade-up-1 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.2s forwards; }
        .fade-up-2 { opacity: 0; transform: translateY(40px); animation: fadeUp 1s ease-out 0.4s forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        
        @media (min-width: 768px) { .experiencia-badge { margin-top: 0; } }
      `}</style>
    </section>
  );
};

export default Nosotros;
