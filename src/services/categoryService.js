const { Category } = require('../models');

// requisito 8
const insert = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

// requisito 9
const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

/* const getId = async (id) => {
    const category = await Category.findOne({
        where: { id },
    });
    return category;
}; */

module.exports = {
    insert,
    getAll,
    // getId,
};