var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bodyData = {
    services: [
        
        
    ]
  };
  res.render('contact', bodyData);
});

module.exports = router;