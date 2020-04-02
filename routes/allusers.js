const express = require('express');
const router = express.Router();

/* GET Users list */
router.get('/allusers', function (req, res, next) {
    let url = "http://" + host + ":" + port + "/allusers";
  
    request.get(url, function( err, response, body) {
      if(err){
        res.render('allusers', { userNumber: -1 });
      } else {
        let userInfo = JSON.parse(body);
        console.log(userInfo);
        res.render('allusers', { users: userInfo  });
        
      }
    });
})
module.exports = router;