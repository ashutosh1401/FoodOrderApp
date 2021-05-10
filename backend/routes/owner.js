import express from "express";
import Owner from "../models/owner";
const router = express.Router();
import bcrypt from "bcryptjs";
const { getToken } = require("../middleware/utils");

router.post("/register", async (req, res) => {

  const inowner = await Owner.findOne({
    email: req.body.email,
  });
  if (inowner) {
    return new Error("User Already Exists");
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const owner = new Owner({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      avatar: req.body.avatar,
    });
    const newOwner = await owner.save();
    if (newOwner) {
      res.send({
        _id: newOwner._id,
        name: newOwner.name,
        email: newOwner.email,
        password: newOwner.password,
        token: getToken(newOwner),
      });
    }
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  const siginowner = await Owner.findOne({
    email: req.body.email,
  });
  if (siginowner) {
    const isMatch = await bcrypt.compare(
      req.body.password,
      siginowner.password
    );
    if (isMatch) {
      res.send({
        _id: siginowner._id,
        name: siginowner.name,
        email: siginowner.email,
        token: getToken(siginowner),
      });
    } else {
      res.status(401).send({ error: "Invalid Credentials" });
    }
  } else {
    res.status(401).send({ error: "Invalid Credentials" });
  }
});

module.exports = router;
