const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],  
  },
  options: {
      type: Array,
      required: [true, 'Options is required'],
  },
},
  { versionKey: false, timestamps: true }
);

const Question = mongoose.model('Question', questionSchema);

module.exports = {
  Question
}