import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (userMessage: string, language: 'en' | 'es' = 'en'): Promise<string> => {
  try {
    const model = "gemini-3-flash-preview"; 
    
    // System instruction to act as the Portfolio Owner (Trafficker/Account Manager)
    const systemInstruction = `
      You are an AI assistant for a Senior Trafficker and Account Manager's portfolio website. 
      Your name is "Noir AI".
      
      Your persona:
      - Professional, data-driven, yet approachable.
      - Expert in Digital Marketing, Paid Media (Meta, Google, TikTok), ROAS optimization, and Client Retention.
      - You advocate for data-backed decisions and creative testing.
      
      Goal:
      - Answer visitor questions about marketing strategies.
      - Explain why hiring a professional account manager is crucial.
      - Keep answers concise (under 3 sentences usually) and impactful.
      
      IMPORTANT:
      - The user is currently browsing in ${language === 'es' ? 'Spanish' : 'English'}.
      - You MUST respond in ${language === 'es' ? 'Spanish' : 'English'}.
      
      If asked about specific pricing, say: "${language === 'es' ? 'Cada proyecto es único. Por favor usa el formulario de contacto para discutir tus necesidades y presupuesto.' : 'Every project is unique. Please use the contact form below so we can discuss your specific needs and budget.'}"
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || (language === 'es' 
      ? "Lo siento, estoy analizando datos complejos y no pude procesar esa solicitud. Por favor intenta de nuevo." 
      : "I apologize, I'm analyzing some heavy data right now and couldn't process that request. Please try again.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'es'
      ? "Estoy desconectado por un problema de conexión. Por favor usa el formulario de contacto."
      : "I'm currently offline due to a connection issue. Please use the contact form to reach out directly.";
  }
};