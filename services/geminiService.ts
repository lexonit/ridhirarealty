import { GoogleGenAI } from "@google/genai";

// NOTE: In a real production app, this key would be proxied through a backend.
// For this demo, we assume it's available in the env or the user provides it.
// The code adheres to the guideline of using process.env.API_KEY.
const API_KEY = process.env.API_KEY || ''; 

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && API_KEY) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
  return client;
};

export const chatWithConcierge = async (userMessage: string, propertiesContext: any[] = []): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I apologize, but I am currently offline. Please configure my digital key (API Key).";
  }

  const systemPrompt = `
    You are 'Aura', a highly sophisticated AI Concierge for Ridhira Realty, an ultra-luxury real estate developer.
    Your tone is professional, elegant, warm, and concise. You cater to High-Net-Worth Individuals (HNWIs).
    
    Here is our current exclusive portfolio:
    ${JSON.stringify(propertiesContext)}
    
    Rules:
    1. If the user asks for property recommendations, suggest from the list above based on their needs.
    2. Always mention prices in AED (and USD approx if helpful).
    3. If asked about contact, suggest booking a private viewing via the form.
    4. Keep responses under 3 sentences unless detailed information is requested.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
      }
    });
    
    return response.text || "I apologize, I didn't quite catch that. How may I assist your property search?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently experiencing high traffic. Please try again shortly.";
  }
};