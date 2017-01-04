var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Catering Service",
            "description":"Click to",
            "link": '/CateringService'
        },
        {
            "name":"Food",
            "description":"asdasd",
            "price_range":"PHP 1000 - PHP 1500",
            "link": '/Food'
        },
        {
            "name":"Rentals",
            "description":"asdasd",
            "price_range":"PHP 750 - PHP 1000",
            "link": '/Rentals'
        },
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
