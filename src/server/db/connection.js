const environment = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
// const config = require('../../../knexfile.js')[environment];
 const config = require('../../../db-config.js')[environment];

// module.exports = require('knex')(config);
module.exports = new Sequelize(config);
