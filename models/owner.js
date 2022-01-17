const mongoose = require("mongoose");

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
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/devimg/image/upload/v1600697065/defaultpic_dg4iun.png",
  },
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
