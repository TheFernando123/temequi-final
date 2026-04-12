// src/components/TequimeBot.jsx
import React, { useState, useRef, useEffect } from "react";

const TequimeBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [mensajes, setMensajes] = useState([
    {
      text: "¡Hola! 👋 Soy el asistente de Tequime. ¿En qué te puedo ayudar hoy?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensajes, isLoading]);

  // FUNCION MÁGICA: Detecta links y los hace clickeables
  const renderMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a0885c",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMensajes((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensajes((prev) => [...prev, { text: data.reply, isBot: true }]);
      } else {
        setMensajes((prev) => [
          ...prev,
          { text: "Hubo un error de conexión. Intenta de nuevo.", isBot: true },
        ]);
      }
    } catch {
      setMensajes((prev) => [
        ...prev,
        {
          text: "Mi servidor está en mantenimiento, por favor contáctanos vía telefónica.",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.floatingContainer}>
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <span>Tequime Bot</span>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              ✕
            </button>
          </div>

          <div style={styles.chatBody}>
            {mensajes.map((msg, index) => (
              <div
                key={index}
                style={msg.isBot ? styles.msgBot : styles.msgUser}
              >
                {renderMessage(msg.text)}
              </div>
            ))}
            {isLoading && <div style={styles.msgBot}>Pensando... ✍️</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={enviarMensaje} style={styles.inputForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              style={styles.inputField}
              disabled={isLoading}
            />
            <button type="submit" style={styles.sendBtn} disabled={isLoading}>
              ➤
            </button>
          </form>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} style={styles.bubble}>
        {isOpen ? "✕" : "💬"}
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ESTILOS
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
    height: "450px",
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
    display: "flex",
    flexDirection: "column",
  },
  msgBot: {
    backgroundColor: "#e9e9eb",
    padding: "12px",
    borderRadius: "15px 15px 15px 0",
    marginBottom: "10px",
    maxWidth: "85%",
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.4",
    alignSelf: "flex-start",
    wordBreak: "break-word",
  },
  msgUser: {
    backgroundColor: dorado,
    padding: "12px",
    borderRadius: "15px 15px 0 15px",
    marginBottom: "10px",
    maxWidth: "85%",
    fontSize: "14px",
    color: "white",
    lineHeight: "1.4",
    alignSelf: "flex-end",
  },
  inputForm: {
    display: "flex",
    borderTop: "1px solid #eee",
    padding: "10px",
    backgroundColor: "white",
  },
  inputField: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    outline: "none",
    fontSize: "14px",
  },
  sendBtn: {
    backgroundColor: negro,
    color: dorado,
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    marginLeft: "10px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
