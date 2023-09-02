const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/machinery', dataController.getMachinery);
router.get('/articles', dataController.getArticles);
router.get('/articles/ids', dataController.getArticlesIds);
router.post('/machinery', dataController.getSingleMachinery);
router.post('/construction', dataController.getSingleConstruction);
router.get('/constructions', dataController.getConstructions);
router.get('/constructions/ids', dataController.getConstructionsIds);
router.post('/article', dataController.getSingleArticle);

module.exports = router;
