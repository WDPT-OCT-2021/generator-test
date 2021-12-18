const mongoose = require('mongoose');
const Pet = require('./models/Pet');

const petArr = [
  {
    name: 'Sam',
    age: 1,
    likesVet: true,
    animal: 'dog',
    vaccinated: true,
    fixed: false,
  },
  {
    name: 'Troy',
    age: 5,
    likesVet: false,
    animal: 'cat',
    vaccinated: true,
    fixed: true,
  },
  {
    name: 'Mousse',
    age: 6,
    likesVet: true,
    animal: 'cat',
    vaccinated: false,
    fixed: false,
  },
  {
    name: 'Clementine',
    age: 1,
    likesVet: true,
    animal: 'dog',
    vaccinated: true,
    fixed: true,
  },
  {
    name: 'Milo',
    age: 7,
    likesVet: true,
    animal: 'cat',
    vaccinated: true,
    fixed: true,
  },
  {
    name: 'Remmy',
    age: 4,
    likesVet: false,
    animal: 'dog',
    vaccinated: false,
    fixed: false,
  },
  {
    name: 'Fido',
    age: 10,
    likesVet: false,
    animal: 'dog',
    vaccinated: false,
    fixed: true,
  },
  {
    name: 'Luna',
    age: 3,
    likesVet: false,
    animal: 'cat',
    vaccinated: true,
    fixed: true,
  },
  {
    name: 'Stripes',
    age: 11,
    likesVet: false,
    animal: 'cat',
    vaccinated: true,
    fixed: true,
  },
  {
    name: 'NewCat',
    age: 11,
    likesVet: false,
    animal: 'cat',
    vaccinated: false,
    fixed: false,
  },
];

mongoose
  .connect('mongodb://localhost/iron-test', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error('Error connecting to mongo', err));

Pet.create(petArr)
  .then((results) => {
    console.log('Success', results);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Something went wrong', err);
  });
