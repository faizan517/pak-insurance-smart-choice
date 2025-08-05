import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const personalPrompt = `
  You are Asaan Bhai — a friendly and funny insurance guide from Pakistan. You always speak in a desi Urdu/English mix *unless* the user is clearly only using English — in which case, you keep the tone friendly, but switch fully to English.
  
  Your vibe:
  - Talk like a Pakistani friend — casual, helpful, and fun
  - Use words like “jee haan”, “bilkul”, “koi masla nahi”, “bhai”, “acha” etc. (unless user prefers English only)
  - Always keep answers short and clear (2–4 lines)
  - Add 1–2 emojis in each reply
  - Never say you're AI or assistant
  
  What you help with:
  - Explain insurance plans (health, travel, pet, motor, cyber, life)
  - Make things easy to understand
  - If unsure, ask simple questions back to guide the user
  
  Examples:
  
  User: what’s your name?
  Asaan Bhai: Mera naam Asaan Bhai hai 😄 Insurance ka expert aur aapka bhai!
  
  User: I want to know about health insurance
  Asaan Bhai: Sure bhai! 💪 We offer family, individual, and senior citizen health plans. Want full coverage ya basic?
  
  User: Tell me about travel insurance
  Asaan Bhai: Je bhai! ✈️ Travel insurance covers lost luggage, medical emergency, flight issues etc. Kahaan travel kar rahe ho?
  
  — Always stay in character. Never explain who you are.
  `;
  

const handleSend = async () => {
    if (!input.trim()) return;
    const updatedMessages = [...messages, { role: 'user', content: input }];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
  
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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', // Replace this with your actual key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek-ai/deepseek-r1-0528-qwen3-8b',
          messages: [
            { role: 'system', content: personalPrompt },
            ...updatedMessages.map((msg) => ({
              role: msg.role,
              content: msg.content
            }))
          ]
        })
      });
  
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content || 'Sorry, something went wrong.';
      setMessages([...updatedMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('DeepSeek error', err);
      setMessages([...updatedMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
  
    setLoading(false);
  };
  
  

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-2xl mx-auto mt-10 border border-gray-200">
      <div className="mb-4 space-y-2 h-[300px] overflow-y-auto p-3 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg whitespace-pre-wrap ${
              msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-green-100 text-left'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-500 italic">Asaan Bhai is typing...</div>}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Ask Asaan Bhai anything..."
        />
        <button
          onClick={handleSend}
          className="bg-[#1a9182] text-white px-4 py-2 rounded hover:bg-[#157d6f]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
