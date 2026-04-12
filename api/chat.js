// api/chat.js

import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Solo se permite el método POST" });
  }

  try {
    // 1. Inicializamos la IA con tu clave secreta
    // eslint-disable-next-line no-undef
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 2. Extraemos el mensaje del cliente desde React
    const { message } = req.body;

    // 3. EL CEREBRO: El System Prompt
    const systemPrompt = `
      Eres TequimeBot, el asistente virtual experto y amable de 'Temequi Arquitectura'. 
      Reglas estrictas:
      1. Solo respondes dudas sobre arquitectura, diseño residencial, remodelación y sostenibilidad.
      2. Si te preguntan algo fuera de la arquitectura, di amablemente que eres un asistente arquitectónico.
      3. NUNCA des precios exactos ni presupuestos. Si piden costos, invítalos a usar el formulario de contacto o llamar al número de la agencia.
      4. Tus respuestas deben ser breves, profesionales y fáciles de leer (máximo 2 o 3 párrafos cortos).
      
      Mensaje del usuario: ${message}
    `;

    // 4. Pedimos la respuesta a la IA
    const result = await model.generateContent(systemPrompt);
    const botResponse = result.response.text();

    // 5. Devolvemos la respuesta a tu Frontend
    return res.status(200).json({ reply: botResponse });
  } catch (error) {
    console.error("Error en la API de chat:", error);
    return res.status(500).json({
      reply:
        "Lo siento, mis circuitos arquitectónicos están en mantenimiento. ¿Podrías intentar de nuevo en un momento?",
    });
  }
}
