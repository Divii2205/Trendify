import React, { useState, useRef, useEffect } from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';
import ChatMessage from './ChatMessage';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };

    const newAIMessage = {
      id: Date.now() + 1,
      text: `Response to: ${inputMessage}`,
      sender: 'ai'
    };

    setMessages([...messages, newUserMessage, newAIMessage]);
    setInputMessage('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div 
      className="flex flex-col h-[600px] rounded-lg"
      style={{ 
        backgroundColor: COLOR_PALETTE.white,
        border: `1px solid ${COLOR_PALETTE.pastelBlue}`
      }}
    >
      <div 
        className="flex-grow overflow-y-auto p-4 space-y-4"
        style={{ backgroundColor: COLOR_PALETTE.lightGray }}
      >
        {messages.map(message => (
          <ChatMessage 
            key={message.id} 
            message={message} 
          />
        ))}
        <div ref={chatEndRef} />
      </div>
      
      <div 
        className="p-4 border-t flex items-center"
        style={{ borderColor: COLOR_PALETTE.pastelBlue }}
      >
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask your fashion assistant..."
          className="flex-grow p-2 mr-2 rounded border"
          style={{ borderColor: COLOR_PALETTE.pastelBlue }}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          onClick={handleSendMessage}
          className="px-4 py-2 rounded"
          style={{ 
            backgroundColor: COLOR_PALETTE.blushPink,
            color: COLOR_PALETTE.white
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;