require('dotenv/config');
const { insert, getAll } = require('../services/categoryService');

const creatCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const newCategory = await insert(name);

    return res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getCategories = async (_req, res) => {
  try {
    const getAllCategories = await getAll();

    if (!getAllCategories) return res.status(404).json({ message: 'nenhuma categoria encontrada' });

    return res.status(200).json(getAllCategories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  creatCategory,
  getCategories,
};