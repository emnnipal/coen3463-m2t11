var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        {
            "name":"Wedding",
            "description":"Modern and maddeningly marvelous, Wedding is for the edgy, daring and adventurous who like structural designs. From the theme of your to the beautiful and boxy cake, patterns and lines have predominantly made this affair not your usual wedding around the corner. Your wedding will be a day to remember where everything is according to your dream. We make your dream come true.",
            "description2":"Food is the most important thing in a wedding as it helps establish the occasion more lovely and tasty! An ideal caterer, mouthwatering menu variety, and essentially quality food add a lot to the overall experience. With a perfect wedding caterer and excellent dining service provided, the wedding can remain in the heart of guests for years to come. Hence, you decide where you can choose a perfect wedding catering services that can give you the best. We, at Big Mom, filling every occasion with great food and service.",
            "link": '/Wedding',
            "pic":'./images/wedding.jpg',
            "price":"Php 100,000 Package Deal | Php 700 per waiter/server"
        },
        
    ]
  };
  res.render('service', bodyData);
});

module.exports = router;
