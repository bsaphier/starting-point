var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/options', function (req, res, next) {

    Promise.all([
        Hotel.findAll(),
        Restaurant.findAll(),
        Activity.findAll()
    ])
        .spread(function (hotels, restaurants, activities) {
            res.send({
                hotels: hotels,
                restaurants: restaurants,
                activities: activities
            });
        });

});

module.exports = router;
