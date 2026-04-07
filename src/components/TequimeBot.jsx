import React, { useState } from "react";

const TequimeBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paso, setPaso] = useState("inicio");

  // Función para cambiar de respuesta
  const responder = (nuevoPaso) => {
    setPaso(nuevoPaso);
  };

  return (
    <div style={styles.floatingContainer}>
      {/* VENTANA DE CHAT */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Cabecera */}
          <div style={styles.header}>
            <span>Tequime Bot</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              ✕
            </button>
          </div>

          {/* Cuerpo de Mensajes */}
          <div style={styles.chatBody}>
            {/* Mensaje de Bienvenida (Siempre visible) */}
            <div style={styles.msgBot}>
              ¡Hola! 👋 Soy el asistente de{" "}
              <strong>Tequime Arquitectura</strong>. ¿Cómo puedo ayudarte hoy?
            </div>

            {/* LÓGICA DE PASOS */}
            {paso === "inicio" && (
              <div style={styles.containerOpciones}>
                <button
                  onClick={() => responder("servicios")}
                  style={styles.btnOpcion}
                >
                  🏗️ Ver Servicios
                </button>
                <button
                  onClick={() => responder("autores")}
                  style={styles.btnOpcion}
                >
                  👷 ¿Quiénes somos?
                </button>
                <button
                  onClick={() => responder("presupuesto")}
                  style={styles.btnOpcion}
                >
                  💰 Pedir Presupuesto
                </button>
              </div>
            )}

            {paso === "servicios" && (
              <>
                <div style={styles.msgBot}>
                  Ofrecemos <strong>Diseño Residencial</strong>,{" "}
                  <strong>Remodelación</strong> y{" "}
                  <strong>Arquitectura Sostenible</strong>. ¿Quieres ver el
                  portafolio?
                </div>
                <div style={styles.containerOpciones}>
                  <button
                    onClick={() => (window.location.href = "/portafolio")}
                    style={styles.btnOpcion}
                  >
                    📂 Ir al Portafolio
                  </button>
                  <button
                    onClick={() => responder("inicio")}
                    style={styles.btnVolver}
                  >
                    ⬅️ Volver
                  </button>
                </div>
              </>
            )}

            {paso === "autores" && (
              <>
                <div style={styles.msgBot}>
                  Somos un despacho liderado por expertos apasionados por
                  transformar ideas en espacios funcionales y estéticos.
                </div>
                <div style={styles.containerOpciones}>
                  <button
                    onClick={() => responder("inicio")}
                    style={styles.btnVolver}
                  >
                    ⬅️ Volver
                  </button>
                </div>
              </>
            )}

            {paso === "presupuesto" && (
              <>
                <div style={styles.msgBot}>
                  ¡Excelente! Puedes enviarnos un mensaje directo en la sección
                  de <strong>Contacto</strong> o llamarnos al número que aparece
                  en pantalla.
                </div>
                <div style={styles.containerOpciones}>
                  <button
                    onClick={() => (window.location.href = "/contacto")}
                    style={styles.btnOpcion}
                  >
                    ✉️ Ir a Contacto
                  </button>
                  <button
                    onClick={() => responder("inicio")}
                    style={styles.btnVolver}
                  >
                    ⬅️ Volver
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* BOTÓN BURBUJA */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.bubble}>
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Animación Simple */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// --- ESTILOS (Sigue la paleta de colores de Temequi) ---
const dorado = "#a0885c";
const negro = "#1a1a1a";

const styles = {
  floatingContainer: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 9999,
    fontFamily: "Arial, sans-serif",
  },
  chatWindow: {
    width: "320px",
    height: "420px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    overflow: "hidden",
    border: `1px solid ${dorado}`,
    animation: "fadeIn 0.3s ease-out",
  },
  header: {
    backgroundColor: negro,
    color: dorado,
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: dorado,
    cursor: "pointer",
    fontSize: "18px",
  },
  chatBody: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    backgroundColor: "#fdfdfd",
  },
  msgBot: {
    backgroundColor: "#e9e9eb",
    padding: "12px",
    borderRadius: "15px 15px 15px 0",
    marginBottom: "10px",
    maxWidth: "90%",
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.4",
  },
  containerOpciones: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "10px",
  },
  btnOpcion: {
    backgroundColor: "white",
    border: `1px solid ${dorado}`,
    color: negro,
    padding: "10px 15px",
    borderRadius: "12px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "13px",
    transition: "0.2s ease",
    outline: "none",
  },
  btnVolver: {
    backgroundColor: "#eee",
    border: "none",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    alignSelf: "flex-start",
    marginTop: "5px",
  },
  bubble: {
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    backgroundColor: dorado,
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "28px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s",
  },
};

export default TequimeBot;
