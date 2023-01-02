const express = require('express');

const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/userValidate');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateUser, userController.userInsert);
router.get('/', validateJWT, userController.getAllUsers);
router.get('/:id', validateJWT, userController.userById);

module.exports = router;