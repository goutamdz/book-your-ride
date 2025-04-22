const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    distance: {
        type: Number,// in metre
    },
    duration: {
        type: Number,// in seconds
    },
    fare: {
        type: Number,
        required: true
    },
    paymentId:{
        type: String,
    },
    status: {
        type: String,
        enum: ['pending',"accepted",'completed',"ongoing", 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('ride', rideSchema);