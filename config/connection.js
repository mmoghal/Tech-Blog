// Load environment variables from .env file
require('dotenv').config();

// Import Sequelize library
const Sequelize = require('sequelize');

// Create a new Sequelize instance based on the environment variables
const sequelize = process.env.CLEARDB_DATABASE_URL
  ? new Sequelize(process.env.CLEARDB_DATABASE_URL) // If CLEARDB_DATABASE_URL environment variable is present, use it for the connection
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: process.env.DB_HOST || 'localhost', // Use DB_HOST environment variable if present, otherwise use 'localhost'
      port: process.env.DB_PORT || 3306, // Use DB_PORT environment variable if present, otherwise use 3306
      dialect: 'mysql', // Use MySQL dialect
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the sequelize instance
module.exports = sequelize;
