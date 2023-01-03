const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const resturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pureveg: {
        type: Boolean,
        required: true,
        default: false,
    },
    address: [{
        type: ObjectId,
        ref: 'Address'
    }],
    menu: [{
        type: ObjectId,
        ref: 'Menu'
    }],
    status: {
        type: String,
        enum: ["open","closed"],
        default: "closed"
    },
    average_rating: {
      type: Number,
      min: 0,
      max: 5,
      default : 0
    },
    createdBy: {
        type: ObjectId,
        ref: "User"
    }
})

const Resturant = mongoose.model("Resturant", resturantSchema)

module.exports = Resturant