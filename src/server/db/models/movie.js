const Schema = require('bookshelf-schema');
const Fields = require('bookshelf-schema/lib/fields');

// load bookshelf
const knex = require('../connection');
const bookshelf = require('bookshelf')(knex);

// load bookshelf Schema plugin
bookshelf.plugin(Schema());

module.exports = bookshelf.Model.extend({
  tableName: 'movies'
}, {
  schema: [
    Fields.StringField('name', {required: true}),
    Fields.StringField('genre', {required: true}),
    Fields.IntField('rating', {required: true, natural: true}),
    Fields.BooleanField('explicit', {required: true})
  ]
});
