const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const insert = async (info) => {
  const newUser = await User.create({ ...info });
  return newUser;
};

module.exports = {
    getByEmail,
    insert,
};