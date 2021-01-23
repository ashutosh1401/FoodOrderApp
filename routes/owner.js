const express = require("express");
const router = express.Router();
const Owner = require("../models/owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const { authOwner } = require("../middleware/authenticate");

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

router.post("/loginowner", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Please Add Email or Password" });
  }
  Owner.findOne({ email }).then((savedOwner) => {
    if (!savedOwner) {
      return res.status(422).json({ error: "Invalid Email or Password" });
    }
    bcrypt.compare(password, savedOwner.password).then((isMatch) => {
      if (isMatch) {
        const token = jwt.sign({ _id: savedOwner._id.toString() }, JWT_SECRET);
        const {
          _id,
          name,
          email,
          password,
          resturantName,
          addressLineOne,
          addressLineTwo,
          city,
          pincode,
          state,
          avatar,
        } = savedOwner;

        res.send({
          token,
          owner: {
            _id,
            name,
            email,
            resturantName,
            addressLineOne,
            addressLineTwo,
            city,
            pincode,
            state,
            avatar,
          },
        });
      } else {
        return res.status(404).send({ error: "Wrong Email or Password" });
      }
    });
  });
});

router.get("/owner/:id", authOwner, (req, res) => {
  Owner.findOne({ _id: req.params.id })
    .select("-password repassword")
    .then((owner) => {
      res.send({ owner });
    })
    .catch((err) => {
      res.status(404).send({ error: "User Not Found" });
    });
});

module.exports = router;
