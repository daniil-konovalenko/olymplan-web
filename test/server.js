var request = require('supertest');

describe('loading express', function () {
    var app;
    beforeEach(function () {
        app = require('../app');
    });
    

    it('responds to /', function testRoot(done){
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('404 some random page', function testRandomPage(done){
        request(app)
            .get('/whatever')
            .expect(404, done);
    });
});
