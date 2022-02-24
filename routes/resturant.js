const express = require('express')
const router = express.Router()
const {createResturant, viewResturantDetails} = require('../controllers/resturant.controller')
const { isAuth } = require("../middleware/utils");

router.post('/resturant',isAuth ,createResturant)

router.get('/resturant/:id', viewResturantDetails)

module.exports = router