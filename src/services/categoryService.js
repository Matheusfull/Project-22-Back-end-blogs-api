const { Category } = require('../models');

const insert = async (name) => {
    const newCategory = await Category.create({ name });
    console.log('oi oi ');
    return newCategory;
};

module.exports = {
    insert,
};