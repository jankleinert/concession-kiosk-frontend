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
  request("http://" + host+":"+port + "/ticketNumber", function (err, response, body) {

    
    if(err){
      //res.render('index', { rides: [{name: 'error: ' + err, wait: -1 }]});
      res.render('thankyou', { ticketNumber: -1 });
    } else {
      var ticketNum = JSON.parse(body);
      res.render('thankyou', { ticketNumber: ticketNum.result });
      
    }
  });
  //res.render('thankyou', { ticketNumber: 100, hotdog: req.hotdog, pizza: req.pizza });
})

module.exports = router;
