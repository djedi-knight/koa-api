const knex = require('../connection');
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf.Model.extend({
  tableName: 'movies'
});
