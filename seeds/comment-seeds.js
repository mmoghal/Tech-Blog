const { CommentModel } = require('../models');

const commentData = [
  { text: 'Comment 1', postId: 1, userId: 1 },
  { text: 'Comment 2', postId: 2, userId: 2 },
  // Add more seed data as needed
];

const seedComments = async () => {
  await CommentModel.bulkCreate(commentData);
};

module.exports = seedComments;
