var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Wedding",
            "description":"Click to",
            "link": '/CateringService'
        },
        {
            "name":"Birthdays",
            "description":"asdasd",
            "price_range":"PHP 1000 - PHP 1500",
            "link": '/Food'
        },
        {
            "name":"Ball",
            "description":"asdasd",
            "price_range":"PHP 750 - PHP 1000",
            "link": '/Rentals'
        },
        
    ]
  };
  res.render('index', bodyData);
});

module.exports = router;
