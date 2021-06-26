const mongoose = require('mongoose');

const Debt = mongoose.model('Debt', {
  debt_id: Number, 
  user_id: Number, 
  debt_reason: String, 
  debt_date: String, 
  debt_value: String
});

module.exports = Debt;
