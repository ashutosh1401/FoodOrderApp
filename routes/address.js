const express = require('express')
const router = express.Router();
const { CreateAddress, getAllAddress } = require('../controllers/address.controller')
const { isAuth } = require("../middleware/utils");

router.post("/address", isAuth, CreateAddress);

router.get("/address", isAuth, getAllAddress);

module.exports = router;
