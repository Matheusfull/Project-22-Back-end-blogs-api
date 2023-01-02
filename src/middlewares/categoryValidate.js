const { getAll } = require('../services/categoryService');

const categoryValidate = async (req, res, next) => {
    // const { categoryIds } = req.body;
    const { title, content } = req.body;

    const msg = 'Some required fields are missing';

    if (!title || !content) return res.status(400).json({ message: msg });

    const categories = await getAll();

    // const validate = categoryIds.some((id) => id === categories);

    console.log(categories);

    // if (!validate) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    next();
};

module.exports = {
    categoryValidate,
};