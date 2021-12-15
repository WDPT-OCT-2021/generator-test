const mongoose = require('mongoose');
const Pet = require('./models/Pet');

const petArr = [
  {
    name: 'Sam',
    age: 1,
    likesVet: true,
    animal: 'dog',
  },
  {
    name: 'Troy',
    age: 5,
    likesVet: false,
    animal: 'cat',
  },
  {
    name: 'Mousse',
    age: 6,
    likesVet: true,
    animal: 'cat',
  },
  {
    name: 'Clementine',
    age: 1,
    likesVet: true,
    animal: 'dog',
  },
  {
    name: 'Milo',
    age: 7,
    likesVet: true,
    animal: 'cat',
  },
  {
    name: 'Remmy',
    age: 4,
    likesVet: false,
    animal: 'dog',
  },
  {
    name: 'Fido',
    age: 10,
    likesVet: false,
    animal: 'dog',
  },
  {
    name: 'Luna',
    age: 3,
    likesVet: false,
    animal: 'cat',
  },
  {
    name: 'Stripes',
    age: 11,
    likesVet: false,
    animal: 'cat',
  },
  {
    name: 'NewCat',
    age: 11,
    likesVet: false,
    animal: 'cat',
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
