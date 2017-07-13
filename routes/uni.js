var express = require('express');
var router = express.Router();
var models = require('../models/index');
var uniContoller = require('../controllers/universityController');


router.get('/', (req, res, next) => {
    res.send('uni')
});

router.get('/all', uniContoller.university_list);

router.get('/:short', (req, res, next) => {
    res.send(req.params.short);
});

router.get('/:short/:fac', (req, res, next) => {
    res.send(req.params.short + ': ' + req.params.fac);
});


module.exports = router;
