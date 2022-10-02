const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightsCtrl.new);
// POST - create new flight
router.post('/', flightsCtrl.create);


module.exports = router;
