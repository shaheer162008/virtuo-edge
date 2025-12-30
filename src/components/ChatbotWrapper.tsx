'use client';

import { useState } from 'react';
import AIChat from '@/components/AIChat';
export default function ChatbotWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chat Button - Only visible when chat is closed */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center group"
          aria-label="Open AI Assistant"
          title="Chat with our AI Assistant"
        >
          {/* Message Circle Icon */}
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-pulse opacity-75"></span>
        </button>
      )}
      {isChatOpen && (
        <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
}
