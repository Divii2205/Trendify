import React from 'react';
import ChatInterface from '../components/ai-chatbot/ChatInterface';
import { COLOR_PALETTE } from '../utils/colorTheme';

const ChatbotPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        AI Fashion Assistant
      </h1>

      <div className="max-w-2xl mx-auto">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatbotPage;