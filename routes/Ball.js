var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Ball,",
            "description":"...",
            "link": '/Ball',
            "pic":'./images/ball.jpg'        
        },
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
