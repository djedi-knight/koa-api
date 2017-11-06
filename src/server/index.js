const Koa = require('koa');
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

// define app
const app = new Koa();
const PORT = process.env.PORT || 1337;

// load routes into app
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

// create server instance from app
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
