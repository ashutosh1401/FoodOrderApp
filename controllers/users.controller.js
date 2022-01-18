const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { getToken, isAuth } = require("../middleware/utils");
const { isValidEmail, isPasswordStrong } = require('../utlis/validations')

exports.register = async (req, res) => {
    if(req.body.name=='' || req.body.email=='' || req.body.email=='')
    {
        return res.status(400).send({message: "Null Values mot allowed"})
    }
    if (!isValidEmail(req.body.email))
        return res.status(400).send({ message: "Invalid Email" });
    if (!isPasswordStrong(req.body.password))
        return res.status(400).send({ message: "Password is not strong" });
    const inuser = await User.findOne({
        email: req.body.email
    })

    if (inuser) {
        return res.status(400).send({message:"User already exists"})
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
            })
        }
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
}

exports.login = async (req, res) => {
    if (!isValidEmail(req.body.email))
        return res.status(400).send({ message: "Invalid Email" });
    const signinuser = await User.findOne({
        email: req.body.email
    })
    if (!signinuser) {
        return res.status(400).send({ message: "User is not registered" })
    }
    const isMatch = await bcrypt.compare(req.body.password,signinuser.password)
    try {
        if (isMatch) {
            res.status(201).send({
                _id: signinuser._id,
                name: signinuser.name,
                email: signinuser.email,
                avatar: signinuser.avatar,
                token: getToken(signinuser)
            })
        }
        else {
            res.status(401).send({ message: "Invalid Credentials" });
        }
    } catch (e) {
        res.status(500).send(e)
    }

}