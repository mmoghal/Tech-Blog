const models = require('./models');
const UserModel = require('./user');
const PostModel = require('./post');
const CommentModel = require('./comment');

PostModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

PostModel.hasMany(CommentModel, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

CommentModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  UserModel,
  CommentModel,
  PostModel,
  ...models
};
