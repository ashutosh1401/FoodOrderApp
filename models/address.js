const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const addressSchema = new mongoose.Schema({
  addressLineOne: {
    type: String,
    required: true,
  },
  addressLineTwo: {
    type: String,
    required: true,
  },
  state: {
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
  landmark: {
    type: String,
  },
  postedBy: {
    type: ObjectId,
    refPath: ["Owner", "User"],
  },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
