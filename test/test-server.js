global.DATABASE_URL = 'mongodb://cgberlin:Vagrant23@ds041516.mlab.com:41516/shopping-list-cgberlin';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var Item = require('../models/item');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Shopping List', function() {
    before(function(done) {
        server.runServer(function() {
            Item.create({name: 'Broad beans'},
                        {name: 'Tomatoes'},
                        {name: 'Peppers'}, function() {
                done();
            });
        });
    });


  describe('Shopping List', function() {
    it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                should.equal(err, null);
                done();
            });
    });

    it('should add an item on POST', function(done) {
        chai.request(app)
            .post('/items')
            .send({'name': 'Kale'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);
                done();
            });
    });


  it('should delete an item on DELETE', function(done){
      chai.request(app)
          .delete('/items/1')
          .end(function(err, res){
            done();
          });
  });

  it('should edit an item on PUT', function(done){
      chai.request(app)
          .put('/items/5')
          .send({'name': 'spinach'})
          .end(function(err, res){
          
            done();
          });
  });
});
after(function(done) {
    Item.remove(function() {
        done();
    });
});
});
