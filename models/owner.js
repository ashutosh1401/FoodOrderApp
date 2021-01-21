const mongoose = require("mongoose");
const validator = require("validator");

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase() == "password") {
        throw new Error("Password could not be named as password");
      }
    },
  },
  repassword: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase() == "password") {
        throw new Error("Password could not be named as password");
      }
    },
  },
  resturantName: {
    type: String,
    required: true,
  },
  addressLineOne: {
    type: String,
    required: true,
  },
  addressLineTwo: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
