const router = require('express').Router();
module.exports = router;

const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');


router.get('/hotels', (req, res, next) => {
  Hotel.findAll()
       .then(hotel => {
         res.json(hotel);
       })
       .catch(next);
});

router.get('/restaurants', (req, res, next) => {
  Restaurant.findAll()
       .then(rest => {
         res.json(rest);
       })
       .catch(next);
});

router.get('/activities', (req, res, next) => {
  Activity.findAll()
       .then(act => {
         res.json(act);
       })
       .catch(next);
});
