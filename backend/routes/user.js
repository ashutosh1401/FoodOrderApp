const express = require('express')
const router = express.Router();
const { register, login } = require('../controllers/users.controller')

router.post("/register", register)

router.post('/login', isAuth, login)

module.exports = router