var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Birthdays",
            "description":"There are tremendous and tiresome preparations for a kiddie party but busy parents should not feel awful about it because there’s an easier option. Parents could delegate the party preparation to a catering company or a fast-food service to set everything in order. We, at Big Mom, filling every occasion with great food and service.",
            "link": '/Bday',
            "pic": '/images/bday.jpg'
        },
        
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
