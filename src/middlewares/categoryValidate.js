/* const { getId } = require('../services/categoryService');

const categoryValidate = (req, res, next) => {
    const { categoryIds } = req.body;
    const validate = categoryIds.some((id) => getId(id));

    if (!validate) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    next();
};

module.exports = {
    categoryValidate,
}; */