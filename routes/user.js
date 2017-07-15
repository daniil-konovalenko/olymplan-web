var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render("user/settings");
});

router.get('/step1', (req, res, next) => {
    res.render("user/register-step1");
});

router.get('/step2', (req, res, next) => {
    res.render("user/register-step2");
});

module.exports = router;
