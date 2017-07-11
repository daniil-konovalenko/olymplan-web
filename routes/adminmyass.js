var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Heeeeey... Seems like u r goin to admin me!');
});

module.exports = router;
