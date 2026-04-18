import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/LOGO COSTADO.png"; // Asegúrate de la ruta

function ContactQR() {
  const websiteUrl = "https://temequi-final.vercel.app";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Escanea para visitar nuestra web</h3>
      <QRCodeSVG
        value={websiteUrl}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#a0885c"} // Color dorado de tu marca
        level={"H"} // Nivel de redundancia alto para que el logo no rompa el QR
        includeImage={true}
        imageSettings={{
          src: logo,
          x: undefined,
          y: undefined,
          height: 40,
          width: 40,
          excavate: true, // Corta los puntos del QR detrás del logo para que se vea limpio
        }}
      />
    </div>
  );
}

export default ContactQR;
