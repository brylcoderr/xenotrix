'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Phone, Mail, Calendar, MessageCircle, RefreshCcw } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export default function ChatbotUI() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Protocol initiated. This is the XenotriX Intelligence Node. How can we architect your digital breakthrough today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const clearChat = () => {
        setMessages([
            { role: 'assistant', content: 'Protocol initiated. This is the XenotriX Intelligence Node. How can we architect your digital breakthrough today?' }
        ]);
    };

    const handleSend = async (customInput?: string) => {
        const messageText = customInput || input;
        if (!messageText.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        if (!customInput) setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages.filter(m => m.role !== 'system'), userMessage] }),
            });

            const data = await response.json();

            if (data.choices?.[0]?.message) {
                const aiResponse = data.choices[0].message.content;
                setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);

                if (data.pip_event === "LEAD_CAPTURED") {
                    setTimeout(() => {
                        setMessages(prev => [...prev, {
                            role: 'system',
                            content: '[AGENCY PROTOCOL]: Lead credentials secured. Strategic bridge initialization confirmed.'
                        }]);
                    }, 1000);
                }
            } else {
                throw new Error(data.error || 'Failed to get response');
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Connection instability detected. Please try re-initiating the protocol or contact us directly via WhatsApp.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-100 font-sans">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 rounded-full bg-brand-primary text-bg-dark flex items-center justify-center shadow-2xl shadow-brand-primary/20 hover:scale-110 transition-transform group"
                    >
                        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.9 }}
                        className="absolute bottom-0 right-0 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-bg-dark border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white leading-none">XNX Intelligence Node</div>
                                    <div className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em] mt-1">Status: Active</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={clearChat}
                                    title="Clear Chat"
                                    className="p-2 text-white/40 hover:text-brand-primary transition-colors"
                                >
                                    <RefreshCcw size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Container */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar relative"
                        >
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'system' ? (
                                        <div className="w-full py-2 px-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-[9px] font-black text-brand-primary uppercase tracking-[0.2em] text-center my-2">
                                            {msg.content}
                                        </div>
                                    ) : (
                                        <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/5 text-white/40' : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'}`}>
                                                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                                            </div>
                                            <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-none border border-white/5' : 'bg-white/5 text-text-dim rounded-tl-none border border-white/5'}`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary border border-brand-primary/20 flex items-center justify-center">
                                            <Bot size={14} />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 text-text-dim rounded-tl-none border border-white/5 flex gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-bounce shadow-glow shadow-brand-primary/50" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-bounce [animation-delay:0.2s] shadow-glow shadow-brand-primary/50" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-bounce [animation-delay:0.4s] shadow-glow shadow-brand-primary/50" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Suggested Questions */}
                        {messages.length === 1 && (
                            <div className="px-6 py-4 flex flex-col gap-2 border-t border-white/5 bg-white/2">
                                <div className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em] mb-1 italic">Suggested Protocols:</div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Tell me about web services",
                                        "How to start a project?",
                                        "Custom AI solutions",
                                        "Jump on a quick call",
                                    ].map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(q)}
                                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all text-left"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quick Actions */}
                        <div className="px-4 py-2 border-t border-white/10 flex flex-wrap gap-1.5 bg-bg-dark">
                            {[
                                { icon: <MessageCircle size={10} />, label: 'WA', href: 'https://wa.me/918679672283' },
                                { icon: <Calendar size={10} />, label: 'Meet', href: 'https://cal.com/xenotrix/15min' },
                                { icon: <Phone size={10} />, label: 'Call', href: 'tel:+918679672283' },
                                { icon: <Mail size={10} />, label: 'Email', href: 'mailto:xenotrix.connect@gmail.com' },
                            ].map((action, i) => (
                                <a
                                    key={i}
                                    href={action.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-bold text-white/50 hover:text-white hover:bg-white/10 hover:border-brand-primary/30 transition-all whitespace-nowrap uppercase tracking-wider"
                                >
                                    {action.icon}
                                    {action.label}
                                </a>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Inquire protocol..."
                                    className="w-full bg-bg-dark border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:border-brand-primary/40 focus:bg-white/5 outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-brand-primary text-bg-dark flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-brand-primary/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
