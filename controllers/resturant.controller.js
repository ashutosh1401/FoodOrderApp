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

exports.viewResturantDetails = async (req,res) => {
    try {
        const resid = req.params.id
        const resdetails = await Resturant.findById({_id: resid})

        if(!resdetails || resdetails.length == 0) {
            return res.status(404).send({message:"Resturant not found",status:"error"})
        }

        res.status(200).send({resdetails})
    } catch (error) {
        res.status(500).send({message: error,status:"error"})
    }
}