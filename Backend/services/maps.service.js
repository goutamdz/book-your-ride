const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure you
    const url=`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
            }
        } else {
            throw new Error('Unable to find address coordinates');
        }
    } catch (error) {
        console.error('Error fetching address coordinates:', error);
        throw error;
    }

}

module.exports.getDistanceAndTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure you have set this in your .env file
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.rows[0].elements[0];
            // return {
            //     distance: element.distance.text,
            //     duration: element.duration.text,
            // }
        } else {
            throw new Error('Unable to find distance and time');
        }   
    }
    catch (error) {
        console.error('Error fetching distance and time:', error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error('Input is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure you have set this in your .env file
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to find suggestions');
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw error;
    }
}
