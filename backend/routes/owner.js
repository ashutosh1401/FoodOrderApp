import express from "express";
import Owner from "../models/owner";
const router = express.Router();
const { register } = require('../controllers/owner.controller')
const { getToken } = require("../middleware/utils");

router.post("/register", register);

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
