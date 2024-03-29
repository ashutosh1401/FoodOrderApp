const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const MenuSchema = new mongoose.Schema({
  ItemName: {
    type: String,
    required: true,
  },
  ItemDesc: {
    type: String,
    required: true,
  },
  ItemCost: {
    type: Number,
    required: true,
  },
  ItemPhoto: {
    type: String,
    default:
      "https://res.cloudinary.com/devimg/image/upload/v1615014071/imagenotavail_o7tzpn.jpg",
  },
  postedBy: {
    type: ObjectId,
    ref: "Owner",
  },
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
