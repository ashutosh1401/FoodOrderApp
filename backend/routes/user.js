import express from "express";
import User from "../models/user";
const router = express.Router();
import bcrypt from "bcryptjs";
const { getToken } = require("../middleware/utils");

router.post("/register", async (req, res) => {

    const inuser = await User.findOne({
        email: req.body.email
    })

    if (inuser) {
        throw new Error("User already Exists");
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            avatar: req.body.avatar,
        })
        const newUser = await user.save()
        if (newUser) {
            res.send({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                avatar: newUser.avatar,
                token: getToken(newOwner)
            })
        }
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
})