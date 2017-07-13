var express = require('express');
var router = express.Router();
var models = require('../models/index');
var uniContoller = require('../controllers/universityController');
var uniShort = require('./uni_short');

router.use('/', uniShort);

router.get('/', uniContoller.university_list);


module.exports = router;
