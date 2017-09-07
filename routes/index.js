var express = require('express');
var router = express.Router();

// GET / Register
router.get('/register', function (req, res, next) {
	return res.send("Register today!");
});

// POST / Register to receive info from user for DB
router.post('/register', function(req, res, next) {
	return res.send('User created!');
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
