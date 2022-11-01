const { BlogPost, User, Category } = require('../models');

const insert = async (title, content, categoryIds) => {
    const newCategory = await BlogPost.create({ title, content, categoryIds });
    return newCategory;
};

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
        include: [
            {
            model: User, as: 'user', attributes: { exclude: ['password'] },
          },
          {
            model: Category, as: 'categories', through: { attributes: [] },
          },
        ],
          
    });

    return allPosts;
};

module.exports = {
    insert,
    getAllPosts,
};