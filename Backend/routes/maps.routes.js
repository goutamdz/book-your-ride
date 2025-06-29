const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller');
const {query} = require('express-validator');

router.get('/get-coordinates',query('address').isLength({min:3}), authMiddleware.authUser, mapController.getCoordinates);

router.get('/get-distance-time',
    query('origin').isLength({min:2}),
    query('destination').isLength({min:2}),
    authMiddleware.authUser,
    mapController.getDistanceAndTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
)

module.exports = router;
