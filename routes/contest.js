var express = require('express');
var router = express.Router();

var ContestShort = require('./contest_short');
router.use('/', ContestShort);

var data = require('../test_base');

router.get('/', (req, res, next) => {
    res.render('contest', { data: data });
});

module.exports = router;
