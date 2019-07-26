/* globals describe it before after */

var request = require('supertest');
var app = require('../server'); 

describe('Api Homepage', function() {
    it('Testing Homepage', function(done) {
        request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                if (res.text.includes('Hello world')){
                    console.log("Yeah!");
                    return done();
                }
                done(); 
            });
    });
});


describe('Register Test', function() {
    it('Must Register an User', function (done) {
        request(app)
        .post('/api/users/register')
        .send({
            "email":"lennyhiggins@gmail.com",
             "password":"abc123."
         })
        .expect(201)
        .end(done);
      });
});


describe('Palindrome Test', function() {
    it('It must response success', function (done) {
        request(app)
        .post('/api/calculate/palindrome')
        .send({
            "palabra": "level"
        })
        .expect({
            "success": true,
            "message": "level es Palindrome"
        })
        .end(done);
      });
});

describe('Palindrome Test', function() {
    it('It must response unsuccess', function (done) {
        request(app)
        .post('/api/calculate/palindrome')
        .send({
            "palabra": "maria"
        })
        .expect({
            "success": false,
            "message": "maria NO es Palindrome"
        })
        .end(done);
      });
});