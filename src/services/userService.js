const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const insert = async (info) => {
  const newUser = await User.create({ ...info });
  return newUser;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

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