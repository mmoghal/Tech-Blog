// Import the necessary dependencies from Sequelize
const { Sequelize, Model, DataTypes } = require('sequelize');

// Import the Sequelize instance representing the database connection
const sequelize = require('../config/connection');

// Define the Comment model as an extension of the Sequelize Model class
class Comment extends Model {}

// Initialize the Comment model with its attributes
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;
