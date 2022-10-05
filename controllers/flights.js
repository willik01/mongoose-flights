const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create, 
    index,
    show,
}
//new flight create page
function newFlight(req, res) {
    res.render('flights/new', {title: 'Add New Flight'});
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
        // console.log(flights)
        res.render('flights/index', {
            flights, 
            title: 'All Flights' 
        })
    })
}

//show flight details
function show(req, res) {
    const test = Flight.find({})
    console.log(test)
    Flight.findById(req.params.id, function(err, flight) {
        //attempting to sort destinations
        // flight.destinations.sort('arrival')
        // Flight.destinations.find({}).sort('arrival').exec((err, flight)=> {console.log('flight destinations: ', flight.destinations)});
        // Room.find({}).sort('-date').exec((err, docs) => { ... });

        res.render('flights/show', {title: 'Flight Detail', flight});
    })
}