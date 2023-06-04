const { PostModel } = require('../models');

const postData = [
  { title: 'Post 1', body: 'Lorem ipsum dolor sit amet' },
  { title: 'Post 2', body: 'Lorem ipsum dolor sit amet' },
  // Add more seed data as needed
];

const seedPosts = async () => {
  await PostModel.bulkCreate(postData);
};

module.exports = seedPosts;
