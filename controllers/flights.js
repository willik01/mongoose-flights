const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create, 

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
    console.log(flight)

}