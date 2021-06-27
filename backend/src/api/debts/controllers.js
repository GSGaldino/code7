const Debt = require('./models/Debt');

module.exports = {
  async index(req, res) {

    Debt.find({}, (err, debts) => {
      // Initialize debts main Object
      var debtMap = [];

      // Populate debts to the main object
      debts.forEach((debt) => debtMap.push(debt));

      // Send to the client
      res.send(debtMap);
    });

  },

  async create(req, res, next) {
    // Get body params
    const { debt_id, user_id, debt_reason, debt_date, debt_value } = req.body;

    // Verify if all variables have been send
    if (!debt_id || !user_id || !debt_reason || !debt_date || !debt_value)
      return res.status(400).json({ message: "Missing required param. Required params are: debt_id, user_id, debt_reason, debt_date, debt_value" })

    try {
      // Define debt object based on mongodb model
      const debt = new Debt(req.body);

      // Save to cloud and return success response
      debt
        .save()
        .then(() => res.json({
          message: `Success created debt id: ${debt_id}`
        }));

    } catch (error) {
      next(error);
      throw error;
    }

  },

  async update(req, res) {
    const { debt_id } = req.params;
    const query = req.body;

    if (!debt_id)
      return res.status(400).json({message: "Missing required param: debt_id"})

    if (!query)
      return res.status(400).json({message: "Missing some field to update on request body."})

    try {
      Debt.findOneAndUpdate({debt_id: debt_id}, query, { upsert: false }, function (err, doc) {
        if (err) return res.send(500, { error: err });

        return res.json({ message: "Success updated" })
      });
    } catch (error) {
      res.status(500).send();
      throw error;
    }

  },

  async delete(req, res) {
    // Get debt_id from query
    const { debt_id } = req.params;

    if (!debt_id)
      return res.status(400).json({
        message: "Missing required param debt_id"
      });

    // Delete debt and returns itself to the variable
    const deleted = await Debt.findOneAndDelete({ debt_id: debt_id });

    // Return success response to the client
    res.json({
      message: `Success deleted debt id: ${deleted.debt_id}`
    });
  }

};
