const express = require("express");
const router = express.Router();
const { createMenuItem, getMenuItem, deleteItembyId, updateMenubyId } = require('../controllers/menu.controller')
const { isAuth } = require("../middleware/utils");

router.post("/createitem", isAuth, createMenuItem);

router.get("/viewitem", isAuth, getMenuItem);

router.delete("/menu/:id", isAuth, deleteItembyId);

router.patch("/menu/:id", isAuth, updateMenubyId);

module.exports = router;
