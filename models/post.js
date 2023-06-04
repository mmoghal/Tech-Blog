// Import the necessary modules
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Post model
class Post extends Model {}

Post.init(
  {
    // Define the model fields and their data types
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

// Export the Post model
module.exports = Post;
