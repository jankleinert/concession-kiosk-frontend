var express = require('express');
var router = express.Router();
var request = require('request');
var host = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
var port = process.env.COMPONENT_BACKEND_PORT || 8080;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(host + ":" + port);
  request("http://" + host+":"+port + "/allrides", function (err, response, body) {
    console.log(body);
    console.log('err: ' + err);
    console.log('resp: ' + response);    
    
    if(err){
      res.render('index', { rides: 'oops'});
    } else {
      var rideInfo = JSON.parse(body)

      
      res.render('index', { rides: rideInfo.result.rides });
      
    }
  });
});

module.exports = router;
