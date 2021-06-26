const express = require('express');

const users = require('./users');
const debts = require('./debts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API'
  });
});

router.use('/users', users);
router.use('/debts', debts);

module.exports = router;
