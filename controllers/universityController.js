var models = require('../models');

exports.university_list = async function (req, res, next) {
    var unis = await models.University.findAll();
    res.render('universities', {title: 'Университеты', unis:unis});
};
