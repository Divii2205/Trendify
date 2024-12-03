import { useState, useCallback } from 'react';
import { ChatbotService } from './chatbotService';

export const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = useCallback(async (message) => {
    const userMessage = {
      id: `msg-${Date.now()}`,
      text: message,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      const botResponse = await ChatbotService.processMessage(message);
      const botMessage = {
        id: `msg-${Date.now()}`,
        text: botResponse,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Message processing error:', error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const clearMessages = () => setMessages([]);

  return { messages, sendMessage, clearMessages, isProcessing };
};