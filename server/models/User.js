const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const schema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
   type: Date,
   required: true,
   default: Date.now()
  },
 lists: {
   items: [
    {
        listsId: {
        type: ObjectId,
        ref: 'Lesson',
      }
    }
   ]
 }
});

module.exports = mongoose.model('User', schema, 'user');