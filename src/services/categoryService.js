const { Category } = require('../models');

const insert = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    insert,
    getAll,
};