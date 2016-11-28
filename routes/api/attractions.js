const router = require('express').Router();

const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');

router.get('/api/hotels', (req, res, next) => {
  Hotel.findAll()
       .then(hotel => {
         res.json(hotel);
       })
       .catch(next);
});

router.get('/api/restaurants', (req, res, next) => {
  Restaurant.findAll()
       .then(rest => {
         res.json(rest);
       })
       .catch(next);
});

router.get('/api/activities', (req, res, next) => {
  Activity.findAll()
       .then(act => {
         res.json(act);
       })
       .catch(next);
});

module.exports = router;
