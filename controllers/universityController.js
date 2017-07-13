var models = require('../models');

exports.universityList = async (req, res, next) => {
    var unis = await models.University.findAll();
    res.render('unis', {title: 'Университеты', unis:unis});
};

exports.universityByName = async (req, res, next) => {
    var uni = await models.University.findOne({
        where: {name: req.params.short},
    });
    res.render('uni_page', {title: uni.name, uni:uni});
};

exports.facultyByName = async (req, res,, next) => {
    var fac = await models.Faculty.findOne({
        where: {name: req.params.fac},
    });
    res.render('fac_page', {title: fac.name, fac:fac});
};
