const rideModel = require('../models/ride.model');
const crypto = require('crypto');
const mapsService = require('./maps.service');

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error("Pickup and destination are required to calculate fare");
    }
    const distanceAndTime = await mapsService.getDistanceAndTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20,
    };

    const farePerKm = {
        auto: 2,
        car: 3,
        motorcycle: 1.5,
    };

    const fare = {
        auto: baseFare.auto + (distanceAndTime.distance.value / 1000) * farePerKm.auto,
        car: baseFare.car + (distanceAndTime.distance.value / 1000) * farePerKm.car,
        motorcycle: baseFare.motorcycle + (distanceAndTime.distance.value / 1000) * farePerKm.motorcycle,
    };

    // Return both fare and distanceAndTime
    return { fare, distanceAndTime };
}

module.exports.getFare=getFare;

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }

    // Destructure fare and distanceAndTime from getFare
    const { fare, distanceAndTime } = await getFare(pickup, destination);

    const ride = new rideModel({
        user: user,
        pickup: pickup,
        destination: destination,
        distance: distanceAndTime.distance.value, // Use distanceAndTime here
        duration: distanceAndTime.duration.value, // Use distanceAndTime here
        fare: fare[vehicleType], // Use the fare for the specified vehicle type
        otp: getOtp(6), // Generate a 4-digit OTP
    });

    return await ride.save();
};

