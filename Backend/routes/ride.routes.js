const express = require('express');
const router = express.Router();
const rideController = require('../controllers/ride.controller');
const authMiddleware=require('../middlewares/auth.middleware');

const {body}=require('express-validator');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('INVALID PICKUP LOCATION'),
    body('destination').isString().isLength({min:3}).withMessage('INVALID Destination LOCATION'),
    body('vehicleType').isString().isLength({min:3}).withMessage('INVALID VEHICLE TYPE'),
    rideController.createRide
)

module.exports = router;

