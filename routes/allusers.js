const express = require('express');
const router = express.Router();

/* GET Users list */
router.get('/allusers', function (req, res, next) {
    let url = "http://" + host + ":" + port + "/allusers";
  
    request.get(url, function( err, response, body) {
      if(err){
        res.render('thankyou', { userNumber: -1 });
      } else {
        let userInfo = JSON.parse(body);
        console.log(userInfo);
        res.render('thankyou', { users: userInfo  });
        
      }
    });
})
module.exports = router;