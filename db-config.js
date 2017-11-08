const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    database: 'koa_api_test',
    username: 'sdaichendt',
    options: {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432'
    }
  },
  development: {
    database: 'koa_api',
    username: 'sdaichendt',
    options: {
      dialect: 'postgres',
      host: 'localhost',
      port: '5432'
    }
  }
};
