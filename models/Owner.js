const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  time: {
    type: Date,
    default: Date.now,
  },
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
