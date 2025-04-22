const mapService=require("../services/maps.service");
const { validationResult } = require('express-validator');

module.exports.getCoordinates=async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {address}=req.query;
    try{
        const coordinates=await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    }
    catch(error){
        console.error("Error fetching coordinates:",error);
        res.status(500).json({error:"Internal Server Error"});
    }
    next(); 
}

module.exports.getDistanceAndTime=async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {origin,destination}=req.query;
    try{
        const distanceAndTime=await mapService.getDistanceAndTime(origin,destination);
        res.status(200).json(distanceAndTime);
    }
    catch(error){
        console.error("Error fetching distance and time:",error);
        res.status(500).json({error:"Internal Server Error"});
    }
    next(); 
}

module.exports.getAutoCompleteSuggestions=async (req,res,next)=>{
    try{
        const {input}=req.query;
        const suggestions=await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    }
    catch(error){
        console.error("Error fetching suggestions:",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}