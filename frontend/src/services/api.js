class Api {

  constructor() {throw new Error("This class cannot be instantiated.")};

  static async getDebts() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/debts/`);
      const debts = await response.json();

      return debts;
    } catch (error) {
      throw error;
    }
  };

  static async getUsers() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/`);
      const users = await response.json();

      return users;
    } catch (error) {
      throw error;
    }
  };

};

export default Api;
