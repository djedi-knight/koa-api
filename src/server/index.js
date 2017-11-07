const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

// define app and related variables
const app = new Koa();
const PORT = process.env.PORT || 1337;

// load middleware
app.use(bodyParser());

// load routes
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

// create server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
