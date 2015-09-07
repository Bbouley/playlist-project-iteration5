var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/playlistform', function(req, res, next){
  res.render('playlistform', {userEmail:'test'});
});

// router.post('/playlist', function(req, res, next){
//   console.log(req.body);
//   res.render('index');
// });

module.exports = router;
