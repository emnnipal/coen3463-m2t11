var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Birthdays",
            "description":"...",
            "link": '/Bday',
            "pic": './images/Bday.jpg'
        },
        
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
