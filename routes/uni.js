var express = require('express');
var router = express.Router();

//var uniShort = require('./uni_short');
//router.use('/uni/:short', uniShort);

router.get('/', (req, res, next) => {
    res.send('uni yo!');
});

router.get('/:uni_short', (req, res, next) => {
    res.send(req.params.uni_short);
});
module.exports = router;
