const express = require('express');
const router = express.Router();
const rideController = require('../controllers/ride.controller');
const authMiddleware=require('../middlewares/auth.middleware');

const {body,query}=require('express-validator');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('INVALID PICKUP LOCATION'),
    body('destination').isString().isLength({min:3}).withMessage('INVALID Destination LOCATION'),
    body('vehicleType').isString().isLength({min:3}).withMessage('INVALID VEHICLE TYPE'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('INVALID PICKUP LOCATION'),
    query('destination').isString().isLength({min:3}).withMessage('INVALID DESTINATION LOCATION'),
    rideController.getFare
)

module.exports = router;

