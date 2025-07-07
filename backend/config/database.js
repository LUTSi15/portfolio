// require('dotenv').config();

// module.exports = {
//   HOST: process.env.DB_HOST,
//   USER: process.env.DB_USER,
//   PASSWORD: process.env.DB_PASSWORD,
//   DB: process.env.DB_NAME,
//   dialect: process.env.DB_DIALECT || 'mysql',
// };

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load variables from .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || null, // If password is empty
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
  }
);

module.exports = sequelize;

