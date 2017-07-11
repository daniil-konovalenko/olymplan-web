var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hi there user! <br></br> YO!');
});

module.exports = router;
