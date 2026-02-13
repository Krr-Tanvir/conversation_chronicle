
import { GoogleGenAI, Type } from "@google/genai";
import { Turn } from "../types";

export const getSessionInsight = async (turns: Turn[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const prompt = `Analyze the following interaction chronicle between a user and an AI assistant named 'Kona'. 
  Identify patterns in user requests, technical challenges faced by the AI, and suggest improvements for future sessions.
  
  Chronicle Data:
  ${JSON.stringify(turns)}
  
  Provide the response in JSON format with fields: 'summary', 'keyInsights' (array), and 'efficiencyScore' (number 0-100).`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            keyInsights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            efficiencyScore: { type: Type.NUMBER }
          },
          required: ["summary", "keyInsights", "efficiencyScore"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return null;
  }
};
