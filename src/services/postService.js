const { BlogPost, User, Category } = require('../models');

const insert = async (title, content) => {
    const newCategory = await BlogPost.create({ title, content });
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

const getPost = async (id) => {
    const allPosts = await BlogPost.findOne({
        where: { id },
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
    getPost,
};