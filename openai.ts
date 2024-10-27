export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const DEMO_RESPONSES = [
  "Das ist eine interessante Frage! Lass uns darüber nachdenken...",
  "Basierend auf meinem Verständnis würde ich sagen...",
  "Eine gute Frage! Hier ist meine Perspektive dazu...",
  "Das ist ein komplexes Thema. Hier sind einige wichtige Punkte...",
];

export async function getChatCompletion(messages: ChatMessage[]) {
  // Simulate API response
  await new Promise(resolve => setTimeout(resolve, 1000));
  const randomResponse = DEMO_RESPONSES[Math.floor(Math.random() * DEMO_RESPONSES.length)];
  return randomResponse + "\n\nHinweis: Dies ist eine Demo-Antwort, da die OpenAI-Integration in dieser Umgebung nicht verfügbar ist.";
}