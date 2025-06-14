const rideService = require('../services/ride.services');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {pickup, destination, vehicleType} = req.body;
    try{
        const ride=await rideService.createRide({user:req.user._id, pickup, destination, vehicleType});
        res.status(201).json(ride);
    }
    catch (error) {
        console.error("Error creating ride:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    next();
}

module.exports.getFare = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        console.error("Error getting fare:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    next();
}