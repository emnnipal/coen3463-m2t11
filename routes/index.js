var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Wedding",
            "description":"Click to",
            "link": '/Wedding'
            
        },
        {
            "name":"Birthdays",
            "description":"asdasd",
            "link": '/Bday'
            
        },
        {
            "name":"Ball",
            "description":"asdasd",
            "link": '/Ball'
            
        },
        
    ]
  };
  res.render('index', bodyData);
});

module.exports = router;
