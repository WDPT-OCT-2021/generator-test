var express = require('express');
var router = express.Router();
const Pet = require('../models/Pet');

//async/await
router.get('/all-pets', async (req, res) => {
  //try/catch block
  try {
    let results = await Pet.find();
    res.render('allPets', { animals: results });
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

//.then/.catch
// router.get('/all-pets', async (req, res) => {
//   let results = awaitPet.find()
//     .then((results) => {
//       console.log('These are the results', results);
//       // res.json(results);
//       res.render('allPets', { animals: results });
//     })
//     .catch((err) => {
//       console.log('Something went wrong', err);
//     });
// });

router.get('/find/name/:thePetName', async (req, res) => {
  try {
    let results = await Pet.findOne({ name: req.params.thePetName });
    res.render('petPage', results);
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

router.get('/findJSON/id/:thePetId', async (req, res) => {
  try {
    let results = await Pet.findById(req.params.thePetId).populate('owner');
    res.json(results);
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

router.get('/find/id/:thePetId', async (req, res) => {
  try {
    let results = await Pet.findById(req.params.thePetId);
    res.render('petPage', results);
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

router.get('/find/age/:thePetAge', async (req, res) => {
  try {
    let results = await Pet.find({ age: req.params.thePetAge });
    res.json(results, {});
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

router.get('/adopt/:petId', async (req, res) => {
  //PASTE THE OWNER'S OBJECT ID HERE!!!!!!!
  try {
    let results = await Pet.findByIdAndUpdate(req.params.petId, {
      owner: OWNER_ID,
    });
    res.render('index', { title: `${results.name} has been adopted` });
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

router.get('/add-pet', (req, res) => {
  res.render('addPet');
});

router.post('/add-pet', async (req, res) => {
  try {
    let results = await Pet.create(req.body);
    res.render('index', {
      title: `${results.name} has been added. We hope they find a good home!`,
    });
  } catch (err) {
    console.log('Something went wrong', err);
  }
});

module.exports = router;
