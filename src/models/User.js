const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },  
    email: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'] // Ensure role is either 'admin' or 'user'
    }
});

module.exports = mongoose.model('User', userSchema)