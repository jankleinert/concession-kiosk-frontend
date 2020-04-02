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
  let url = "http://" + host + ":" + port + "/userNumber?firstname=" +
             req.body.firstname + "&lastname=" + req.body.lastname + "&age=" +
             req.body.age + "&email=" + req.body.email + "&occupation=" +req.body.occupation; 

  request.get(url, function( err, response, body) {
    if(err){
      res.render('thankyou', { userNumber: -1 });
    } else {
      let userInfo = JSON.parse(body);
      res.render('allusers', { userNumber: userInfo.result, user: userInfo.user  });
      
    }
  });
});




module.exports = router;
