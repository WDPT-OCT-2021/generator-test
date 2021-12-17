var express = require('express');
var router = express.Router();
const Pet = require('../models/Pet');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('You found the pet router!!');
  //   res.render('index', { title: 'You Fououn', name: 'Charlie' });
});

router.get('/all-pets', (req, res) => {
  Pet.find()
    .then((results) => {
      console.log('These are the results', results);
      res.json(results);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
});

// :variableName

//Lets make a real page for looking at a pet
router.get('/find/name/:thePetName', (req, res) => {
  console.log('This is in the params', req.params.thePetName);
  Pet.findOne({ name: req.params.thePetName })
    .then((results) => {
      console.log('These are the results', results);
      //There's nothing wrong with doing it this way
      res.render('petPage', {
        name: results.name,
        age: results.age,
        animal: results.animal,
        method: 'by name',
      });

      //A more dynamic version
      //   res.render('petPage', results);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
});

//Finding by Id
router.get('/find/id/:thePetId', (req, res) => {
  console.log('This is in the params', req.params.thePetId);
  Pet.findById(req.params.thePetId)
    .then((results) => {
      console.log('These are the results', results);
      //There's nothing wrong with doing it this way
      res.render('petPage', {
        name: results.name,
        age: results.age,
        animal: results.animal,
        method: 'by id',
      });

      //A more dynamic version
      //   res.render('petPage', results);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
});

router.get('/find/age/:thePetAge', (req, res) => {
  console.log('This is in the params', req.params.thePetAge);
  Pet.find({ age: req.params.thePetAge })
    .then((results) => {
      console.log('These are the results', results);
      res.json(results, {});
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
});

// router.get('/find/:method/:searchParam', (req, res) => {
//   console.log('This is in the params', req.params);
//   Pet.findOne({ [req.params.method]: req.params.searchParam })
//     .then((results) => {
//       console.log('These are the results', results);
//       res.render('petPage', {
//         name: results.name,
//         age: results.age,
//         animal: results.animal,
//         method: req.params.method,
//       });
//     })
//     .catch((err) => {
//       console.log('Something went wrong', err);
//     });
// });

//Three main ways to get data
//req.params -- Variables in the URL
//req.query -- comes from searching
//req.body -- POST requests, sending data in a form

//Different ways to send data

// res.send() -- Sends plain text. This is for testing, and not much more
// res.json() -- Sends raw JSON data. Great for APIs, not great for displaying data. User unfriendly

//The one we'll be using the most for this module
// res.render() -- calls an hbs, which will display data like a real website
//Takes two arguments:
//1. A string which is the name of the hbs file
//2. The data, which will be dynamic for the page

module.exports = router;
