const express = require('express');

const categoryController = require('../controllers/category.controller');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryController.creatCategory);
router.get('/', validateJWT, categoryController.getCategories);

module.exports = router;