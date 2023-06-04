const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class CommentModel extends Model {}

CommentModel.init(
  {
    // Define comment model fields
  },
  {
    sequelize
  }
);

module.exports = CommentModel;
