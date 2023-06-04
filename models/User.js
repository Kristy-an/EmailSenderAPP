const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String

});

// create new collection
mongoose.model('users', userSchema);
