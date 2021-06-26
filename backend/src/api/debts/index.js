const router = require('express').Router();
const debtController = require('./controllers');

// Create 
router.post("/", debtController.create);

// Read
router.get("/", debtController.index);

// Update
router.put("/:debt_id", debtController.update);

// Delete
router.delete("/:debt_id", debtController.delete);

module.exports = router;
