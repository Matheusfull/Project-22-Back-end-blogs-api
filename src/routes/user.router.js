const express = require('express');

const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/userValidate');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateUser, userController.userController);
router.get('/', validateJWT, userController.getAllUsers);

module.exports = router;