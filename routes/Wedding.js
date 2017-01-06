var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Wedding",
            "description":"...",
            "link": '/Wedding',
            "pic":'./images/Wedding.jpg'
        },
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
