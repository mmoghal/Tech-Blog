// Import the User, Post, and Comment models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Define the associations between the models
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Export the models
module.exports = {
  User,
  Comment,
  Post
};
