const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Invalid Email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    minlength: [8, 'Your phone number should be 8 digits long'],
  },   
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Your password length should be 8 characters'],
  },  
  profilePicture: {
    type: String,
    required: false
  }
});
// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
module.exports = mongoose.model('User', userSchema);