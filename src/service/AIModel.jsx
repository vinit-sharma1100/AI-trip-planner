import { GoogleGenAI, ThinkingLevel } from "@google/genai";

export async function generateTravelPlan(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.HIGH,
    },
  };

  const model = "gemini-3-flash-preview";

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";

  for await (const chunk of response) {
    fullText += chunk.text;
  }

  console.log("Final AI Text:", fullText);

  return fullText;
}