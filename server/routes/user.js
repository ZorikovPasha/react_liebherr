const express = require('express');
const router = express.Router();

const dataController = require('../controllers/user');

router.post('/question', dataController.makeRequest);
router.post('/order', dataController.processOrder);

module.exports = router;
