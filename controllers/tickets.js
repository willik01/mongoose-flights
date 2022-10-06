const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log("req.params.id", req.params.id)
        req.body.flight = flight._id
      Ticket.create(req.body, function (err, ticket) {
        console.log("req.body", req.body)
          res.redirect(`/flights/${flight._id}`);

      });
      //   NOT NEEDED WITH CREATE? Save any changes made to the ticket doc
    //   NOT NEEDED WITH CREATE? Ticket.save(function(err) {
        // Respond to the Request (redirect if data has been changed)
      });
    // });
  }