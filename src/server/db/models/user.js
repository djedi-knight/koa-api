const Schema = require('bookshelf-schema');
const Fields = require('bookshelf-schema/lib/fields');

// load bookshelf
const knex = require('../connection');
const bookshelf = require('bookshelf')(knex);

// load bookshelf plugins
bookshelf.plugin(Schema());

module.exports = bookshelf.Model.extend({
  tableName: 'users'
}, {
  schema: [
    Fields.EmailField('email', {required: true}),
    Fields.EncryptedStringField('password', {required: true})
  ]
});
