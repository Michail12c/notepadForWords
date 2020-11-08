const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const schema = new Schema({
  name: String,
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  listWords: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('List', schema, 'list');