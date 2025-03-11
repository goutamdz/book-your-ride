const captainModel = require('../models/captain.model');
const jwt = require('jsonwebtoken');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    if (!fullname || !fullname.firstname || !fullname.lastname) {
        return res.status(400).json({ errors: [{ msg: 'Fullname with firstname and lastname is required' }] });
    }

    const isCaptain = await captainModel.findOne({ email });
    if (isCaptain) {
        return res.status(400).json({ errors: [{ msg: 'Captain already exists' }] });
    }

    try {
        const hashPassword = await captainModel.hashPassword(password);
        const captain = new captainModel({ 
            fullname: fullname, 
            email: email, 
            password: hashPassword, 
            vehicle: vehicle 
        });
        await captain.save();
        console.log("Captain registered successfully");

        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
    } catch (err) {
        console.error("Error registering captain:", err);
        res.status(500).send(err.message);
    }
}