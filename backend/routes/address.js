import express from "express";
import Address from "../models/address";
const router = express.Router();
const { isAuth } = require("../middleware/utils");

router.post("/address", isAuth, async (req, res) => {
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

    if (newAddress) {
      res.send(newAddress);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/address", isAuth, async (req, res) => {
  try {
    const allAddress = await Address.find({
      postedBy: req.user._id,
    });
    if (allAddress) {
      res.send(allAddress);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
