var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bloomaway', function(req, res, next) {
  res.render('bloomaway');
});

router.get('/palestine', function(req, res, next) {
  res.render('palestine_no_preload');
});

router.get('/palestinexr', function(req, res, next) {
  res.render('palestine_preload');
});

module.exports = router;
