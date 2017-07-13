var express = require('express');
var router = express.Router();
var models = require('../models/index');

var uniShort = require('./uni_short');

router.use('/', uniShort);

router.get('/', /* async */ (req, res, next) => {
    models.University.findAll({}).then(function(todos) {
        res.json(todos);
    });
    /*

University.findOne({where: }).then((data) =>  {
    res.send(data);
})

var data = await University.findOne({where:});
JSON.stringify(data);

    */

});

module.exports = router;
