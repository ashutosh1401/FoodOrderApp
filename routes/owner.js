const express = require("express");
const router = express.Router();
const Owner = require("../models/owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

router.post("/signowner", (req, res) => {
  const {
    name,
    email,
    password,
    repassword,
    resturantName,
    addressLineOne,
    addressLineTwo,
    city,
    pincode,
    state,
    avtar,
  } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    !repassword ||
    !resturantName ||
    !addressLineOne ||
    !addressLineTwo ||
    !city ||
    !pincode ||
    !state
  ) {
    return res.status(422).send({ error: "Please add fields correctly" });
  }
  if (password != repassword) {
    return res.status(422).send({ error: "password not same as repassword" });
  }
  Owner.findOne({ email }).then((savedOwner) => {
    if (savedOwner) {
      return res.status(404).send({ error: "User Already Exists" });
    }
    bcrypt.hash(password, 8).then((hashPassword) => {
      const owner = new Owner({
        name,
        email,
        password: hashPassword,
        repassword: hashPassword,
        resturantName,
        addressLineOne,
        addressLineTwo,
        city,
        pincode,
        state,
        avtar,
      });
      owner
        .save()
        .then(() => {
          res.json({ message: "saved Succesfully" });
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    });
  });
});

module.exports = router;
