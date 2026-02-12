import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, MessageCircle } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { useLanguage } from '../context/LanguageContext';

const AIChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initialize welcome message when language changes or first load
  useEffect(() => {
    if (!hasInitialized) {
      setMessages([{
        id: 'init',
        text: t.chat.initial,
        sender: ChatSender.Bot,
        timestamp: new Date()
      }]);
      setHasInitialized(true);
    }
  }, [t, hasInitialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.User,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const responseText = await generateChatResponse(input, language);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.Bot,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/573502715323", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 bg-jsr-card border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right">
          {/* Header */}
          <div className="bg-jsr-accent p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-jsr-dark">
              <Bot className="w-5 h-5" />
              <h3 className="font-heading font-semibold">{t.chat.header}</h3>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleWhatsApp} className="text-jsr-dark hover:text-white transition-colors" title="WhatsApp">
                 <MessageCircle className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-jsr-dark/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === ChatSender.User ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === ChatSender.User ? 'bg-slate-700' : 'bg-jsr-accent/20 text-jsr-accent'
                }`}>
                  {msg.sender === ChatSender.User ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === ChatSender.User 
                    ? 'bg-slate-700 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-jsr-text rounded-tl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-jsr-accent/20 text-jsr-accent flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-700 flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-jsr-dark border-t border-slate-800 flex flex-col gap-3">
            <button 
              onClick={handleWhatsApp}
              className="w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {t.chat.whatsappBtn}
            </button>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.chat.placeholder}
                className="w-full bg-slate-900 text-white placeholder-slate-500 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-jsr-accent border border-slate-800"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-jsr-accent rounded-full flex items-center justify-center text-jsr-dark hover:bg-white disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-jsr-accent rounded-full shadow-lg flex items-center justify-center text-jsr-dark hover:bg-white transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChat;