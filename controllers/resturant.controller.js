const Resturant = require('../models/resturant')

exports.createResturant = async (req,res) => {
    try {
        const {name, description, pureveg} = req.body

        if(!name || !description || pureveg==null) {
            return res.status(400).send({message: "Fields missing ...", status: "error"})
        }

        const newResturant = new Resturant({
            name,
            description,
            pureveg
        })

        const resturant = await newResturant.save();

        if(resturant) {
            res.status(201).send({message: "Resturant Created", resturant, status: "success"})
        }

    } catch (error) {
        res.status(500).send({message: error,status:"error"})
    }
}