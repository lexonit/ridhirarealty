import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './ui/Icons';
import { chatWithConcierge } from '../services/geminiService';
import { propertyService } from '../services/propertyService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Welcome to Ridhira Realty. I am Aura, your personal real estate concierge. How may I assist you today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [propertiesContext, setPropertiesContext] = useState<any[]>([]);

  // Fetch properties on mount to provide context to AI
  useEffect(() => {
    propertyService.getAllProperties().then(props => {
      setPropertiesContext(props.map(p => ({
        title: p.title, 
        price: p.price, 
        location: p.location, 
        type: p.type, 
        amenities: p.amenities 
      })));
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Pass the property context to the service
    const responseText = await chatWithConcierge(input, propertiesContext);
    
    const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      {/* @ts-ignore: Suppressing strict type check for standard motion props */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-brand-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(0,94,184,0.5)] hover:bg-brand-500 hover:scale-110 transition-all border border-white/10"
        whileHover={{ rotate: 15 }}
      >
        {isOpen ? <Icons.X /> : <Icons.MessageSquare />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          // @ts-ignore: Suppressing strict type check for standard motion props
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-full max-w-sm bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-brand-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-700 to-brand-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <Icons.Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className=" font-bold text-white text-sm">Aura AI</h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest">Ridhira Concierge</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-black/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-white dark:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/5 rounded-tl-none shadow-sm dark:shadow-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/10 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-white/5">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-brand-500 dark:bg-white rounded-full animate-bounce"></span>
                      <span className="w-1 h-1 bg-brand-500 dark:bg-white rounded-full animate-bounce delay-100"></span>
                      <span className="w-1 h-1 bg-brand-500 dark:bg-white rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-luxury-charcoal border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 rounded-full px-4 py-2 border border-slate-200 dark:border-white/10">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about properties..." 
                  className="bg-transparent flex-1 text-sm text-slate-900 dark:text-white outline-none placeholder-slate-400 dark:placeholder-white/30"
                />
                <button onClick={handleSend} className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-white transition-colors">
                  <Icons.Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;