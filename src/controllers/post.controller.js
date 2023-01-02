require('dotenv/config');
const { insert, getAllPosts, getPost } = require('../services/postService');

const creatPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    /* const msg = 'Some required fields are missing';

    if (!title || !content || !categoryIds) return res.status(400).json({ message: msg }); */

    const newPost = await insert(title, content);

    return res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const allPosts = await getAllPosts();

    return res.status(200).json(allPosts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getPost(id);

     if (post === null) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: e.message });
  }
};

module.exports = {
  creatPost,
  getPosts,
  getPostById,
};