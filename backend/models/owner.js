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
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/devimg/image/upload/v1600697065/defaultpic_dg4iun.png",
  },
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
