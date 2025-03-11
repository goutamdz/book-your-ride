const captainModel = require('../models/captain.model');
const jwt = require('jsonwebtoken');    

module.exports.createCaptain = async (firstname,lastname,email,password,color,plate,capacity,vehicleType) => {
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    try {
        const captain=new captainModel({fullname:{firstname,lastname},email,password,vehicle:{color,plate,capacity,vehicleType}});
        await captain.save();
        return captain;
        
    } catch (error) {
        res.status(400).send(error);
    }
}