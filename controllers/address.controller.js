const Address = require("../models/address");

exports.CreateAddress = async (req, res) => {
    try {
        const newAddress = await Address({
            addressLineOne: req.body.addressLineOne,
            addressLineTwo: req.body.addressLineTwo,
            city: req.body.city,
            state: req.body.state,
            landmark: req.body.landmark,
            pincode: req.body.pincode,
            postedBy: req.user,
        });
        const finAddress = await newAddress.save()
        if (finAddress) {
            res.status(201).send(finAddress);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}

exports.getAllAddress = async (req, res) => {
    try {
        const allAddress = await Address.find({
            postedBy: req.user._id,
        });
        //console.log(allAddress);
        if (allAddress) {
            res.status(200).send(allAddress);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}