import express from "express";
const router = express.Router();
const { register, login } = require('../controllers/owner.controller')

router.post("/register", register);

router.post("/login", login);

module.exports = router;
