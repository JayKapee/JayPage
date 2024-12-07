const axios = require('axios');
const { sendMessage } = require('../handles/sendMessage');

module.exports = {
  name: 'cdp',
  description: 'get cdp image.',
  usage: 'Get cdp pics',
  author: 'Jay Ar',
  async execute(senderId, args, pageAccessToken) {
    const apiUrl = 'https://aryanchauhanapi.onrender.com/v1/cdp/get';

    try {
      // Send a message indicating that the image is being fetched
      await sendMessage(senderId, {
        text: ''
      }, pageAccessToken);

      // Fetch the couple DP from the API
      const response = await axios.get(apiUrl);
      const { male, female } = response.data;

      // Send the male DP image
      await sendMessage(senderId, {
        attachment: {
          type: 'image',
          payload: {
            url: male,
            is_reusable: true
          }
        }
      }, pageAccessToken);

      // Send the female DP image
      await sendMessage(senderId, {
        attachment: {
          type: 'image',
          payload: {
            url: female,
            is_reusable: true
          }
        }
      }, pageAccessToken);

    } catch (error) {
      console.error('Error fetching couple DP:', error);
      await sendMessage(senderId, {
        text: 'An error occurred while fetching the couple DP. Please try again later.'
      }, pageAccessToken);
    }
  }
};
