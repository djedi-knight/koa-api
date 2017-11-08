const Router = require('koa-router');
const Movie = require('../db/models/movie');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = '/api/v1/movies';

router.get(BASE_URL, async (ctx) => {
  try {
    // const movies = await queries.getAllMovies();
    const movies = await Movie.fetchAll();
    ctx.body = {
      status: 'success',
      data: movies
    };
  } catch (err) {
    console.log(err)
  }
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    // const movie = await queries.getSingleMovie(ctx.params.id);
    const movie = await Movie.where({id: ctx.params.id}).fetch();
    if (movie) {
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
});

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    // const movie = await queries.addMovie(ctx.request.body);
    const movie = await Movie.forge(ctx.request.body, {parse: true}).save();
    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: movie
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      errors: err.errors || {},
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
});

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const movie = await queries.updateMovie(ctx.params.id, ctx.request.body);
    if (movie.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
});

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const movie = await queries.deleteMovie(ctx.params.id);
    if (movie.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

module.exports = router;
