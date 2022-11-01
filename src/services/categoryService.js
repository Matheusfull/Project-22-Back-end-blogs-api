const { Category } = require('../models');

const insert = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

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