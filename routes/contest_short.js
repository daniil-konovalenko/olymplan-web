var express = require('express');
var router = express.Router();

router.get('/:short', (req, res, next) => {
    res.send(req.params.short);
});

module.exports = router;
