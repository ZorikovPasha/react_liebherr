const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/machinery', dataController.getMachinery);
router.get('/articles', dataController.getArticles);
router.post('/machinery', dataController.getSingleMachinery);
router.post('/construction', dataController.getSingleConstruction);
router.get('/constructions', dataController.getConstructions);
router.post('/article', dataController.getSingleArticle);
router.post('/question', dataController.makeRequest);

module.exports = router;
