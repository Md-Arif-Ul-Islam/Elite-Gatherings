const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    datetime: {
      type: Date,
      required: true
    },
    maxPeople: {
      type: Number,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Seminar', 'Workshop', 'Hackathon', 'Cultural', 'Sports', 'Other'],
      required: true
    },
    guest: {
      type: String,
      default: null 
    },
    poster: {
      type: String, 
      default: null
    },
    programList: {
      type: [String], 
      default: []
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
    
  }, { timestamps: true });
  
  module.exports = mongoose.model('Program', programSchema);
  