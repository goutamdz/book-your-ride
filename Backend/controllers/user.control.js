const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword });

    const token = await user.generateAuthToken();

    res.status(201).json({ user, token });
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const isMath = await user.comparePassword(password);

    if (!isMath) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = await user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ user, token });

}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);

}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization;
    await blackListTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
}