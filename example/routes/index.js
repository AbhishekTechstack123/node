var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: "Abhishek", friends: ["Kundan", "Nancy", "Raja"]});
});

module.exports = router;
