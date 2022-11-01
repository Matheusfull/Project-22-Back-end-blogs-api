require('dotenv/config');
const jwt = require('jsonwebtoken');
const { insert, getUsers, getUserById } = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const userController = async (req, res) => {
  const infoUser = req.body;

  /* const verifiUser = await getByEmail(infoUser.email);
  console.log(verifiUser);
  if (!verifiUser) {
      return res.status(409).json({ message: 'User already registereddddd' });
  } */

  const user = await insert(infoUser);

  if (!user) {
    return res.status(401).json({ message: 'Usuário não cadastrado' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json(users);
};

const userById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  userController,
  getAllUsers,
  userById,
};