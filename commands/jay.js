const axios = require('axios');

module.exports = {
  name: 'jayai',
  description: 'Ask a question to chatgpt',
  author: 'AljurGwapo',
  async execute(senderId, args, pageAccessToken, sendMessage) {
    const prompt = args.join(' ');
    if (prompt === "") {
      sendMessage(senderId, { text: "Usage: /gpt4 <question>" }, pageAccessToken);
      return; // Ensure the function doesn't continue
    }
    // Inform the user na Yung text is being generated
    sendMessage(senderId, { text: 'Generating content... Please wait.' }, pageAccessToken);
    try {
      const apiUrl = 'https://kaiz-apis.gleeze.com/api/gpt-4o?q=' + encodeURIComponent(prompt) + '&uid=' + senderId;
      const response = await axios.get(apiUrl);
      const text = response.data.response;
      sendMessage(senderId, { text: "GPT4 BY CHATGPT:\n\n" + text }, pageAccessToken);
    } catch (error) {
      console.error('Error calling GPT-4 API:', error);
      sendMessage(senderId, { text: 'There was an error generating the content. Please try again later.' }, pageAccessToken);
    }
  }
};
