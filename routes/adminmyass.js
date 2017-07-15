var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async (req, res, next) => {
    var unis = await models.University.findAll();
    var facs = await models.Faculty.findAll();

    console.log(JSON.stringify(unis));

    res.render("admin/index", {
        unis: unis,
        facs: facs
    });
});

module.exports = router;
