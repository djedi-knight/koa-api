const Router = require('koa-router');
const User = require('../db/models/user');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = '/api/v1/users';

// router.get(BASE_URL, async (ctx) => {
//   try {
//     const movies = await Movie.fetchAll();
//     ctx.body = {
//       status: 'success',
//       data: movies
//     };
//   } catch (err) {
//     console.log(err)
//   }
// });

// router.get(`${BASE_URL}/:id`, async (ctx) => {
//   try {
//     const movie = await Movie.where({id: ctx.params.id}).fetch({require: true});
//     ctx.body = {
//       status: 'success',
//       data: movie
//     };
//   } catch (err) {
//     if (err.message == 'EmptyResponse') {
//       ctx.status = 404;
//       ctx.body = {
//         status: 'error',
//         message: 'That movie does not exist.'
//       };
//     } else {
//       ctx.status = 400;
//       ctx.body = {
//         status: 'error',
//         message: 'Sorry, an error has occurred.'
//       };
//     }
//   }
// });

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const user = await User.forge(ctx.request.body).save();
    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: user
    };
  } catch (err) {
    console.log('err', err);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      errors: err.errors || {},
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
});

// router.put(`${BASE_URL}/:id`, async (ctx) => {
//   try {
//     // const movie = await queries.updateMovie(ctx.params.id, ctx.request.body);
//     const movie = await Movie.where({id: ctx.params.id}).fetch({require: true});
//     const updatedMovie = await movie.save(ctx.request.body);
//     ctx.body = {
//       status: 'success',
//       data: updatedMovie
//     };
//   } catch (err) {
//     if (err.message == 'EmptyResponse') {
//       ctx.status = 404;
//       ctx.body = {
//         status: 'error',
//         message: 'That movie does not exist.'
//       };
//     } else {
//       ctx.status = 400;
//       ctx.body = {
//         status: 'error',
//         errors: err.errors || {},
//         message: 'Sorry, an error has occurred.'
//       };
//     }
//   }
// });

// router.delete(`${BASE_URL}/:id`, async (ctx) => {
//   try {
//     // const movie = await queries.deleteMovie(ctx.params.id);
//     const movie = await Movie.where({id: ctx.params.id}).destroy({require: true});
//     ctx.body = {
//       status: 'success',
//     };
//   } catch (err) {
//     if (err.message == 'No Rows Deleted') {
//       ctx.status = 404;
//       ctx.body = {
//         status: 'error',
//         message: 'That movie does not exist.'
//       };
//     } else {
//       ctx.status = 400;
//       ctx.body = {
//         status: 'error',
//         message: 'Sorry, an error has occurred.'
//       };
//     }
//   }
// });

module.exports = router;
