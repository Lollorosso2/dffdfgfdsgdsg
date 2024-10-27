import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { getChatCompletion, type ChatMessage } from '../services/openai';

export const ChatTile: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hallo! Wie kann ich dir heute helfen?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatCompletion([...messages, userMessage]);
      if (response) {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es später erneut.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 mb-4 space-y-4 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start gap-2 ${
            message.role === 'user' ? 'flex-row-reverse' : ''
          }`}>
            {message.role === 'user' ? (
              <User className="text-gray-500 mt-1" size={20} />
            ) : (
              <Bot className="text-blue-500 mt-1" size={20} />
            )}
            <div className={`rounded-lg p-3 max-w-[80%] ${
              message.role === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Stelle eine Frage..."
          disabled={isLoading}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};