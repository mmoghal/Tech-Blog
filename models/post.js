const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class PostModel extends Model {}

PostModel.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = PostModel;
