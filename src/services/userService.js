const { User } = require('../models');

// Requisito 3 - Para fazer o login
const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

// Requisito 4 - para criar um usuário e de imediato ter um token
const insert = async (info) => {
  const newUser = await User.create({ ...info });
  return newUser;
};

// Requisito 5 - retorna todos os usuários
const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

// Requisito 6 - retorna o usuário com o id passado na rota
const getUserById = async (id) => {
  const users = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
  return users;
};

module.exports = {
    getByEmail,
    insert,
    getUsers,
    getUserById,
};
