var express = require('express');
var router = express.Router();

var UniShortFac = require('./uni_short_fac');

router.use('/', UniShortFac)

router.get('/:short', (req, res, next) => {
    res.send(req.params.short);
});

module.exports = router;