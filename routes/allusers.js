const express = require('express');
const router = express.Router();

/* GET Users list */
router.post('/', function (req, res, next) {
    let url = "http://" + host + ":" + port + "/allusers";
  
    request.get(url, function( err, response, body) {
      if(err){
        res.render('thankyou', { userNumber: -1 });
      } else {
        let userInfo = JSON.parse(body);
        res.render('thankyou', { users: userInfo  });
        
      }
    });
})
module.exports = router;