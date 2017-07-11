var express = require('express');
var router = express.Router();

var ContestShort = require('./contest_short');
router.use('/', ContestShort);

router.get('/', (req, res, next) => {
    res.send('contest page yo!');
});

module.exports = router;
