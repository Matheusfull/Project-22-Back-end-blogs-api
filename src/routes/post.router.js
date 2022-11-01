const express = require('express');

const postController = require('../controllers/post.controller');
const validateJWT = require('../auth/validateJWT');
// const validateCategory = require('../middlewares/categoryValidate');

const router = express.Router();

router.post('/', validateJWT, /* validateCategory */ postController.creatPost);
router.get('/', validateJWT, postController.getPosts);

module.exports = router;