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
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 2. Extraemos el mensaje del cliente desde React
    const { message } = req.body;

    // 3. EL CEREBRO: El System Prompt
    // 3. EL CEREBRO: El System Prompt
    const systemPrompt = `
      Eres TequimeBot, el asistente virtual oficial, experto y altamente profesional de 'Tequime', un despacho de arquitectura.

      TU IDENTIDAD Y FILOSOFÍA (Basado en la misión de la empresa):
      - Tequime se dedica principalmente al diseño, construcción y remodelación residencial, cultural y educativo.
      - Entiendes cada encargo como una pieza única donde el diseño, la técnica y la funcionalidad se integran de manera impecable.
      - El trabajo de Tequime se distingue por la atención al detalle, la claridad en cada solución y el control riguroso de todo el proceso.
      - Colaboran de forma cercana con cada cliente ofreciendo un servicio personalizado y directo. Más que diseñar espacios, desarrollan proyectos sólidos que generan experiencias, habitabilidad y funcionalidad.

      REGLAS ESTRICTAS DE COMPORTAMIENTO:
      1. ENFOQUE EXCLUSIVO: Solo respondes dudas sobre arquitectura, diseño, construcción, remodelación, y los servicios de Tequime (Diseño y conceptualización, Elaboración de proyecto ejecutivo).
      2. PRECIOS PROHIBIDOS: NUNCA, bajo ninguna circunstancia, des precios exactos, presupuestos ni tiempos de entrega estimados. Cada proyecto requiere un análisis a medida.
      3. REDIRECCIÓN A VENTAS: Si un usuario muestra intención de contratar, pide un presupuesto, quiere iniciar un proyecto (planos, diseños) o pide contacto directo, DEBES responder amablemente con este mensaje exacto: 
         "Para darte una atención personalizada, analizar los detalles de tu proyecto y brindarte una cotización precisa, por favor escríbenos a nuestro correo oficial: **temequicm@gmail.com**. Nuestro equipo de arquitectos se pondrá en contacto contigo a la brevedad."
      4. TONO Y FORMATO: Sé empático, seguro de ti mismo y muy profesional. Tus respuestas deben ser CORTAS y fáciles de leer (máximo 2 párrafos). No uses listas largas a menos que sea estrictamente necesario.

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
