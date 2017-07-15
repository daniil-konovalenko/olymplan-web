var express = require('express');
var router = express.Router();
var models = require('../models/index');
var uniContoller = require('../controllers/universityController');

router.get('/', uniContoller.universityList);

router.get('/:short', uniContoller.universityByName);

router.get('/:short/:fac', uniContoller.facultyByName);

module.exports = router;
