var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Ball,",
            "description":"Having your business event planned and catered to perfection can be a tricky affair if you’re doing it alone. There are so many considerations to be put in place. Sometimes the pressure can be too much for you to make heads or tails of what you want the event to achieve.  We, at Big Mom, filling every occasion with great food and service.",
            "link": '/Ball',
            "pic":'./images/ball.jpg'        
        },
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
