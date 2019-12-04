var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ali' });
});

router.post('/test',function (req,res) {
   res.send('ok');
});

module.exports = router;
