var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getScore', function(req, res, next) {
  console.log(req.query);
  
  res.json({ message: `Group ` });
});

module.exports = router;
