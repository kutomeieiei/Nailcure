import { GoogleGenAI } from "@google/genai";

// Initialize the client using process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Helper to convert File to Base64 string (without the data URL prefix for the API)
 */
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove the "data:image/jpeg;base64," part
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Analyze an image and return a description.
 * Now supports optional schema for structured JSON output.
 */
export const analyzeImageContent = async (file: File, prompt: string, schema?: any): Promise<string> => {
  try {
    const base64Data = await fileToGenerativePart(file);

    const config: any = {};
    if (schema) {
      config.responseMimeType = "application/json";
      config.responseSchema = schema;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: file.type,
              data: base64Data
            }
          },
          { text: prompt }
        ]
      },
      config: config
    });

    return response.text || "";
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};