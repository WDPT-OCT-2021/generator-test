var express = require('express');
var router = express.Router();
const Owner = require('../models/Owner');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('WE HIT USERS');
});

router.get('/profile/:username', function (req, res, next) {
  console.log(req.params);
  res.render('userPage', { user: req.params.username });
});

router.get('/profile', function (req, res, next) {
  console.log(req.query);
  res.render('search', { search: req.query.searchParams });
});

router.post('/sign-up', function (req, res, next) {
  //username
  //password
  console.log('THE BODY', req.body);
  console.log(typeof req.body.username);
  Owner.create({
    name: req.body.name,
    location: req.body.location,
  })
    .then((results) => {
      console.log('Results', results);
      res.json(results);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
      res.json(err);
    });

  //cleaner version
  // res.render('signup', req.body);
});

module.exports = router;

//req = request
//res = response

// :username -- this is just a variable name
//short for parameters
//comes from the url
// req.params;

//req.query
//Used for searching
//typically not used as much as other req. objects

//req.body
//Used for sending information to the server
//Used for post requests
