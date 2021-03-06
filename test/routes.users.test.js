process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

// const User = require('../src/server/db/models/user');

describe('routes : users', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  // describe('GET /api/v1/users', () => {
  //   it('should return all users', (done) => {
  //     chai.request(server)
  //     .get('/api/v1/users')
  //     .end((err, res) => {
  //       // there should be no errors
  //       should.not.exist(err);
  //       // there should be a 200 status code
  //       res.status.should.equal(200);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "success"}
  //       res.body.status.should.eql('success');
  //       // the JSON response body should have a
  //       // key-value pair of {"data": [3 movie objects]}
  //       res.body.data.length.should.eql(3);
  //       // the first object in the data array should
  //       // have the right keys
  //       res.body.data[0].should.include.keys(
  //         'id', 'email'
  //       );
  //       done();
  //     });
  //   });
  // });

  // describe('GET /api/v1/movies/:id', () => {
  //   it('should throw an error if the movie does not exist', (done) => {
  //     chai.request(server)
  //     .get('/api/v1/movies/0')
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(404);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('That movie does not exist.');
  //       done();
  //     });
  //   });
  //
  //   it('should throw an error if the movie ID is not valid', (done) => {
  //     chai.request(server)
  //     .get('/api/v1/movies/test')
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 400 status code
  //       res.status.should.equal(400);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "Sorry, an error has occurred."}
  //       res.body.message.should.eql('Sorry, an error has occurred.');
  //       done();
  //     });
  //   });
  //
  //   it('should respond with a single movie', (done) => {
  //     chai.request(server)
  //     .get('/api/v1/movies/1')
  //     .end((err, res) => {
  //       // there should be no errors
  //       should.not.exist(err);
  //       // there should be a 200 status code
  //       res.status.should.equal(200);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "success"}
  //       res.body.status.should.eql('success');
  //       // the JSON response body should have a
  //       // key-value pair of {"data": movie object}
  //       res.body.data.should.include.keys(
  //         'id', 'name', 'genre', 'rating', 'explicit'
  //       );
  //       done();
  //     });
  //   });
  // });

  describe('POST /api/v1/users', () => {
    // it('should throw an error if the payload is missing required data', (done) => {
    //   chai.request(server)
    //   .post('/api/v1/movies')
    //   .send()
    //   .end((err, res) => {
    //     // there should an error
    //     should.exist(err);
    //     // there should be a 400 status code
    //     res.status.should.equal(400);
    //     // the response should be JSON
    //     res.type.should.equal('application/json');
    //     // the JSON response body should have a
    //     // key-value pair of {"status": "error"}
    //     res.body.status.should.eql('error');
    //     // the JSON response body should have a message key
    //     should.exist(res.body.message);
    //     // the JSON response body should have a
    //     // key-value pair of {"errors": errors object}
    //     res.body.errors.should.include.keys(
    //       'name', 'genre', 'rating', 'explicit'
    //     );
    //     done();
    //   });
    // });

    // it('should throw an error if the payload contains malformed data', (done) => {
    //   chai.request(server)
    //   .post('/api/v1/movies')
    //   .send({
    //     name: true,
    //     genre: 10,
    //     rating: 'five',
    //     explicit: false
    //   })
    //   .end((err, res) => {
    //     // there should an error
    //     should.exist(err);
    //     // there should be a 400 status code
    //     res.status.should.equal(400);
    //     // the response should be JSON
    //     res.type.should.equal('application/json');
    //     // the JSON response body should have a
    //     // key-value pair of {"status": "error"}
    //     res.body.status.should.eql('error');
    //     // the JSON response body should have a message key
    //     should.exist(res.body.message);
    //     // the JSON response body should have a
    //     // key-value pair of {"errors": errors object}
    //     res.body.errors.should.include.keys(
    //       'rating'
    //     );
    //     done();
    //   });
    // });

    it('should return the user that was added', (done) => {
      chai.request(server)
      .post('/api/v1/users')
      .send({
        email: 'user@email.com',
        password: 'password'
      })
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 201 status code
        // (indicating that something was "created")
        res.status.should.equal(201);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {"status": "success"}
        res.body.status.should.eql('success');
        // the JSON response body should have a
        // key-value pair of {"data": user object}
        res.body.data.should.include.keys(
          'id', 'email'
        );
        done();
      });
    });
  });

  // describe('PUT /api/v1/movies/:id', () => {
  //   it('should throw an error if the movie does not exist', (done) => {
  //     chai.request(server)
  //     .put('/api/v1/movies/0')
  //     .send({
  //       rating: 9
  //     })
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(404);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('That movie does not exist.');
  //       done();
  //     });
  //   });
  //
  //   it('should throw an error if the movie ID is not valid', (done) => {
  //     chai.request(server)
  //     .put('/api/v1/movies/test')
  //     .send({
  //       rating: 9
  //     })
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(400);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('Sorry, an error has occurred.');
  //       done();
  //     });
  //   });
  //
  //   it('should throw an error if the payload contains malformed data', (done) => {
  //     chai.request(server)
  //     .put('/api/v1/movies/1')
  //     .send({
  //       rating: 'one'
  //     })
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(400);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('Sorry, an error has occurred.');
  //       done();
  //     });
  //   });
  //
  //   it('should return the movie that was updated', (done) => {
  //     // knex('movies')
  //     // .select('*')
  //     Movie.where({id: 1}).fetch()
  //     .then((movie) => {
  //       chai.request(server)
  //       .put(`/api/v1/movies/${movie.id}`)
  //       .send({
  //         rating: movie.rating + 1
  //       })
  //       .end((err, res) => {
  //         // there should be no errors
  //         should.not.exist(err);
  //         // there should be a 200 status code
  //         res.status.should.equal(200);
  //         // the response should be JSON
  //         res.type.should.equal('application/json');
  //         // the JSON response body should have a
  //         // key-value pair of {"status": "success"}
  //         res.body.status.should.eql('success');
  //         // the JSON response body should have a
  //         // key-value pair of {"data": 1 movie object}
  //         res.body.data.should.include.keys(
  //           'id', 'name', 'genre', 'rating', 'explicit'
  //         );
  //         // ensure the movie was in fact updated
  //         const updatedMovie = res.body.data;
  //         updatedMovie.rating.should.not.eql(movie.rating);
  //         done();
  //       });
  //     });
  //   });
  // });

  // describe('DELETE /api/v1/movies/:id', () => {
  //   it('should throw an error if the movie does not exist', (done) => {
  //     chai.request(server)
  //     .delete('/api/v1/movies/0')
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(404);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('That movie does not exist.');
  //       done();
  //     });
  //   });
  //
  //   it('should throw an error if the movie ID is not valid', (done) => {
  //     chai.request(server)
  //     .delete('/api/v1/movies/test')
  //     .end((err, res) => {
  //       // there should an error
  //       should.exist(err);
  //       // there should be a 404 status code
  //       res.status.should.equal(400);
  //       // the response should be JSON
  //       res.type.should.equal('application/json');
  //       // the JSON response body should have a
  //       // key-value pair of {"status": "error"}
  //       res.body.status.should.eql('error');
  //       // the JSON response body should have a
  //       // key-value pair of {"message": "That movie does not exist."}
  //       res.body.message.should.eql('Sorry, an error has occurred.');
  //       done();
  //     });
  //   });
  //
  //   it('should return the movie that was deleted', (done) => {
  //     // knex('movies')
  //     // .select('*')
  //     Movie.fetchAll()
  //     .then((movies) => {
  //       const movieObject = movies.at(0);
  //       const lengthBeforeDelete = movies.length;
  //       chai.request(server)
  //       .delete(`/api/v1/movies/${movieObject.id}`)
  //       .end((err, res) => {
  //         // there should be no errors
  //         should.not.exist(err);
  //         // there should be a 200 status code
  //         res.status.should.equal(200);
  //         // the response should be JSON
  //         res.type.should.equal('application/json');
  //         // the JSON response body should have a
  //         // key-value pair of {"status": "success"}
  //         res.body.status.should.eql('success');
  //         // ensure the movie was in fact deleted
  //         // knex('movies').select('*')
  //         Movie.fetchAll()
  //         .then((updatedMovies) => {
  //           updatedMovies.length.should.eql(lengthBeforeDelete - 1);
  //           done();
  //         });
  //       });
  //     });
  //   });
  // });

});
