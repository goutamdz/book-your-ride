const captainModel = require('../models/captain.model');
const jwt = require('jsonwebtoken');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

const blacklistTokenModel = require('../models/blacklistToken.model');

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

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Email or password' }] });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid or password' }] });
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1] || null;
    const blacklistToken = await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Captain logged out successfully' });
}