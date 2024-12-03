import React from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const ChatMessage = ({ message }) => {
  const isUserMessage = message.sender === 'user';

  return (
    <div 
      className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`max-w-[70%] p-3 rounded-lg ${
          isUserMessage 
            ? 'bg-blush-pink text-white' 
            : 'bg-pastel-blue text-black'
        }`}
        style={{ 
          backgroundColor: isUserMessage 
            ? COLOR_PALETTE.blushPink 
            : COLOR_PALETTE.pastelBlue,
          color: isUserMessage ? 'white' : 'black'
        }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;