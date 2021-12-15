const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a Schema for Pet
//This is like a blueprint for all the animals in our database

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  age: Number,

  likesVet: {
    type: Boolean,
    default: false,
  },

  animal: {
    type: String,
    enum: ['cat', 'dog'],
    require: true,
  },

  time: {
    type: Date,
    default: Date.now,
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
