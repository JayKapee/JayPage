const axios = require('axios');
const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'ai',
  description: 'Interact with GPT-4o',
  usage: 'gpt4 [your message]',
  author: 'coffee',

  async execute(senderId, args, pageAccessToken) {
    const prompt = args.join(' ');
    if (!prompt) return sendMessage(senderId, { text: "Usage: gpt4 <question>" }, pageAccessToken);

    try {
      const { data: { response } } = await axios.get(`https://api.kenliejugarap.com/blackbox-gpt4o/?text=${encodeURIComponent(prompt)}`);
      
      // Format the response
      const formattedResponse = `🤖 • JayChat\n・──── >ᴗ< ────・\n${response}\n・───────────・`;
      
      sendMessage(senderId, { text: formattedResponse }, pageAccessToken);
    } catch {
      sendMessage(senderId, { text: 'There was an error generating the content. Please try again later.' }, pageAccessToken);
    }
  }
};
