'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, BotMessageSquare, X, Sparkles, MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
}

const quickQueries = [
  { icon: '💡', text: 'What services do you offer?' },
  { icon: '🚀', text: 'Tell me about AI chatbot integration' },
  { icon: '💰', text: 'What are your pricing options?' },
];

export default function AIChat({ isOpen, onClose, onOpen }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 15px)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, [isOpen]);

  // Handle wheel scroll - prevent page scroll when mouse is outside chatbot
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only prevent default if mouse is NOT over chatbot
      if (chatContainerRef.current && !chatContainerRef.current.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleQuickQuery = (query: string) => {
    const userMessage: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate sending the message
    setTimeout(() => {
      sendMessage([...messages, userMessage]);
    }, 0);
  };

  const sendMessage = async (messagesToSend: Message[]) => {
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messagesToSend }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Response body is not readable');

      const decoder = new TextDecoder();
      let assistantMessage = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantMessage += chunk;

        setMessages(prev => {
          const newMessages = [...prev];
          if (newMessages[newMessages.length - 1].role === 'assistant') {
            newMessages[newMessages.length - 1].content = assistantMessage;
          }
          return newMessages;
        });
      }

      setIsLoading(false);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ]);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    sendMessage([...messages, userMessage]);
  };

  if (!isMounted) return null;

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 flex flex-col-reverse gap-3 z-40">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923072853163?text=Hello%20Nexiler,%20I%20need%20help%20with%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-pulse hover:animate-none flex justify-center relative"
            aria-label="Chat on WhatsApp"
          >
            {/* Glow background effect - Enhanced */}
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* WhatsApp Icon - With Background Circle */}
            <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer group-hover:shadow-green-500/50 group-hover:shadow-2xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
                <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/>
                <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/>
                <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
                <path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"/>
              </svg>
            </div>
          </a>

          {/* AI Chat Button */}
          <button
            onClick={onOpen}
            className="group animate-pulse hover:animate-none flex justify-center relative"
            aria-label="Open chat"
          >
            {/* Glow background effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Main button - Circle */}
            <div className="relative bg-gradient-to-r from-[#33BBCF] to-[#0066CC] text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer group-hover:shadow-cyan-500/50 group-hover:shadow-2xl">
              <BotMessageSquare size={32} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      )}

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 bg-black/60 z-40 sm:hidden"
            onClick={onClose}
          />
          
          {/* Chat window */}
          <div
            ref={chatContainerRef}
            className="
              fixed z-50 bg-gradient-to-b from-gray-900 via-gray-950 to-black flex flex-col border border-cyan-500/30 shadow-2xl
              bottom-0 right-0 left-0
              sm:inset-y-auto sm:bottom-6 sm:right-6 sm:rounded-2xl
              w-full sm:w-[340px] h-[calc(100vh-64px)] sm:h-[500px]
              rounded-t-3xl sm:rounded-2xl
              overflow-hidden
            "
          >
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-[#33BBCF] via-cyan-500 to-blue-600 text-white px-4 py-5 sm:px-6 sm:py-6 flex justify-between items-center flex-shrink-0 rounded-t-3xl sm:rounded-t-2xl">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 flex-shrink-0">
                <BotMessageSquare size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base leading-none">Nexiler AI</h3>
                <p className="text-xs text-white/80 mt-1">Always here to help</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-lg transition-all hover:scale-110 active:scale-95 flex-shrink-0 ml-2 bg-white/10"
              aria-label="Close chat"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-900 via-gray-950 to-black scrollbar-hide" data-messages-container>
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4 py-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full p-4 mb-4">
                  <BotMessageSquare size={36} className="text-cyan-400" strokeWidth={1.5} />
                </div>
                <p className="font-bold text-base text-white mb-2">Welcome to Nexiler AI</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">
                  Ask me anything about our services, projects, or pricing.
                </p>
                <div className="space-y-2 w-full">
                  {quickQueries.map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuery(query.text)}
                      className="w-full text-sm bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-500/60 text-cyan-300 rounded-lg px-3 py-3 transition-all active:scale-95 text-left leading-relaxed font-medium"
                    >
                      <span className="mr-2">{query.icon}</span>
                      {query.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                } animate-fade-in px-1`}
              >
                <div
                  className={`
                    px-4 py-3 rounded-lg text-sm
                    max-w-[88%] sm:max-w-xs
                    ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-lg shadow-cyan-500/30'
                        : 'bg-gray-800 text-gray-100 rounded-bl-none border border-gray-700 shadow-lg shadow-black/30'
                    }
                  `}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-xs font-semibold text-cyan-400">Nexiler AI</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap leading-relaxed text-sm">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start px-1">
                <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-lg rounded-bl-none border border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-700/50 bg-gradient-to-t from-black to-gray-950 p-4 sm:rounded-b-2xl flex-shrink-0 rounded-b-3xl sm:rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2.5 transition-all active:scale-95 shadow-lg shadow-cyan-500/30 disabled:shadow-none flex items-center justify-center flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        </>
      )}
    </>
  );
}
