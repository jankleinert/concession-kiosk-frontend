var express = require('express');
var router = express.Router();
var request = require('request');
var host = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
var port = process.env.COMPONENT_BACKEND_PORT || 8080;
/* GET Users list */
router.get('/allusers', function (req, res, next) {
    let url = "http://" + host + ":" + port + "/allusers";
  
    request.get(url, function( err, response, body) {
      if(err){
        res.render('allusers', { error: err });
      } else {
        let userInfo = JSON.parse(body);
        console.log(userInfo);
        res.render('allusers', { users: userInfo  });
        
      }
    });
})
module.exports = router;