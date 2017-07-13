var request = require('supertest');

describe('loading express', function () {
    var app;
    beforeEach(async function () {
        app = require('../app');
    });

    //time for loading express
    this.timeout(5000);

    //tests all pages
    it('responds to /', function testRoot(done){
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('responds to /api', function testRoot(done){
        request(app)
            .get('/api')
            .expect(200, done);
    });
    it('responds to /adminmyass', function testRoot(done){
        request(app)
            .get('/adminmyass')
            .expect(200, done);
    });
    it('responds to /contest', function testRoot(done){
        request(app)
            .get('/contest')
            .expect(200, done);
    });
    it('responds to /uni', function testRoot(done){
        request(app)
            .get('/uni')
            .expect(200, done);
    });
    it('responds to /uni/:random uni', function testRoot(done){
        request(app)
            .get('/uni/some')
            .expect(200, done);
    });
    it('responds to /uni/:random uni/: randomm faculy', function testRoot(done){
        request(app)
            .get('/uni/some/some')
            .expect(200, done);
    });
    it('responds to /uni/user', function testRoot(done){
        request(app)
            .get('/uni/user')
            .expect(200, done);
    });

    //tests static
    it('responds to /stylesheets/style.css', function testRoot(done){
        request(app)
            .get('/stylesheets/style.css')
            .expect(200, done);
    });

    it('responds to /stylesheets/boxes_demo.css', function testRoot(done){
        request(app)
            .get('/stylesheets/boxes_demo.css')
            .expect(200, done);
    });

    it('404 some random page', function testRandomPage(done){
        request(app)
            .get('/whatever')
            .expect(404, done);
    });
});
