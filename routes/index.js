var express = require('express');
var router = express.Router();
var request = require('request');
var host = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
var port = process.env.COMPONENT_BACKEND_PORT || 8080;

/* GET main page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST main page */
router.post('/', function (req, res, next) {
  let url = "http://" + host + ":" + port + "/ticketNumber?firstname=" +
             req.body.firstname + "&lastname=" + req.body.lastname + "&age=" +
             req.body.age + "&email=" + req.body.email + "&occupation=" +req.body.occupation; 

  request.get(url, function( err, response, body) {
    if(err){
      res.render('thankyou', { ticketNumber: -1 });
    } else {
      let ticketInfo = JSON.parse(body);
      res.render('thankyou', { ticketNumber: ticketInfo.result, user: ticketInfo.user  });
      
    }
  });
});

module.exports = router;
