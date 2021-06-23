const axios = require('axios');

module.exports = {
  async getAllUsers() {
    try {
      const response = await axios(`${process.env.API_URL}/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
