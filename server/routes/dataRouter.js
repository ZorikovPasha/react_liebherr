const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/machinery', dataController.getMachinery.bind(dataController));
router.get('/articles', dataController.getArticles.bind(dataController));
router.post('/machinery', dataController.getSingleMachinery.bind(dataController));
router.post('/construction', dataController.getSingleConstruction.bind(dataController));
router.get('/constructions', dataController.getConstructions.bind(dataController));
router.post('/article', dataController.getSingleArticle.bind(dataController));

module.exports = router;