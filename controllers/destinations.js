const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      // We can push subdocs into Mongoose arrays
      flight.destinations.push(req.body);
      // Save any changes made to the movie doc
      flight.save(function(err) {
        // Respond to the Request (redirect if data has been changed)
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }