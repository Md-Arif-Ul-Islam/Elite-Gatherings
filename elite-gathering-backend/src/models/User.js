const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash password if it's new or modified
  this.password = await bcrypt.hash(this.password, 10); // Hash password with 10 rounds
  next();
});

// Method to compare passwords during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Compare plain text with hashed password
};

const User = mongoose.model('User', userSchema);

module.exports = User;
