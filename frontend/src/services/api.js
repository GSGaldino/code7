class Api {

  constructor() { throw new Error("This class cannot be instantiated.") };

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

  static async addDebt(debt) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/debts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(debt)
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  };

  static async deleteDebt(debt_id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/debts/${debt_id}`, {
        method: "DELETE",
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

};

export default Api;
