const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  current_company: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  profile_picture: {
    type: String,
    required: false
  }
});
module.exports = User = mongoose.model("users", UserSchema);