const express = require('express');

const postController = require('../controllers/post.controller');
const validateJWT = require('../auth/validateJWT');
const { categoryValidate } = require('../middlewares/categoryValidate');

const router = express.Router();

router.post('/', validateJWT, categoryValidate, postController.creatPost);
router.get('/', validateJWT, postController.getPosts);
router.get('/:id', validateJWT, postController.getPostById);

module.exports = router;