const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create, 
    index,
}
//new flight create page
function newFlight(req, res) {
    res.render('flights/new');
}

// add new flight to db
function create(req, res) {
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }   
    const flight = new Flight(req.body)
    flight.save(function(err) {
        // if we don't redirect, the new page will be shown
        // with /flights in the address bar
        if(err) {
            console.log(err)
            return res.redirect('/flights/new')
        }
        res.redirect('/flights')
    })
}

//show all flights
function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', {
            flights 
        })
    })
}