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
    menu: [{
        type: ObjectId,
        ref: 'Menu'
    }]
})

const Resturant = mongoose.model("Resturant", resturantSchema)

module.exports = Resturant