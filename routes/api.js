var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Here you got api yo!');
});

module.exports = router;
