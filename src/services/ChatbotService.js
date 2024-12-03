class ChatbotService {
    static async generateResponse(userMessage) {
      const responses = [
        'That sounds interesting!',
        'Could you tell me more?',
        'I understand your perspective.',
        'Let me think about that.'
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  
    static async processMessage(message) {
      try {
        const botResponse = await this.generateResponse(message);
        return botResponse;
      } catch (error) {
        return 'Sorry, I encountered an error processing your message.';
      }
    }
}
  
export default ChatbotService;