const router = require('express').Router();
const userController = require('./controllers');

router.get('/', async (req, res) => {
  const users = await userController.getAllUsers();
  res.json(users);
})

module.exports = router;
