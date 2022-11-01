require('dotenv/config');
const { insert, getAllPosts } = require('../services/postService');

const creatPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;

    const msg = 'Some required fields are missing';

    if (!title || !content || !categoryIds) return res.status(400).json({ message: msg });

    const newPost = await insert(title, content, categoryIds);

    return res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPosts = async (req, res) => {
  try {
    const allPosts = await getAllPosts();

    return res.status(200).json(allPosts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  creatPost,
  getPosts,
};