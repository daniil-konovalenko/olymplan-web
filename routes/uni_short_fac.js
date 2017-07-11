var express = require('express');
var router = express.Router();

router.get('/:short/:fac', (req, res, next) => {
    res.send(req.params.short + ': ' + req.params.fac);
});

module.exports = router;
