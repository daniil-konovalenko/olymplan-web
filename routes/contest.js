var express = require('express');
var router = express.Router();

var uniShort = require('./uni_short');
router.use('/', uniShort);

router.get('/', (req, res, next) => {
    res.send('contest page yo!');
});

module.exports = router;
