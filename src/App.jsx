// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes de Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio"; // NUEVA PÁGINA
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import TequimeBot from "./components/Tequimebot";

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <Header />
        <main>
          <Routes>
            {/* Rutas de tu aplicación */}
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Puedes añadir más rutas aquí: /servicios, /contacto, etc. */}
          </Routes>
          <TequimeBot /> {/* Bot de chat siempre disponible */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
