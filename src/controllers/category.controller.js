require('dotenv/config');
const { insert, getAll } = require('../services/categoryService');

// Requisito 8
const creatCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const newCategory = await insert(name);

    if (!newCategory) return res.status(404).json({ message: 'nenhuma categoria cadastrada' });

    return res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

// Requisito 9
const getCategories = async (_req, res) => {
  try {
    const getAllCategories = await getAll();

    if (!getAllCategories) return res.status(404).json({ message: 'nenhuma categoria encontrada' });

    return res.status(200).json(getAllCategories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  creatCategory,
  getCategories,
};

/*
Requisito 8
- Vamos pegar o nome que vem no corpo da requisição e mandar para a função insert na model
- O retorno da model vamos enviar como resposta
obs: Caso o nome não seja informado no corpo, vamos avisar que precisa.
*/

/*
Requisito 9
Raciocínio similar ao anterior, só que não passamos nada na requsição, pega pegamos todas as categorias que vêm de função na model.
*/