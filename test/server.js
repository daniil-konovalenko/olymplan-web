var request = require('supertest');

describe('loading express', function () {
    var app;
    beforeEach(function () {
        app = require('../app');
    });

    this.timeout(15000);

    //tests for all pages
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

    //tests for static
    it('responds to /stylesheets/style.css', function testRoot(done){
        request(app)
            .get('/stylesheets/style.css')
            .expect(200, done);
    });

    it('responds to /stylesheets/boxes_demo.sass', function testRoot(done){
        request(app)
            .get('/stylesheets/boxes_demo.sass')
            .expect(200, done);
    });

    it('responds to /stylesheets/constant.sass', function testRoot(done){
        request(app)
            .get('/stylesheets/constant.sass')
            .expect(200, done);
    });

    it('responds to /stylesheets/navbar.sass', function testRoot(done){
        request(app)
            .get('/stylesheets/navbar.sass')
            .expect(200, done);
    });

    it('responds to /stylesheets/style.sass', function testRoot(done){
        request(app)
            .get('/stylesheets/style.sass')
            .expect(200, done);
    });

    it('404 some random page', function testRandomPage(done){
        request(app)
            .get('/whatever')
            .expect(404, done);
    });
});
